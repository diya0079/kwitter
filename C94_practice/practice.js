// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC7o_4eNGKFQHy6CrLt_Sj26ikfKWU6zAk",
    authDomain: "class-test-97bd0.firebaseapp.com",
    databaseURL: "https://class-test-97bd0-default-rtdb.firebaseio.com",
    projectId: "class-test-97bd0",
    storageBucket: "class-test-97bd0.appspot.com",
    messagingSenderId: "951510016815",
    appId: "1:951510016815:web:f3c60324522f70db3a37da"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  functon addUser()
  {
      user_name=document.getElementById ("user_name").Value;
      firebase.database().ref("/").child(user_name).update({ purpose : "adding user" }); }
  