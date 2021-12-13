function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , user_name);
    window.location = "kwitter_room.html";
}
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4n0KgPhkUjKS24oFEMvnGuBtmUAXHoh4",
    authDomain: "kwitter-yeah.firebaseapp.com",
    databaseURL: "https://kwitter-yeah-default-rtdb.firebaseio.com",
    projectId: "kwitter-yeah",
    storageBucket: "kwitter-yeah.appspot.com",
    messagingSenderId: "733865743985",
    appId: "1:733865743985:web:0b923a4ea9851fffacedd0",
    measurementId: "G-WWSM83QN7D"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);