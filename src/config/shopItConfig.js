import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'
  // Initialize Firebase
  var config = {
    // apiKey: "AIzaSyDPW3mcktJFz0jnfXbFQN5kDhveIvyByzA",
    // authDomain: "shopit-b1ccc.firebaseapp.com",
    // databaseURL: "https://shopit-b1ccc.firebaseio.com",
    // projectId: "shopit-b1ccc",
    // storageBucket: "shopit-b1ccc.appspot.com",
    // messagingSenderId: "1044304776644"
    apiKey: "AIzaSyCL2ayT4CE5jw8T_2OrtzGP0cCXKNQoLEc",
    authDomain: "todos-268ca.firebaseapp.com",
    databaseURL: "https://todos-268ca.firebaseio.com",
    projectId: "todos-268ca",
    storageBucket: "todos-268ca.appspot.com",
    messagingSenderId: "562225617067"
    // apiKey: "AIzaSyBZWt_2HY-VJbRK5vgfBbia4YaEOmyhwSU",
    // authDomain: "store-55432.firebaseapp.com",
    // databaseURL: "https://store-55432.firebaseio.com",
    // projectId: "store-55432",
    // storageBucket: "store-55432.appspot.com",
    // messagingSenderId: "585998785355"
  };
  firebase.initializeApp(config);
firebase.firestore()
export const storage = firebase.storage();

export  default firebase;
