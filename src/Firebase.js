import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyAQi0FKzqqnuq4TTlckF8Pv2yoZHXjOUBY",
    authDomain: "buycar-d3ca8.firebaseapp.com",
    databaseURL: "https://buycar-d3ca8.firebaseio.com",
    projectId: "buycar-d3ca8",
    storageBucket: "buycar-d3ca8.appspot.com",
    messagingSenderId: "471381749460"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;