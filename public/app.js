// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9UsApUsATI1c-uzBPpL3vbxbxu4jGJ6s",
    authDomain: "testingnotifications-e13b6.firebaseapp.com",
    projectId: "testingnotifications-e13b6",
    storageBucket: "testingnotifications-e13b6.appspot.com",
    messagingSenderId: "769578515843",
    appId: "1:769578515843:web:f869a43c9895b6831a4ab6",
    measurementId: "G-JH74H9TSH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging();


function subUser() {
    Notification.requestPermission().then(permission => {
        console.log('Hello Permission!', permission)
        if (permission == "granted") {
            getToken(messaging,
                {
                    vapidKey:
                        "BJz83u2vkLJMGNrgYK23yYo8lTU8GZbUp3N7ocncOMVLkNtSB4XauseNuvNK3clAn8KbZCcfiAHOdBuYoIRXHJM"
                }).then(currentToken => {
                    console.log(currentToken)
                    // document.getElementById('tokenId').innerHTML = currentToken
                })
        }
    })
}