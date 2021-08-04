import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8T8sUNXWk_IkeouwPPTn0rBScCYgYXkY",
  authDomain: "facebook-clone-b401d.firebaseapp.com",
  databaseURL: "https://facebook-clone-b401d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "facebook-clone-b401d",
  storageBucket: "facebook-clone-b401d.appspot.com",
  messagingSenderId: "718102298592",
  appId: "1:718102298592:web:62f206542de04588d4f585"
  };
  
  console.log(firebaseConfig.apiKey);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;