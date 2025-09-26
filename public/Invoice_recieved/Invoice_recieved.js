const btnFilter = document.getElementById('btnFilter');
const filterCard = document.getElementById('filterCard');
btnFilter.addEventListener('click', () => {
  filterCard.classList.toggle('d-none');
});

const btnNewInvoice = document.getElementById('btnNewInvoice');
btnNewInvoice.addEventListener('click', () => {
  const modal = new bootstrap.Modal(document.getElementById('modalNewInvoice'));
  modal.show();
});

const btnNewInvoiceOCR = document.getElementById('btnNewInvoiceOCR');
btnNewInvoiceOCR.addEventListener('click', () => {
  const modal = new bootstrap.Modal(document.getElementById('modalNewInvoiceOCR'));
  modal.show();
});

// Save invoice
document.getElementById('saveInvoiceBtn').addEventListener('click', () => {
  const form = document.getElementById('formNewInvoice');
  const formData = new FormData(form);
  let inv = {};
  formData.forEach((value, key) => {
    inv[key] = value;
  });
  // store in localStorage
  let invoices = JSON.parse(localStorage.getItem('invoices') || '[]');
  invoices.push(inv);
  localStorage.setItem('invoices', JSON.stringify(invoices));
  updateTable();
  bootstrap.Modal.getInstance(document.getElementById('modalNewInvoice')).hide();
  form.reset();
});

// Upload OCR
document.getElementById('saveOCRBtn').addEventListener('click', () => {
  const form = document.getElementById('formOCRInvoice');
  const fileInput = form.elements['ocrFile'];
  const file = fileInput.files[0];
  if (!file) {
    alert('Please select a file');
    return;
  }
  // for demo: just save file name
  let invoices = JSON.parse(localStorage.getItem('invoices') || '[]');
  invoices.push({
    invoiceNumber: 'OCR-' + Date.now(),
    date: new Date().toISOString().split('T')[0],
    supplier: '',
    amount: 0,
    ocrFileName: file.name
  });
  localStorage.setItem('invoices', JSON.stringify(invoices));
  updateTable();
  bootstrap.Modal.getInstance(document.getElementById('modalNewInvoiceOCR')).hide();
  form.reset();
});

// Download as PDF (using html2pdf or simple approach)
document.getElementById('btnDownloadPDF').addEventListener('click', () => {
  // Use html2pdf library or other technique. Here is a stub:
  alert('Download as PDF - Not implemented yet');
});

// Apply filter
document.getElementById('applyFilter').addEventListener('click', () => {
  updateTable();
  filterCard.classList.add('d-none');
});

// Update table rendering
function updateTable() {
  const tbody = document.getElementById('invoiceTbody');
  let invoices = JSON.parse(localStorage.getItem('invoices') || '[]');
  tbody.innerHTML = '';
  if (invoices.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-muted">
          There are no invoices for the selected period.<br>
          You can change the period using the selector on the top right.
        </td>
      </tr>`;
    return;
  }
  invoices.forEach(inv => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${inv.invoiceNumber || ''}</td>
      <td>${inv.state || ''}</td>
      <td>${inv.invoiceDate || inv.date || ''}</td>
      <td>${inv.supplier || ''}</td>
      <td>${inv.amount || ''}</td>
    `;
    tbody.appendChild(tr);
  });
}

// On page load
document.addEventListener('DOMContentLoaded', () => {
  updateTable();
});
