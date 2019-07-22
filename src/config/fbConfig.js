import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyDTwcVF0h3MM_efNA3qMuCLOXDNCteylcM",
    authDomain: "login-app-aeb5a.firebaseapp.com",
    databaseURL: "https://login-app-aeb5a.firebaseio.com",
    projectId: "login-app-aeb5a",
    storageBucket: "",
    messagingSenderId: "896630304653",
    appId: "1:896630304653:web:eed2d4207f01747d"
  };
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 