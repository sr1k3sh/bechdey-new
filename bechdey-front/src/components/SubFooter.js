import React from "react";
import { Link } from "react-router-dom";
import device from './../assets/images/mobile.png';
export default function SubFooter(){
    return(
        <React.Fragment>
            <div className="container-xl">
                <div className="row">
                    <div className="col-md-4">
                        <img className="bd-footer__img"src={device} alt="playstore"></img>
                    </div>
                    <div className="col-md-4 align-self-center">
                        <h1 className="bd-footer__h1">
                            Download the app today
                        </h1>
                        <p>Buy, sell and find just anything using the app on your phone.</p>
                    </div>
                    <div className="col-md-4 align-self-center">
                        <span><strong>GET YOUR APP TODAY</strong></span>
                        <div>
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 1.734a1 1 0 0 1 .501.135l16.004 9.266a1 1 0 0 1 0 1.73L4.501 22.131A1 1 0 0 1 3 21.266V2.734a1 1 0 0 1 1-1zm8.292 11.68l-4.498 4.498 5.699-3.299-1.2-1.2zM5 6.118v11.76l5.88-5.88-5.88-5.88zm10.284 4.302L13.706 12l1.578 1.577L18.008 12l-2.725-1.579zm-7.49-4.336l4.5 4.5 1.199-1.2-5.699-3.3z"/></svg>
                            </Link>
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM8.823 15.343l-.79 1.37a.823.823 0 1 1-1.428-.822l.589-1.016c.66-.206 1.201-.048 1.629.468zM13.21 8.66l2.423 4.194h2.141a.82.82 0 0 1 .823.822.82.82 0 0 1-.823.823h-1.19l.803 1.391a.824.824 0 0 1-1.427.823l-3.04-5.266c-.69-1.19-.198-2.383.29-2.787zm.278-3.044c.395.226.528.73.302 1.125l-3.528 6.109h2.553c.826 0 1.29.972.931 1.645h-7.48a.82.82 0 0 1-.822-.823.82.82 0 0 1 .822-.822h2.097l2.685-4.653-.838-1.456a.824.824 0 0 1 1.427-.823l.359.633.367-.633a.823.823 0 0 1 1.125-.302z"/></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}