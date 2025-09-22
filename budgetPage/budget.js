// Auto-generate budget number
const budgetNumber = "P-" + new Date().getFullYear() + "-0001";
document.getElementById('number').value = budgetNumber;

// Set today’s date
const today = new Date().toISOString().split('T')[0];
document.getElementById('date').value = today;

// Item table logic
const itemsTable = document.getElementById('itemsTable').querySelector('tbody');
const grandTotalEl = document.getElementById('grandTotal');

function updateTotals() {
  let grandTotal = 0;
  itemsTable.querySelectorAll('tr').forEach(row => {
    const qty = parseFloat(row.querySelector('.qty').value) || 0;
    const unit = parseFloat(row.querySelector('.unit').value) || 0;
    const total = qty * unit;
    row.querySelector('.line-total').textContent = total.toFixed(2);
    grandTotal += total;
  });
  grandTotalEl.textContent = grandTotal.toFixed(2);
}

itemsTable.addEventListener('input', updateTotals);

document.getElementById('addItem').addEventListener('click', () => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><input type="text" class="form-control desc"></td>
    <td><input type="number" class="form-control qty" value="1" min="1"></td>
    <td><input type="number" class="form-control unit" value="0" step="0.01"></td>
    <td class="line-total">0.00</td>
    <td><button type="button" class="btn btn-danger btn-sm remove-btn">X</button></td>
  `;
  itemsTable.appendChild(row);
});

itemsTable.addEventListener('click', e => {
  if (e.target.classList.contains('remove-btn')) {
    e.target.closest('tr').remove();
    updateTotals();
  }
});

updateTotals();
