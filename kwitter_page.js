//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBFIPMGGK7Q7xt-edeeSUHcMWz0j2Y08HQ",
      authDomain: "social-web-a5042.firebaseapp.com",
      databaseURL: "https://social-web-a5042-default-rtdb.firebaseio.com",
      projectId: "social-web-a5042",
      storageBucket: "social-web-a5042.appspot.com",
      messagingSenderId: "132121591290",
      appId: "1:132121591290:web:86678a0b5d7317134bb843"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value ="";
}