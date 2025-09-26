// Accordion Funktion (behalten)
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    if (content.style.maxHeight && content.classList.contains("open")) {
      content.style.maxHeight = null;
      content.classList.remove("open");
    } else {
      document.querySelectorAll('.accordion-content').forEach(c => {
        c.style.maxHeight = null;
        c.classList.remove("open");
      });
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("open");
    }
  });
});

// Sidebar-Link Funktion – öffnet direkt im gleichen Tab (behalten)
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // Interne Links (Anker) ignorieren
    if (href.startsWith('#')) return;

    e.preventDefault();
    window.location.href = href;
  });
});

// User Dropdown Menü (NUR FÜR EXPENSE - angepasst)
document.getElementById('userMenuBtn')?.addEventListener('click', function() {
  document.getElementById('userDropdown').classList.toggle('show');
});

// Logout-Funktion (NUR FÜR EXPENSE - angepasst)
document.getElementById('logoutBtn')?.addEventListener('click', function() {
  // Zurück zur Hauptseite navigieren
  window.location.href = '../index.html';
});

// Dropdown schließen, wenn außerhalb geklickt (behalten)
window.addEventListener('click', function(e) {
  if (!e.target.matches('#userMenuBtn')) {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown?.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
});

// Refresh-Button (NUR FÜR EXPENSE - angepasst)
document.getElementById('refreshBtn')?.addEventListener('click', function() {
  location.reload();
});

// Neue Ausgabe Button (NUR FÜR EXPENSE - hinzufügen)
document.querySelector('.btn-primary')?.addEventListener('click', function() {
  alert('Neue Ausgabe erstellen');
});