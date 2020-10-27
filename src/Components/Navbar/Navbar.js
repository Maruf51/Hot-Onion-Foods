import React from 'react';
import './Navbar.css';
import logo from '../../images/logo2.png';
import cartIcon from '../../images/ICON/Path 1.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="d-flex justify-content-between container align-items-center p-3">
            <div>
                <Link to="/"><img className="onionLogo" src={logo} alt=""/></Link>
            </div>
            <div className="d-flex align-items-center">
                <Link to="/cart"><img className="cartIcon" src={cartIcon} alt=""/></Link>
                {
                    loggedInUser.name ? <h5 className="m-0 text-danger pl-3">{loggedInUser.name}</h5> : <div><Link to="/login"><button className="btn btn-primary logSignBtn mx-2">Login</button></Link>
                    <Link to="/signup"><button className="btn btn-danger logSignBtn">Sign Up</button></Link></div>
                }
            </div>
        </div>
    );
};

export default Navbar;