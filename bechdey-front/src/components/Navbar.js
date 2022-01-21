import React from "react";
import {Link, useHistory} from 'react-router-dom';
import { logout, useAuthDispatch, useAuthState } from "../context";
import InputSearch from "./inputs/InputSearch";
export default function Navbar(){

    const userDetails = useAuthState();
    const dispatch = useAuthDispatch();
    const history = useHistory();

    const onLogout = (e) =>{
        e.preventDefault();
        logout(dispatch);
    }

    const onLoginClick=(e)=>{
        e.preventDefault();
        history.push("/login");
    }

    const onRegisterClick = (e) =>{
        e.preventDefault();
        history.push("/register");
    }

    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-xl">
                    <div className="col-12">
                        <div className="navbar__mainbar">
                            <div className="navbar__icon">
                                <h2><Link className="navbar__icon" to="/home">Bechdey.</Link></h2>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="navbar__search m-auto">
                                    <form className="d-flex w-100">
                                        <InputSearch></InputSearch>       
                                    </form>
                                </div>
                                <div className="navbar__mainbar-right">
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
                                        <React.Fragment>
                                            <button className="btn btn-outline-secondary me-3" onClick={onLoginClick}>Login</button>
                                            <button className="btn btn-primary" onClick={onRegisterClick}>Register</button>                                  
                                        </React.Fragment>
                                    }
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}