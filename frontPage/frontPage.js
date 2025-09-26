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

    // Prüfen, ob die Seite existiert
    fetch(href, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // Seite existiert, öffne im gleichen Tab
          window.location.href = href;
          document.getElementById('linkStatus').innerHTML = 
            '<strong>Erfolg:</strong> Seite wird geöffnet: ' + href;
          document.getElementById('linkStatus').style.background = '#d4edda';
          document.getElementById('linkStatus').style.color = '#155724';
          document.getElementById('linkStatus').style.borderColor = '#c3e6cb';
        } else {
          throw new Error('Seite nicht gefunden');
        }
      })
      .catch(error => {
        document.getElementById('linkStatus').innerHTML = 
          '<strong>Fehler:</strong> Seite nicht gefunden: ' + href +
          '<br>Bitte stellen Sie sicher, dass die Seite auf GitHub existiert.';
        document.getElementById('linkStatus').style.background = '#f8d7da';
        document.getElementById('linkStatus').style.color = '#721c24';
        document.getElementById('linkStatus').style.borderColor = '#f5c6cb';
      });
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