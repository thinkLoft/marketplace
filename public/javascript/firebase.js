// Initialize Firebase
var config = {
  apiKey: "AIzaSyBgumuOwqrl-8Pz1-DSmqFmZpzyg_nnSpk",
  authDomain: "marketplace-942ee.firebaseapp.com",
  databaseURL: "https://marketplace-942ee.firebaseio.com",
  projectId: "marketplace-942ee",
  storageBucket: "marketplace-942ee.appspot.com",
  messagingSenderId: "33639365467"
};
firebase.initializeApp(config);

// Global Variabl
var user;

// REAL-TIME LISTENER
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // user is signed in.
    console.log("user!", firebase.auth().currentUser.email);
    displayNav(true);
    userEmail = firebase.auth().currentUser.email;
    $("#emailIDLink").val(userEmail);
  } else {
    // No user is signed in.
    console.log("no user!");
    displayNav(false);
  }
});

// =========================
// ======= Navigation ======
// =========================

function displayNav(x) {
  var html = "";
  if (x === true) {
    // User who is signed in
    html =
      '<a href="/" class="item">Home</a><a href="#" id="navMyAds" class="item">My Ads</a><a href="/postAd" class="item">Post An Ad</a><a id="logout" href="#" class="item">Logout</a>';
  } else {
    // No User
    html =
      '<a href="/" class="item">Home</a><a href="/login" class="item">Login</a><a href="/createAccount" class="item">Create an Account</a><a href="/createAccount" class="item">Post An Ad (Registered Users Only)</a>';
  }
  $("#nav").html(html);
}

$(document).ready(function() {
  // ================================
  // ======= Authentication =========
  // ================================

  // SIGN UP  LISTENER
  $(document).on("click", "#enter", function() {
    //Cleaning up response from forms
    email = $("#emailAddress")
      .val()
      .trim();
    pwd = $("#password")
      .val()
      .trim();
    firstName = $("#firstName")
      .val()
      .trim();
    lastName = $("#lastName")
      .val()
      .trim();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pwd)
      .then(function() {
        // Constructing an Account object to hand to the database
        var account = {
          email: email,
          firstName: firstName,
          lastName: lastName
        };
        // AJAX CALL TO UPDATE db
        $.ajax({
          method: "POST",
          url: "/api/posts/createUser",
          data: account
        }).then(function() {
          window.location.href = "/";
        });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
        // ...
      });
  });

  // LOGOUT LISTENER
  $(document).on("click", "#logout", function() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        alert("Sign-out Successful");
      })
      .catch(function(error) {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
      });
  });

  // LOGIN LISTENER
  $(document).on("click", "#lgnn", function(event) {
    event.preventDefault();
    email = $("#emailAddressL")
      .val()
      .trim();
    pwd = $("#passwordL")
      .val()
      .trim();

    // LOGIN FUNCTION
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pwd)
      .then(function() {
        // Sign-in successful.
        alert("Sign-in successful");
        window.location.href = "/";
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
      });
  });

  // bottom of on document ready
});
