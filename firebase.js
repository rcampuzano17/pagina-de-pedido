// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCsa82plc6IJo_HCnJjh9nTfwmAQUmCUQ8",
  authDomain: "pagina-de-pedido.firebaseapp.com",
  databaseURL: "https://pagina-de-pedido-default-rtdb.firebaseio.com",
  projectId: "pagina-de-pedido",
  storageBucket: "pagina-de-pedido.firebasestorage.app",
  messagingSenderId: "958081475624",
  appId: "1:958081475624:web:10c36d7031dae8a176411d"
};

// Inicializar la app
const app = initializeApp(firebaseConfig);

// Conexión a la base de datos
const db = getDatabase(app);

// Exportamos para usar en otros archivos
export { db, ref, push, onValue };
