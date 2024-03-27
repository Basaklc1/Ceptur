import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//firebase ile oluşturduğumuz app bilgileri
const firebaseConfig = {
    apiKey: "AIzaSyAoCY37hleQjDybfY8Tc5_JTtGK9BXh0VA",
    authDomain: "ceptur-23274.firebaseapp.com",
    projectId: "ceptur-23274",
    storageBucket: "ceptur-23274.appspot.com",
    messagingSenderId: "859086186858",
    appId: "1:859086186858:web:97c739e391a44750ba1d13"
}

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export { firebase }