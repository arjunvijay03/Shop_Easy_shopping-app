
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDHRj2UQDGZvwr0lYJVFSV5AVwb6STCL7I",
  authDomain: "shop-easy-c16ba.firebaseapp.com",
  projectId: "shop-easy-c16ba",
  storageBucket: "shop-easy-c16ba.appspot.com",
  messagingSenderId: "794539058101",
  appId: "1:794539058101:web:7185f67e81bb85c01f6ffc"
};


export default firebase.initializeApp(firebaseConfig);