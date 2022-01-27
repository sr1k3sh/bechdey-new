import React from "react";
import { Link } from "react-router-dom";
import SubFooter from "./SubFooter";

export default function Footer(){
    return(
        <React.Fragment>
            <SubFooter></SubFooter>
            <footer className="bd-footer container-xl">
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
                                <Link className="bd-footer__link link-light" to="/mobile">Mobile Phone & Accessories</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__link link-light" to="/">Electronics</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__link link-light" to="/">Health & Fitness</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__link link-light" to="/">Real States</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3 className="bd__title bd-footer__title">Popular Location</h3>
                        <ul className="bd-footer__quicklinks">
                            <li className="bd-footer__item">
                                <Link className="bd-footer__link link-light" to="/">Kathmandu</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__link link-light" to="/">Butwal</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__link link-light" to="/">Chitwan</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__link link-light" to="/">Pokhara</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3 className="bd__title bd-footer__title">Others</h3>
                        <ul className="bd-footer__quicklinks">
                            <li className="bd-footer__item">
                                <Link className="bd-footer__link link-light" to="/">About Bechey</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__link link-light" to="/">Privacy</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__link link-light" to="/">Terms and Condition</Link>
                            </li>
                            <li className="bd-footer__item">
                                <Link className="bd-footer__link link-light" to="/">legals</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}