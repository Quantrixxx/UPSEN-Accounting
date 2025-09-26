// Sidebar-Link Funktion – öffnet direkt im gleichen Tab
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) return;
    e.preventDefault();
    window.location.href = href;
  });
});