import { getMessaging } from "firebase/messaging";


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

const messaging = getMessaging();


function subUser() {
    Notification.requestPermission().then(permission => {
        console.log('Hello Permission!', permission)
        if (permission == "granted") {
            messaging.getToken(
                {
                    vapidKey:
                        "BJz83u2vkLJMGNrgYK23yYo8lTU8GZbUp3N7ocncOMVLkNtSB4XauseNuvNK3clAn8KbZCcfiAHOdBuYoIRXHJM"
                }).then(currentToken => {
                    console.log(currentToken)
                    document.getElementById('tokenId').innerHTML = currentToken
                })
        }
    })
}