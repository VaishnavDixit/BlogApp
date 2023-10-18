import logo from "./logo.svg";
import "./App.css";
import {
    getAuth,
    GoogleAuthProvider,
} from "firebase/auth";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB6lMC53Na_9BJfaG6sXX6XcfeJTRRBW-s",
    authDomain: "blog-app-bd013.firebaseapp.com",
    projectId: "blog-app-bd013",
    storageBucket: "blog-app-bd013.appspot.com",
    messagingSenderId: "22318736282",
    appId: "1:22318736282:web:6fb741f5070074a290d023",
    measurementId: "G-RJGH7BC8XF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};
