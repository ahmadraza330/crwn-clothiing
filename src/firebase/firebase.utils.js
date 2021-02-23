import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDF4mmcs9UQCJMBES_ogz_5tFRDVIQbZCg",
  authDomain: "crwn-clothing-fcd8c.firebaseapp.com",
  projectId: "crwn-clothing-fcd8c",
  storageBucket: "crwn-clothing-fcd8c.appspot.com",
  messagingSenderId: "656752071319",
  appId: "1:656752071319:web:4d7123b125ac0cd0938fd2",
  measurementId: "G-N681MRWTDH"
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({prompt: 'select_acount'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
