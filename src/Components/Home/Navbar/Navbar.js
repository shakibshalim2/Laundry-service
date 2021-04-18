import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css'

const Navbar = () => {
    const [loggedInUser] = useContext(UserContext)
    const { name } = loggedInUser;
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-5 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" href="#">Laundry Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" href="#">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ms-5 active" href="#">Blogs</a>
                        </li>
                        <li class="nav-item">
                            {
                                name ?
                                    <h4 className="name mx-5">{name}</h4> : <div className="btn ms-5"><Link style={{ textDecoration: 'none' }} to="/login" className="login-btn">Login</Link></div>
                            }
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;