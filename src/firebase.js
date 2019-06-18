import firebase from 'firebase/app';
import 'firebase/firestore';

export const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD1PCsyN6syJeN9l4WernvKw40zsdkICCY',
  authDomain: 'funnel-reactor.firebaseapp.com',
  databaseURL: 'https://funnel-reactor.firebaseio.com',
  projectId: 'funnel-reactor',
  storageBucket: 'funnel-reactor.appspot.com',
  messagingSenderId: '163000760646',
  appId: '1:163000760646:web:11e5cde8731a7169'
});

export const firestore = firebaseApp.firestore();

export default firebase;
