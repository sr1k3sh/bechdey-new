import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <React.Fragment>
            <footer className="bd-footer container-xl mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <h2 className="text-light bd__icon">Bechdey.</h2>
                        <p className="text-white bd-footer__sub-title">In Bechdey you sale or buy anything you want to...</p>
                        {/* <img src=""></img> */}
                    </div>
                    <div className="col-md-3">
                        <h3 className="bd__title bd-footer__title">Quick Categories</h3>
                        <ul className="bd-footer__quicklinks">
                            <li className="bd-footer__item">
                                <Link className="bd-footer__item-link" to="/" className="bd-footer__link">Mobile Phone & Accessories</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__item-link" to="/" className="bd-footer__link">Electronics</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__item-link" to="/" className="bd-footer__link">Health & Fitness</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__item-link" to="/" className="bd-footer__link">Real States</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3 className="bd__title bd-footer__title">Mostly viewed</h3>
                        <ul className="bd-footer__quicklinks">
                            <li className="bd-footer__item">
                                <Link className="bd-footer__item-link" to="/" className="bd-footer__link">Mobile Phone</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__item-link" to="/" className="bd-footer__link">Cars</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__item-link" to="/" className="bd-footer__link">Motor Bike</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__item-link" to="/" className="bd-footer__link">Lands</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3 className="bd__title bd-footer__title">Others</h3>
                        <ul className="bd-footer__quicklinks">
                            <li className="bd-footer__item">
                                <Link className="bd-footer__item-link" to="/" className="bd-footer__link">About Bechey</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__item-link" to="/" className="bd-footer__link">Privacy</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__item-link" to="/" className="bd-footer__link">Terms and Condition</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__item-link" to="/" className="bd-footer__link">legals</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}