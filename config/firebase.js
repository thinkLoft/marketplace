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

  module.exports = firebase;