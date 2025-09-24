// public/js/router.js
import { auth } from './firebase-config.js';

// Einfaches Routing für das Team
async function loadPage(page) {
    const content = document.getElementById('page-content');
    
    switch(page) {
        case 'frontPage':
            content.innerHTML = await fetch('./frontPage/index.html').then(r => r.text());
            break;
        case 'invoice-issued':
            content.innerHTML = await fetch('./Invoice-issued/index.html').then(r => r.text());
            // Lade deine JS Datei
            loadScript('./Invoice-issued/invoice-issued.js');
            break;
        case 'invoice-received':
            content.innerHTML = await fetch('./Invoice_recieved/index.html').then(r => r.text());
            loadScript('./Invoice_recieved/invoice-received.js');
            break;
        case 'budget':
            content.innerHTML = await fetch('./budgetPage/index.html').then(r => r.text());
            loadScript('./budgetPage/budget.js');
            break;
        case 'ocr':
            content.innerHTML = await fetch('./OCR/index.html').then(r => r.text());
            loadScript('./OCR/ocr.js');
            break;
        default:
            content.innerHTML = '<h2>UPSEN Accounting System</h2><p>Willkommen im Team!</p>';
    }
}

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.type = 'module';
    document.head.appendChild(script);
}

// URL Hash ändern
window.addEventListener('hashchange', () => {
    const page = window.location.hash.replace('#/', '') || 'frontPage';
    loadPage(page);
});

// Startseite laden
window.addEventListener('load', () => {
    const page = window.location.hash.replace('#/', '') || 'frontPage';
    loadPage(page);
});

// Auth State ändern
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('User angemeldet:', user.email);
    } else {
        console.log('Kein User angemeldet');
    }
});