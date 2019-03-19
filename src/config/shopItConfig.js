import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPW3mcktJFz0jnfXbFQN5kDhveIvyByzA",
    authDomain: "shopit-b1ccc.firebaseapp.com",
    databaseURL: "https://shopit-b1ccc.firebaseio.com",
    projectId: "shopit-b1ccc",
    storageBucket: "shopit-b1ccc.appspot.com",
    messagingSenderId: "1044304776644"
  };
  firebase.initializeApp(config);
firebase.firestore()
export const storage = firebase.storage();

export  default firebase;
