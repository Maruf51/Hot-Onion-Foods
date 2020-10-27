import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Signup.css';
import googleIcon from '../../images/ICON/google.png';
import { createNewAccount, googleSignIn, updateUserInfo } from '../FirebaseManager/FirebaseManager';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Signup = () => {
    let location = useLocation();
    let history = useHistory();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [loginInfo, setLoginInfo] = useState({
        name: '',
        email: '',
        success: false,
        error: '',
        password: '',
        confirmPassword: '',
    })
    // console.log(loginInfo)

    const handleFormValueChange = (e) => {
        const newData = {...loginInfo}
        newData[e.target.name] = e.target.value;
        setLoginInfo(newData);
    }

    const handleCreateNewAccount = (e) => {
        e.preventDefault();

        if(loginInfo.password === loginInfo.confirmPassword){
            createNewAccount(loginInfo.email, loginInfo.password)
            .then(data => {
                if(data.success){
                    updateUserName(data)
                }
                const newData = {...loginInfo}
                newData.success = data.success;
                newData.error = data.error;
                setLoginInfo(newData)
            })
        }
        else{
            alert("Password or Confirm Password didn't match. Please try again.")
        }
    }
    const updateUserName = () => {
        updateUserInfo(loginInfo.name)
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
            <form className="sign-form" onSubmit={handleCreateNewAccount}>
                <h1 className="form-name">Sign up</h1>
                <input className="sign-input" name="name" onChange={handleFormValueChange} type="text" placeholder="Name" required/>
                <input className="sign-input" type="text" onChange={handleFormValueChange} name="email" placeholder="Email" required/>
                <input className="sign-input" type="password" onChange={handleFormValueChange} name="password" placeholder="Password" required/>
                <input className="sign-input" type="password" onChange={handleFormValueChange} name="confirmPassword" placeholder="Confirm Password" required/>
                {
                    loginInfo.success ? <p className="text-success text-center font-twelve m-0 py-0 px-4">Account Created Successfully. Please <Link to="/login">Log in</Link></p> : <p className="text-danger text-center font-twelve m-0 py-0 px-4">{loginInfo.error}</p>
                }
                <input className="sign-button sign-input" type="submit" value="Sign up"/>
                <p className="account">Already have an account? <Link to="/login">Log in</Link></p>
            </form>
            <div onClick={handleGoogleSignIn} className="googleFbSignIn">
                <img className="googleFbImage" src={googleIcon} alt=""/>
                <p className="m-0 text-center">Continue with Google</p>
            </div>
        </div>
        
    );
};

export default Signup;