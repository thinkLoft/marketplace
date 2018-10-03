
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
     displayNav(true);
  } else {
    // No user is signed in.
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

$(document).ready(function() {

  // ================================
  // ======= Authentication =========
  // ================================

  // SIGN UP  LISTENER
  $(document).on('click', '#enter', function() {

    //Cleaning up response from forms
    email = $('#emailAddress')
      .val()
      .trim();
    pwd = $('#password')
      .val()
      .trim();
    firstName = $('#firstName')
    .val()
    .trim();
    lastName = $('#lastName')
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
        })
          .then(function() {
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

  // ================================
  // =========PostAd function========
  // ================================

  $('#submitAd').on('click', function() {
    event.preventDefault();
    postAd(sessionUser.email);
  });

  function postAd(currentUser) {
    var userID = currentUser;
    var dbRef = db.ref('ads');
    var title = $('#title')
      .val()
      .trim();
    var description = $('#description')
      .val()
      .trim();
    var price = $('#price')
      .val()
      .trim();
    var file = $('#image').get(0).files[0];
    var imgName = $('#image')
      .val()
      .trim();

    if (
      userID.length > 0 &&
      title.length > 0 &&
      imgName.length > 0 &&
      description.length > 0 &&
      price.length > 0
    ) {
      var adID = dbRef.push().key;
      var fileName = file.name;
      var imgPath = '/images/' + adID + '/' + fileName;
      var sRef = store.ref(imgPath);

      sRef
        .put(file)
        .then(function() {
          console.log('Image upload successful');
          return sRef.getDownloadURL();
        })
        .then(function(imageURL) {
          console.log('url:' + imageURL);
          console.log('Download URL acquired successfully');

          var ad = {
            userID: userID,
            title: title,
            imageURL: imageURL,
            storagePath: imgPath,
            description: description,
            price: price,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
          };

          var adRef = dbRef.child(adID);
          adRef.update(ad);
        })
        .then(function() {
          console.log('Successfully saved to database.');
          $('#postForm')[0].reset();
        })
        .catch(function(error) {
          console.log('Error:' + error);
        });
    }
  }

  // bottom of on document ready
});