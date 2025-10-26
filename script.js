const form = document.getElementById('inspectionForm');
const logTable = document.getElementById('logTable');
const dailyCount = document.getElementById('dailyCount');
const weeklyCount = document.getElementById('weeklyCount');
const monthlyCount = document.getElementById('monthlyCount');

let logs = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const machine = document.getElementById('machineName').value;
  const type = document.getElementById('inspectionType').value;
  const notes = document.getElementById('notes').value;
  const date = new Date().toLocaleDateString();

  logs.push({ date, machine, type, notes });
  updateDashboard();
  updateTable();
  form.reset();
});

function updateDashboard() {
  dailyCount.textContent = logs.filter(log => log.type === 'daily').length;
  weeklyCount.textContent = logs.filter(log => log.type === 'weekly').length;
  monthlyCount.textContent = logs.filter(log => log.type === 'monthly').length;
}

function updateTable() {
  logTable.innerHTML = '';
  logs.forEach(log => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${log.date}</td><td>${log.machine}</td><td>${log.type}</td><td>${log.notes}</td>`;
    logTable.appendChild(row);
  });
}
