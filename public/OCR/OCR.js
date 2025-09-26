document.getElementById('enviarBtn').addEventListener('click', () => {
  const form = document.getElementById('newReadingForm');
  const formData = new FormData(form);

  let dataObj = {};
  formData.forEach((value, key) => {
    if (key === 'ficheros') {
      dataObj[key] = [];
      for (let file of form.elements['ficheros'].files) {
        dataObj[key].push(file.name);
      }
    } else {
      dataObj[key] = value;
    }
  });

  // Store reading in localStorage (append)
  let readings = JSON.parse(localStorage.getItem('ocrReadings') || '[]');
  readings.push({
    id: readings.length + 1,
    state: 'Pending',
    date: new Date().toLocaleDateString(),
    info: dataObj
  });
  localStorage.setItem('ocrReadings', JSON.stringify(readings));

  // Update table immediately
  updateTable();

  // Close modal
  const modal = bootstrap.Modal.getInstance(document.getElementById('newReadingModal'));
  modal.hide();

  // Reset form
  form.reset();
});

function updateTable() {
  let tbody = document.querySelector('#ocrTable tbody');
  tbody.innerHTML = '';

  let readings = JSON.parse(localStorage.getItem('ocrReadings') || '[]');

  if (readings.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="text-center text-muted">
      You haven't submitted any OCR readings yet.</td></tr>`;
    return;
  }

  readings.forEach(r => {
    let tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${r.id}</td>
      <td>${r.state}</td>
      <td>${r.date}</td>
      <td>${r.info.tipo_gasto} <br> ${r.info.comentarios}</td>
      <td>${(r.info.ficheros || []).join(', ')}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Load table on page load
document.addEventListener('DOMContentLoaded', updateTable);
