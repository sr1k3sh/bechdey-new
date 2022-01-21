import React from "react";
import banner from './../assets/images/Rectangle.png';
import {Link, useHistory} from 'react-router-dom';
export default function Banner(){
    const history = useHistory();

    const onRegisterButtonClick = (e) =>{
        e.preventDefault();
        history.push('/register');
    }
    return(
        <React.Fragment>
            <div className="bd-banner container-xl">
                <img className="bd-banner__img" src={banner} alt="banner"></img>
                <div className="bd-banner__slogan-wrapper">
                    <h1 className="bd-banner__h1">Selling here is the easy way to make extra money</h1>
                    <div className="bd-banner__buttons">
                        <button className="btn btn-lg btn-outline-light" onClick={onRegisterButtonClick}>Register now</button>
                        <Link className="bd-banner__link link-light" to="/home">learn more
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}