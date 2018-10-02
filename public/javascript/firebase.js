
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


// REAL-TIME LISTENER
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // user is signed in.
 console.log("user!")
    displayNav(true);
  } else {
    displayNav(false);
  }
});

$(document).ready(function() {
    // LOGIN LISTENER
    $(document).on('click', '#login', function() {
      email = $('#email')
        .val()
        .trim();
      pwd = $('#password')
        .val()
        .trim();
  
      // LOGIN FUNCTION
      firebase
        .auth()
        .signInWithEmailAndPassword(email, pwd)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          // console.log(error);
          // [END_EXCLUDE]
        });
    });

      // SIGN UP  LISTENER
  $(document).on('click', '#signUp', function() {
    email = $('#email')
      .val()
      .trim();
    pwd = $('#password')
      .val()
      .trim();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pwd)
      .then(function() {
        email = email;
        fName = $('#fName')
          .val()
          .trim();
        lName = $('#lName')
          .val()
          .trim();
        firebase
          .database()
          .ref('/users')
          .push({
            email: email,
            fName: fName,
            lName: lName,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
          });
        alert(
          'Account successfully created! You will be re-directed to the home page'
        );
        window.location = 'index.html'; //After successful Signup, user will be redirected to home.html
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

  });

// =========================
// ======= Navigation ======
// =========================

function displayNav(x) {
  var html = '';
  if (x === true) {
    // User who is signed in
    html =
      '<a href="/" class="item">Home</a><a href="MyAds.html" class="item">My Ads</a><a href="/postAd" class="item">Post An Ad</a><a href="/login" class="item">Logout</a>';
  } else {
    // No User
    html =
      '<a href="/" class="item">Home</a><a href="/login" class="item">Login</a><a href="/createAccount" class="item">Create an Account</a><a href="/createAccount" class="item">Post An Ad (Registered Users Only)</a>';
  }
  $('#nav').html(html);
}

