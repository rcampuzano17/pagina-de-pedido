// main.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// Configuración de Firebase (usa tu propio objeto firebaseConfig)
const firebaseConfig = {
  apiKey: "AIzaSyCsa82plc6IJo_HCnJjh9nTfwmAQUmCUQ8",
  authDomain: "pagina-de-pedido.firebaseapp.com",
  databaseURL: "https://pagina-de-pedido-default-rtdb.firebaseio.com",
  projectId: "pagina-de-pedido",
  storageBucket: "pagina-de-pedido.appspot.com",
  messagingSenderId: "958081475624",
  appId: "1:958081475624:web:10c36d7031dae8a176411d"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Referencia al DOM y a la base de datos
const menuList = document.getElementById('menu-list');
const menuRef = ref(db, 'menu');

// Escuchar cambios en tiempo real y actualizar la lista
onValue(menuRef, (snapshot) => {
  menuList.innerHTML = ''; // Limpiar lista
  snapshot.forEach((child) => {
    const li = document.createElement('li');
    li.textContent = child.val();
    menuList.appendChild(li);
  });
});
