  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    projectId: process.env.REACT_APP_FIREBASE_DB_URL
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);