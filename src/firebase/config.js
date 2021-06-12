import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBk4vP6alV_GWPMQ0I85pmvQlu2y3ehfMI',
  authDomain: 'appraisal-app-85221.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'appraisal-app-85221',
  storageBucket: 'appraisal-app-85221.appspot.com',
  messagingSenderId: '821777716329',
  appId: '1:821777716329:web:d5200948357349c3323ef8',
  measurementId: "G-2LL4QBGQCV"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
