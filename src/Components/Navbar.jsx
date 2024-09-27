import React from 'react'
import './style/css/navbar.css'
import { useState } from 'react'
import logo from '../images/logoMain.jpg'
const Navbar = () => {
    const [navbarSm, setnavbarSm] = useState('header-sm-menu');
    const [isClicked, setIsClicked] = useState('click');
    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <>
            <div className='header'>
                <div className='header-content'>
                    <div className='header-logo-container'>
                        <div className='header-logo-img-cont'>
                            <img src={logo} alt="Utku Dava Logo Image" className="header-logo-img" />
                        </div>
                        <span className="header-logo-sub">Utku Dava</span>

                    </div>
                    <div className='header-main'>
                        <ul className="header__links">
                            <li className="header__link-wrapper">
                                <a href="./" className="header__link"> Home </a>
                            </li>
                            <li className="header__link-wrapper">
                                <a href="./#about" className="header__link">About </a>
                            </li>
                            <li className="header__link-wrapper">
                                <a href="./#projects" className="header__link"> Projects </a>
                            </li>
                            <li className="header__link-wrapper">
                                <a href="./#contact" className="header__link"> Contact </a>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className={`button ${isClicked ? 'header-sm-menu-close' : 'header-sm-menu'}`}>
                    <ul className="header__sm-menu-links">
                        <li className="header__sm-menu-link">
                            <a href="./"> Home </a>
                        </li>

                        <li className="header__sm-menu-link">
                            <a href="./#about"> About </a>
                        </li>

                        <li className="header__sm-menu-link">
                            <a href="./#projects"> Projects </a>
                        </li>

                        <li className="header__sm-menu-link">
                            <a href="./#contact"> Contact </a>
                        </li>
                    </ul>
                </div>

            </div>
            <button
                onClick={handleClick}
                className={`button ${isClicked ? 'click' : 'clicked'}`}
            >
                <i className="bi bi-list"></i>
            </button >


        </>
    )
}

export default Navbar