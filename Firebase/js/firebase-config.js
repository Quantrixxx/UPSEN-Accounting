// public/js/firebase-config.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';

// Firebase Konfiguration (ersetzt mit euren echten Daten)
const firebaseConfig = {
  apiKey: "eure-api-key",
  authDomain: "upsen-accounting.firebaseapp.com",
  projectId: "upsen-accounting",
  storageBucket: "upsen-accounting.appspot.com",
  messagingSenderId: "123456789",
  appId: "eure-app-id"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };