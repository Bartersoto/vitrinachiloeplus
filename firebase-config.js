// Configuración Firebase clásica (v8)

const firebaseConfig = {
  apiKey: "AIzaSyA75Ws0SM6hVigpen6qrrJ-uX8BzMeyTAA",
  authDomain: "vitrinachiloeplus.firebaseapp.com",
  projectId: "vitrinachiloeplus",
  storageBucket: "vitrinachiloeplus.appspot.com",
  messagingSenderId: "1015817550463",
  appId: "1:1015817550463:web:ede39dbbc6870ff4eedd4a"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
