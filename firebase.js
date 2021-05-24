import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDOvXt4_lfRFDiyzobyiMQgxACBbagQ2oM',
  authDomain: 'fir-588f2.firebaseapp.com',
  projectId: 'fir-588f2',
  storageBucket: 'fir-588f2.appspot.com',
  messagingSenderId: '138712066125',
  appId: '1:138712066125:web:cc9ec07534267721f3d404',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
