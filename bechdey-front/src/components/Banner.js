import React from "react";
import banner from './../assets/images/banner.jpg';
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
                        <button className="btn btn-outline-primary" onClick={onRegisterButtonClick}>Register now</button>
                        <Link to="/home">learn more</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}