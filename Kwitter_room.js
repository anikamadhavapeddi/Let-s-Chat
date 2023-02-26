

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
   document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!";
   function addRoom(){
         room_name=document.getElementById("addroom").value;
         firebase.database().ref("/").child(room_name).update({
   purpose:"adding room name"
         });
         localStorage.setItem("room_name",room_name);
         window.location="kwitter_page.html";
   }
   
       
       function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
              Room_names = childKey;
             //Start code
       console.log("Room Name- "+Room_names);
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
             //End code
             });});}
       getData();
       function redirectToRoomName(name){
             console.log(name);
             localStorage.setItem("room_name",name);
             window.location="kwitter_page.html";
       }
       
       
       //End code
       
   
   
   function logOut(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location.replace("index.html");
   
   }
   