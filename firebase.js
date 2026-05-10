import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-SNHdJr0jN3Ecr15EPzmdbZlRLFtWL7A",
  authDomain: "dessert-explorer.firebaseapp.com",
  projectId: "dessert-explore",
  messagingSenderId: "586754316774",
  appId: "1:586754316774:web:4ad2cda8e218254b91de27"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
