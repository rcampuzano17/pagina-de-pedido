import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseConfig } from "./firebase.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const menuList = document.getElementById('menu-list');
const menuRef = ref(db, 'menu');

onValue(menuRef, (snapshot) => {
  menuList.innerHTML = '';
  snapshot.forEach((child) => {
    const li = document.createElement('li');
    li.textContent = child.val();
    menuList.appendChild(li);
  });
});