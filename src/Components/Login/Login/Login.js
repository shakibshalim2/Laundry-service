import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import { UserContext } from '../../../App';
import google from '../../../media/google.png';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
            });
    }

    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{ height: "60vh" }}>
                <div className="shadow p-4">
                    <div className="from-group m-2">
                        <button className="btn btn-brand" onClick={handleGoogleSignIn}><img className="img-fluid signin-style" src={google} alt="" /> Google Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;