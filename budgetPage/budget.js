document.getElementById('addItem').addEventListener('click', () => {
  const tbody = document.querySelector('#itemsTable tbody');
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td><input type="text" class="form-control desc"></td>
    <td><input type="number" class="form-control qty" value="1" min="1"></td>
    <td><input type="number" class="form-control unit" value="0" step="0.01"></td>
    <td class="line-total">0.00</td>
    <td><button type="button" class="btn btn-danger btn-sm remove-btn">X</button></td>
  `;
  tbody.appendChild(newRow);
  updateTotals();
});

document.getElementById('itemsTable').addEventListener('click', e => {
  if (e.target.classList.contains('remove-btn')) {
    e.target.closest('tr').remove();
    updateTotals();
  }
});

function updateTotals() {
  const rows = document.querySelectorAll('#itemsTable tbody tr');
  let grandTotal = 0;
  rows.forEach(row => {
    const qty = parseFloat(row.querySelector('.qty').value) || 0;
    const unit = parseFloat(row.querySelector('.unit').value) || 0;
    const total = qty * unit;
    row.querySelector('.line-total').textContent = total.toFixed(2);
    grandTotal += total;
  });
  document.getElementById('grandTotal').textContent = `Grand Total: €${grandTotal.toFixed(2)}`;
}

document.getElementById('itemsTable').addEventListener('input', e => {
  if (e.target.classList.contains('qty') || e.target.classList.contains('unit')) {
    updateTotals();
  }
});
