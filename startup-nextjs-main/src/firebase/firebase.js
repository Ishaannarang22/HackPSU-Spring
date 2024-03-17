import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyD1M0I9Uqb9CAl3Aabzh9GCgJNhX7MRozE",
  authDomain: "findmyshit-8c408.firebaseapp.com",
  projectId: "findmyshit-8c408",
  storageBucket: "findmyshit-8c408.appspot.com",
  messagingSenderId: "313064946158",
  appId: "1:313064946158:web:3b2aadaac56e216794f6ff",
  measurementId: "G-ZTT00XNZQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);
