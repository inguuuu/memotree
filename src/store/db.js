import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = { // 본인의 설정으로 진행
    apiKey: "AIzaSyC2EU4A2UMJooTz3v51M9RW5cz4kT0ADFk",
    authDomain: "ospyapyap.firebaseapp.com",
    databaseURL: "https://ospyapyap.firebaseio.com",
    projectId: "ospyapyap",
    storageBucket: "ospyapyap.appspot.com",
    messagingSenderId: "406207774346"
};

firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});
const dbRef = db.collection('todos');
const authRef = firebase.auth();
authRef.setPersistence(firebase.auth.Auth.Persistence.SESSION);
const gProvider = new firebase.auth.GoogleAuthProvider();

export { authRef, dbRef, gProvider, db };
