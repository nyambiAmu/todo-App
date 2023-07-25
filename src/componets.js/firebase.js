/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDiFWBU_9L-5El44LlSBGHRCkLfm9UpUV0",
    authDomain: "todo-99fe9.firebaseapp.com",
    projectId: "todo-99fe9",
    storageBucket: "todo-99fe9.appspot.com",
    messagingSenderId: "908761757399",
    appId: "1:908761757399:web:a6fed73c7904122c50a292",
    measurementId: "G-Y5BE0DCKBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db }

