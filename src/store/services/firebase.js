// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
//import 'firebase/analytics';
import 'firebase/auth';
//import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAnJ0KrZaw7T7MpEmae3Om2er3caYwzkXo',
  authDomain: 'iustagram-9f29d.firebaseapp.com',
  databaseURL: 'https://iustagram-9f29d.firebaseio.com',
  projectId: 'iustagram-9f29d',
  storageBucket: 'iustagram-9f29d.appspot.com',
  messagingSenderId: '948432390638',
  appId: '1:948432390638:web:611eea8e5d4e52eebde6ff',
  measurementId: 'G-KLNY20SK6Y',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const authentication = firebase.auth();
