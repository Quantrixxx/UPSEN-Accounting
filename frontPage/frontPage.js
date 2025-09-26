// Login functionality
document.getElementById('loginBtn').addEventListener('click', function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (email && password) {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('appContainer').style.display = 'flex';
  } else {
    alert('Bitte geben Sie E-Mail und Passwort ein');
  }
});

// User menu functionality
document.getElementById('userMenuBtn').addEventListener('click', function() {
  document.getElementById('userDropdown').classList.toggle('show');
});

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', function() {
  document.getElementById('appContainer').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('userDropdown').classList.remove('show');
});

// Close dropdown when clicking outside
window.addEventListener('click', function(e) {
  if (!e.target.matches('#userMenuBtn')) {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
});

// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.classList.toggle("open");
  });
});

// Comments toggle
document.getElementById('toggleComments').addEventListener('click', function() {
  alert('Kommentarbereich würde sich hier erweitern');
});

// Refresh button
document.getElementById('refreshBtn').addEventListener('click', function() {
  location.reload();
});

// SIMPLER Sidebar link handling - Öffnet Seiten im gleichen Tab
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    // Skip internal links (starting with #)
    if (href.startsWith('#')) {
      return;
    }
    
    e.preventDefault();
    // Öffne die Seite im gleichen Tab
    window.location.href = href;
  });
});

// Auto-login for testing (remove in production)
window.addEventListener('load', function() {
  // Auto-fill for easier testing
  document.getElementById('email').value = 'test@example.com';
  document.getElementById('password').value = '123456';
});