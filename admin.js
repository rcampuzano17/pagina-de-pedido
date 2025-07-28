import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";
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