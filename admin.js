import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { firebaseConfig } from "./firebase.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const newItemInput = document.getElementById('new-item');
const menuList = document.getElementById('menu-list');
const menuRef = ref(db, 'menu');

function addMenuItem() {
  const item = newItemInput.value;
  if (item) {
    push(menuRef, item);
    newItemInput.value = '';
  }
}

window.addMenuItem = addMenuItem;

onValue(menuRef, (snapshot) => {
  menuList.innerHTML = '';
  snapshot.forEach((child) => {
    const li = document.createElement('li');
    li.textContent = child.val();
    menuList.appendChild(li);
  });
});
