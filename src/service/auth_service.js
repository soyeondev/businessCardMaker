import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }

    logout() {
        return firebaseApp.auth().signOut();
    }

    onAuthChange(onUserChanged) {
        console.log("onUserChanged: ", onUserChanged);
        firebase.auth().onAuthStateChanged(user => {
            console.log("user1: ", user);
            onUserChanged(user);
        })
    }
}

export default AuthService;