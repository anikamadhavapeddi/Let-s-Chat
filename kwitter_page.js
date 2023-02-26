const firebaseConfig = {
    apiKey: "AIzaSyDalhxm72pFXbLl9YlICDMxijxDssKMrSY",
  authDomain: "let-schatapp-a60f1.firebaseapp.com",
  projectId: "let-schatapp-a60f1",
  storageBucket: "let-schatapp-a60f1.appspot.com",
  messagingSenderId: "962055102689",
  appId: "1:962055102689:web:85ad6cba12cc0ae76ad7a0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send(){
    var msg=document.getElementById("message").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("message").value="";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}