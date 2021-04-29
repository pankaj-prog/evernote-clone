import firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA7IJqdqUkVhwGL1TviYh1WjmhzXcNzAiI",
    authDomain: "evernote-copy.firebaseapp.com",
    projectId: "evernote-copy",
    storageBucket: "evernote-copy.appspot.com",
    messagingSenderId: "955263702349",
    appId: "1:955263702349:web:4922c3ecb6ffdb1b1a9304",
    measurementId: "G-XKYTDVVP4N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);