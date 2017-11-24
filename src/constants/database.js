import firebase from 'firebase';

 var config = {
    apiKey: "AIzaSyD2DS5jYtFAOXsvxuOd97N4vYMy_E-vlPs",
    authDomain: "my-books-5e94d.firebaseapp.com",
    databaseURL: "https://my-books-5e94d.firebaseio.com",
    projectId: "my-books-5e94d",
    storageBucket: "my-books-5e94d.appspot.com",
    messagingSenderId: "1004999695002"
  };
  firebase.initializeApp(config);
const database = firebase.database();

export default database;
