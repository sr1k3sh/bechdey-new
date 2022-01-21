import React from "react";
import banner from './../assets/images/Rectangle.png';
import {Link, useHistory} from 'react-router-dom';
import { useAuthState } from "../context";
export default function Banner(){
    const history = useHistory();
    const userDetails = useAuthState();
    const onRegisterButtonClick = (e) =>{
        e.preventDefault();
        history.push('/register');
    }

    const onRegisterAd = (e) =>{
        e.preventDefault();
        history.push('/addproduct');
    }
    return(
        <React.Fragment>
            <div className="bd-banner container-xl">
                <img className="bd-banner__img" src={banner} alt="banner"></img>
                <div className="bd-banner__slogan-wrapper">
                    
                        {
                            userDetails.user ? 
                            <h1 className="bd-banner__h1">welcome <strong className="text-primary">{userDetails.user}</strong>.<br></br> You can now post your ads</h1>
                            :<h1 className="bd-banner__h1">Selling here is the easy way to make extra money</h1>

                        }
                    
                    <div className="bd-banner__buttons">
                        {
                            userDetails.user ?
                                <button className="btn btn-lg btn-outline-light bd-banner__post-ad" onClick={onRegisterAd}>
                                    Post Ad
                                </button>
                            :
                            <React.Fragment>
                                <button className="btn btn-lg btn-outline-light" onClick={onRegisterButtonClick}>Register now</button>
                                <Link className="bd-banner__link link-light" to="/home">learn more
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                                </Link>
                            </React.Fragment>
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}