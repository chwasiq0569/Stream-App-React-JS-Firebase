import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyApjCrMk7OToFzkucA7wrc-L3wM1JRzMUs",
  authDomain: "streamproject-4ce54.firebaseapp.com",
  databaseURL: "https://streamproject-4ce54.firebaseio.com",
  projectId: "streamproject-4ce54",
  storageBucket: "streamproject-4ce54.appspot.com",
  messagingSenderId: "772310726452",
  appId: "1:772310726452:web:656ae0540a458b455cd761",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
