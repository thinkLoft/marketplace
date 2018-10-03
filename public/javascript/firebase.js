
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

