import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCSmADnDa_qU8hSpAJPuetrcISRagXjXig",
    authDomain: "e-store-f7bbd.firebaseapp.com",
    projectId: "e-store-f7bbd",
    storageBucket: "e-store-f7bbd.appspot.com",
    messagingSenderId: "273583622403",
    appId: "1:273583622403:web:0cbae6616189333d6b8136",
    measurementId: "G-2HYB0T7EE8"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;