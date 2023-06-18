import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqQn5Ijc4jiWtjIKJhxXCZ0xcS1-2crCE",
  authDomain: "razercoderhouse.firebaseapp.com",
  projectId: "razercoderhouse",
  storageBucket: "razercoderhouse.appspot.com",
  messagingSenderId: "1062643158387",
  appId: "1:1062643158387:web:32311f19d4032e91a00906"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

