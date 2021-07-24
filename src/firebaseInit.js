import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCJqeyl0isI2GV9UBRDjzRXs4WeVh8XjHg",
    authDomain: "portfolio-2646d.firebaseapp.com",
    databaseURL: "https://portfolio-2646d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "portfolio-2646d",
    storageBucket: "portfolio-2646d.appspot.com",
    messagingSenderId: "771725706889",
    appId: "1:771725706889:web:30868dc84e88305a2ca858",
    measurementId: "G-EZXQWZJKR8"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);