import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import googleIcon from '../../images/ICON/google.png';
import { googleSignIn, initializeLoginFrameworkFirebase, userSignIn } from '../FirebaseManager/FirebaseManager';
import { useContext } from 'react';
import { UserContext } from '../../App';

initializeLoginFrameworkFirebase();

const Login = () => {
    let location = useLocation();
    let history = useHistory();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [loginValue, setLoginValue] = useState({

    })

    const handleLoginValue = (e) => {
        const newInfo = {...loginValue}
        newInfo[e.target.name] = e.target.value;
        setLoginValue(newInfo);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        userSignIn(loginValue.email, loginValue.password)
        .then(data => {
            const newData = {...loggedInUser}
            newData.success = data.success;
            newData.error = data.error;
            newData.name = data.name;
            newData.email = data.email;
            setLoggedInUser(newData);
            if(data.success){
                history.replace(from);
            }
        })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(data => {
            setLoggedInUser(data);
            if(data.success){
                history.replace(from);
            }
        })
    }
    return (
        <div>
            <form className="sign-form" onSubmit={handleLogin}>
                <h1 className="form-name">Login</h1>
                <input className="sign-input" name="email" type="text" placeholder="Email" onBlur={handleLoginValue} required/>
                <input className="sign-input" name="password" type="password" placeholder="Password" onBlur={handleLoginValue} required/>
                {
                    loginValue.success ? <p className="text-success text-center font-twelve m-0 py-0 px-4">Account Logged In Successfully</p> : <p className="text-danger text-center font-twelve m-0 py-0 px-4">{loginValue.error}</p>
                }
                <input className="sign-button sign-input" type="submit" value="Log in"/>
                <p className="account">Create a new account! <Link to="/signup">Sign up</Link></p>
            </form>
            <div onClick={handleGoogleSignIn} className="googleFbSignIn">
                <img className="googleFbImage" src={googleIcon} alt=""/>
                <p className="m-0 text-center">Continue with Google</p>
            </div>
        </div>
    );
};

export default Login;