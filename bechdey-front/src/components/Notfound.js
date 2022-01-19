import React from "react";
import notfound from './../assets/svgs/notfound.svg';
export default function NotFound(){
    return(
        <React.Fragment>
            <div className="container-xl">
                <img className="bd-auth__img" src={notfound} alt="not found"></img>
            </div>
        </React.Fragment>
    )
}