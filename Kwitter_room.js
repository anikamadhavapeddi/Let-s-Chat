

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
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");

}
