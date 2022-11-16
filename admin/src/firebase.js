import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: process.env.APP_KEY,
//   authDomain: "netflix-151df.firebaseapp.com",
//   projectId: "netflix-151df",
//   storageBucket: "netflix-151df.appspot.com",
//   messagingSenderId: "316700975498",
//   appId: "1:316700975498:web:15063159b205c1a349a873",
//   measurementId: "G-2ZGE63ES9F",
// };

const firebaseConfig = {
  apiKey: "AIzaSyD7MzEHdI9zZi5Eida56OKG8H8VIN7avI0",
  authDomain: "netflix-a5045.firebaseapp.com",
  projectId: "netflix-a5045",
  storageBucket: "netflix-a5045.appspot.com",
  messagingSenderId: "201940811258",
  appId: "1:201940811258:web:a3769cce3b4da102e3f843",
  measurementId: "G-M0N216KN5Y",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
