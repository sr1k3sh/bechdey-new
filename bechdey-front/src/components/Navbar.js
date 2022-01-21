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

    const onAvatarClick = (e) => {
        e.preventDefault();
        history.push("/users");
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
                                        <React.Fragment>
                                            <div>
                                                <button className="btn">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655z"/></svg>
                                                </button>
                                            </div>
                                            <div>
                                                <button className="btn">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm7-16c4.97 0 9 4.043 9 9.031V20H3v-8.969C3 6.043 7.03 2 12 2zM9.5 21h5a2.5 2.5 0 1 1-5 0z"/></svg>
                                                </button>
                                            </div>
                                            <div>
                                                <button className="btn navbar__avatar" onClick={onAvatarClick}>
                                                    {userDetails.user.charAt(0)}
                                                </button>
                                            </div>
                                            <div className="dropdown">
                                                <button className="btn dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 18h7v2H2v-2zm0-7h9v2H2v-2zm0-7h20v2H2V4zm18.674 9.025l1.156-.391 1 1.732-.916.805a4.017 4.017 0 0 1 0 1.658l.916.805-1 1.732-1.156-.391c-.41.37-.898.655-1.435.83L19 21h-2l-.24-1.196a3.996 3.996 0 0 1-1.434-.83l-1.156.392-1-1.732.916-.805a4.017 4.017 0 0 1 0-1.658l-.916-.805 1-1.732 1.156.391c.41-.37.898-.655 1.435-.83L17 11h2l.24 1.196c.536.174 1.024.46 1.434.83zM18 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                                    <li><button className="btn navbar__dropdown-logout" onClick={onLogout}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4-5 4z"/></svg>
                                                        Logout
                                                    </button></li>
                                                </ul>
                                            </div>                               
                                        </React.Fragment>
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