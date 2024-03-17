'use client'
import React, { useState } from 'react';
import axios from 'axios';
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
const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [datetime, setDatetime] = useState('');
    
    const handleChange = (e) => {
        if (e.target.files[0]) {
        setImage(e.target.files[0]);
        }
    };
    
    const handleUpload = () => {
        if (!image) return;
        const storageRef = ref(storage, `images/${image.name}`);
        uploadBytes(storageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            // Here you can also update your database with the image download URL
        });
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, including updating database with form data
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Image:</label>
            <input type="file" onChange={handleChange} />
        </div>
        <div>
            <label>Description:</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
            <label>Location:</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
            <label>Datetime:</label>
            <input type="datetime-local" value={datetime} onChange={(e) => setDatetime(e.target.value)} />
        </div>
        <button onClick={handleUpload}>Upload Image</button>
        </form>
    );
};
export default ImageUpload;
