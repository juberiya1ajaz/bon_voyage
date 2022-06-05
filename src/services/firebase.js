import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyBz8R5JO5tdPqCrc8cYlqdeVw401dZe2p4",
  authDomain: "the-solo-bagpackr-e2077.firebaseapp.com",
  projectId: "the-solo-bagpackr-e2077",
  storageBucket: "the-solo-bagpackr-e2077.appspot.com",
  messagingSenderId: "370864060308",
  appId: "1:370864060308:web:ed91147197dda4d1c98181",
  measurementId: "G-5KLDE03FCQ"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export {firestore, auth, app}
