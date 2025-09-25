const ocrTableBody = document.getElementById('ocrTableBody');
const usagePercent = document.getElementById('usagePercent');
const newReadingBtn = document.getElementById('newReadingBtn');
const newReadingModal = new bootstrap.Modal(document.getElementById('newReadingModal'));

newReadingBtn.addEventListener('click', () => {
  newReadingModal.show();
});


function addReading() {
  // Replace empty state with a real row
  ocrTableBody.innerHTML = `
    <tr>
      <td>#1</td>
      <td><span class="badge bg-warning text-dark">Processing</span></td>
      <td>${new Date().toLocaleDateString()}</td>
      <td>Invoice_123.pdf</td>
      <td>Extracting data...</td>
    </tr>
  `; 
  const percent = 50; // Example
document.querySelector('.progress-circle').style.background = 
  `conic-gradient(#28a745 0deg, #28a745 ${percent * 3.6}deg, #e0e0e0 ${percent * 3.6}deg 360deg)`;

document.getElementById('usagePercent').textContent = percent + '%';

  // Update usage
  usagePercent.textContent = '20%';
}


document.getElementById('newReadingBtn').addEventListener('click', addReading);
document.getElementById('newReadingBtn2').addEventListener('click', addReading);
