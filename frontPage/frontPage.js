// Sidebar link handling - MIT FEHLERÜBERPRÜFUNG (im gleichen Tab)
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    // Skip internal links (starting with #)
    if (href.startsWith('#')) {
      return;
    }
    
    e.preventDefault();
    
    // Test if the page exists
    fetch(href, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // Page exists, open in SAME tab (korrigiert)
          window.location.href = href;  // ✅ KORREKT!
        } else {
          throw new Error('Page not found');
        }
      })
      .catch(error => {
        // Page doesn't exist, show error
        document.getElementById('linkStatus').innerHTML = 
          '<strong>Fehler:</strong> Seite nicht gefunden: ' + href + 
          '<br>Bitte stellen Sie sicher, dass die Seite auf GitHub existiert.';
        document.getElementById('linkStatus').style.background = '#f8d7da';
        document.getElementById('linkStatus').style.color = '#721c24';
        document.getElementById('linkStatus').style.borderColor = '#f5c6cb';
      });
  });
});