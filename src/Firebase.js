import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyAQi0FKzqqnuq4TTlckF8Pv2yoZHXjOUBY",
    authDomain: "nifty-leakey-3ccdce.netlify.com/",
    databaseURL: "https://buycar-d3ca8.firebaseio.com",
    projectId: "buycar-d3ca8",
    storageBucket: "buycar-d3ca8.appspot.com",
    messagingSenderId: "471381749460"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);


export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;