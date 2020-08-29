import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyAunPpW4rNVkzgvmr0NQpzqKZ1oGs7Han8",
	authDomain: "kuwa-1599d.firebaseapp.com",
	databaseURL: "https://kuwa-1599d.firebaseio.com",
	projectId: "kuwa-1599d",
	storageBucket: "kuwa-1599d.appspot.com",
	messagingSenderId: "85921121130",
	appId: "1:85921121130:web:bf40de4eb27a9d87c09b13"
  };

  // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

 export { auth, provider };
 export default db;