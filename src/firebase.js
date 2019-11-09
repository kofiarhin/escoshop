import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCDmcwwvpndSixQXN8-v61p0GyeipJHSwc",
    authDomain: "escoshop-5b81a.firebaseapp.com",
    databaseURL: "https://escoshop-5b81a.firebaseio.com",
    projectId: "escoshop-5b81a",
    storageBucket: "escoshop-5b81a.appspot.com",
    messagingSenderId: "440015446743",
    appId: "1:440015446743:web:0605b8aea87338946b8692",
    measurementId: "G-TSNZ6RXLMN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase }