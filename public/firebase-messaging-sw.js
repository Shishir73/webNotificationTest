// importScripts("https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js")
// importScripts("https://www.gstatic.com/firebasejs/8.3.0/firebase-messaging.js")

importScripts('/__/firebase/9.2.0/firebase-app-compat.js');
importScripts('/__/firebase/9.2.0/firebase-messaging-compat.js');
importScripts('app.js');

var firebaseConfig = {
    apiKey: "AIzaSyA9UsApUsATI1c-uzBPpL3vbxbxu4jGJ6s",
    authDomain: "testingnotifications-e13b6.firebaseapp.com",
    projectId: "testingnotifications-e13b6",
    storageBucket: "testingnotifications-e13b6.appspot.com",
    messagingSenderId: "769578515843",
    appId: "1:769578515843:web:f869a43c9895b6831a4ab6",
    measurementId: "G-JH74H9TSH0"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging()