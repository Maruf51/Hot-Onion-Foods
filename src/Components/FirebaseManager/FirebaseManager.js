import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config'



export const initializeLoginFrameworkFirebase = () => {
    firebase.initializeApp(firebaseConfig);
}

export const createNewAccount = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response => {
        const userInfo = {
            success: true,
            error: '',
        }
        return userInfo
    })
    .catch(function(error) {
        const userInfo = {
            success: false,
            error: error.message,
        }
        return userInfo
      });
}

export const userSignIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response => {
        const {displayName, email} = response.user;
        const newInfo = {
            name: displayName,
            email: email,
            success: true,
            error: '',
        }
        return newInfo
    })
    .catch(function(error) {
        const newInfo = {
            success: false,
            error: error.message,
        }
        return newInfo
      });
}

export const updateUserInfo = (name) => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
    displayName: name,
    }).then(function() {
    }).catch(function(error) {
    });
}

export const googleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(data => {
        const {displayName, email} = data.user;
        const newData = {
            name: displayName,
            email: email,
            success: true,
            error: '',
        }
        return newData;
      }).catch(error => {
        const newData = {
            name: '',
            email: '',
            success: false,
            error: error.message,
        }   
        return newData;     
      });
}