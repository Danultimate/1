import * as firebase from "firebase";

const prodConfig = {
  apiKey: "AIzaSyDJcdotg_IiK1oMkMI_TmsboaJzGFrWkO4",
  authDomain: "vizio-c012f.firebaseapp.com",
  databaseURL: "https://vizio-c012f.firebaseio.com",
  projectId: "vizio-c012f",
  storageBucket: "vizio-c012f.appspot.com",
  messagingSenderId: "1093424133655",
  appId: "1:1093424133655:web:db149ff572968789"
};

const devConfig = {
  apiKey: "AIzaSyDJcdotg_IiK1oMkMI_TmsboaJzGFrWkO4",
  authDomain: "vizio-c012f.firebaseapp.com",
  databaseURL: "https://vizio-c012f.firebaseio.com",
  projectId: "vizio-c012f",
  storageBucket: "vizio-c012f.appspot.com",
  messagingSenderId: "1093424133655",
  appId: "1:1093424133655:web:db149ff572968789"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth, firebase };
