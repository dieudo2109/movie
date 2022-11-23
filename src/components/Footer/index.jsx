import React from 'react';
import { BsFacebook, BsYoutube, BsGithub, BsGoogle } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import './Footer.scss'
function Footer() {
    return (
        <>
            <div className="container">
                <div className="ft-left">
                    <img src='./accsets/logo.png' alt='logo' className="img-logo" />
                    <div className="text">
                        <p className="address">7637 Laurel Dr. King Of Prussia, PA 19406</p>
                        <p >The world's leading online movie watching application</p>
                    </div>
                </div>
                <div className="about-company">
                    <h2>About Company</h2>
                    <p>Provide the best customer experience</p>
                    <Link to="#" className="btn-footer"> More Info </Link><br />
                    <Link to="#" className="btn-footer"> Contact Us</Link>
                </div>
                <div className="help-us">
                    <h2>Help Us</h2>
                    <div className="menu-list">
                        <Link to="#"> Home</Link><br />
                        <Link to="#"> About</Link><br />
                        <Link to="#"> Service</Link><br />
                        <Link to="#"> Team</Link><br />
                        <Link to="#"> Help</Link><br />
                        <Link to="#"> Contact</Link><br />
                    </div>
                </div>
                <div className="Newslettee">
                    <h2>Newslettee</h2>
                    <div className="footer-icons">
                        <BsFacebook className="icon" />
                        <BsYoutube className="icon" />
                        <BsGithub className="icon" />
                        <BsGoogle className="icon" />
                    </div>
                    <form className="form-footer">
                        <input type="text" placeholder="search here...." />
                        <input type="button" value="Go" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Footer