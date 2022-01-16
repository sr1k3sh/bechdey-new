import React from "react";
import {Link} from 'react-router-dom';
import { logout, useAuthDispatch, useAuthState } from "../context";
export default function Navbar(){

    const userDetails = useAuthState();
    const dispatch = useAuthDispatch();

    const onLogout = (e) =>{
        e.preventDefault();
        logout(dispatch);
    }
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="navbar__topbar mb-3">
                            <Link className="" to="/addproduct">Sell on Bechday</Link>
                        </div>
                        <div className="navbar__mainbar mb-3">
                            <h2><Link className="navbar__icon" to="/">Bechdey.</Link></h2>
                            <div className="navbar__mainbar-right">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                                {
                                    userDetails.user ? 
                                    <div className="dropdown">
                                        <button className="btn dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 7h5v2h-5V7zm-2 5h7v2h-7v-2zm3 5h4v2h-4v-2zM2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                            <li><button className="btn" onClick={onLogout}>Logout</button></li>
                                        </ul>
                                    </div>                               
                                    :
                                    <Link to="/login">Login</Link>                                  
                                }
                            </div>
                        </div>
                        <div className="navbar__subbar">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/">Cars</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Motorcycle</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">MobilePhones</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home & Apparments</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Scooters</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Clothes</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Mobile Accessories</Link>
                                    </li>
                                </ul>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        All Categorise
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                        {/* <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}