// Accordion Funktion
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

// Sidebar-Link Funktion – öffnet im gleichen Tab
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    // Interne Links (Anker) ignorieren
    if (href.startsWith('#')) return;
    e.preventDefault();
    // Ohne Fetch: Seite einfach direkt im gleichen Tab öffnen
    window.location.href = href;
  });
});

// Kommentarbereich Toggle (optional)
document.getElementById('toggleComments')?.addEventListener('click', function() {
  alert('Kommentarbereich würde sich hier erweitern');
});

// Login-Funktionalität
document.getElementById('loginBtn')?.addEventListener('click', function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email && password) {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('appContainer').style.display = 'flex';
  } else {
    alert('Bitte geben Sie E-Mail und Passwort ein');
  }
});

// User Dropdown Menü
document.getElementById('userMenuBtn')?.addEventListener('click', function() {
  document.getElementById('userDropdown').classList.toggle('show');
});

// Logout-Funktion
document.getElementById('logoutBtn')?.addEventListener('click', function() {
  document.getElementById('appContainer').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('userDropdown').classList.remove('show');
});

// Dropdown schließen, wenn außerhalb geklickt
window.addEventListener('click', function(e) {
  if (!e.target.matches('#userMenuBtn')) {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown?.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
});

// Refresh-Button
document.getElementById('refreshBtn')?.addEventListener('click', function() {
  location.reload();
});

// Auto-login für Testing (optional, entfernen für Produktion!)
window.addEventListener('load', function() {
  document.getElementById('email').value = 'test@example.com';
  document.getElementById('password').value = '123456';
});