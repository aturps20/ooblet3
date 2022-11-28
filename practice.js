
const firebaseConfig = {
    apiKey: "AIzaSyD2VMPQEcSJcxoOOAIJklOekDsOavNYzrA",
    authDomain: "c94-4d80d.firebaseapp.com",
    databaseURL: "https://c94-4d80d-default-rtdb.firebaseio.com",
    projectId: "c94-4d80d",
    storageBucket: "c94-4d80d.appspot.com",
    messagingSenderId: "1029432260044",
    appId: "1:1029432260044:web:f0d26e86cc5d2d38899969"
  };

  firebase.initializeApp(firebaseConfig);

  function addUser() { user_name = document.getElementById("user_name").value; firebase.database().ref("/").child(user_name).update({ purpose : "adding user" }); }