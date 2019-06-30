import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDc7vTNLLuG5rKmye2n6D_-kgP490CPGaU",
    authDomain: "todo-app-6aa7a.firebaseapp.com",
    databaseURL: "https://todo-app-6aa7a.firebaseio.com",
    projectId: "todo-app-6aa7a",
    storageBucket: "todo-app-6aa7a.appspot.com",
    messagingSenderId: "44273667996",
    appId: "1:44273667996:web:c6b5bad9c1a36ae6"
};
const firebase = () => {
    app.initializeApp(firebaseConfig);
    return app;
}
export default firebase();
