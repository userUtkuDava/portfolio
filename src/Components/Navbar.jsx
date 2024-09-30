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
                                <a href="./" className="header__link"> Ansayfa </a>
                            </li>
                            <li className="header__link-wrapper">
                                <a href="./#about" className="header__link">Hakkımda </a>
                            </li>
                            <li className="header__link-wrapper">
                                <a href="./#projects" className="header__link"> Projelerim</a>
                            </li>
                            <li className="header__link-wrapper">
                                <a href="./#contact" className="header__link"> İletişim </a>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className={`button ${isClicked ? 'header-sm-menu-close' : 'header-sm-menu'}`}>
                    <ul className="header__sm-menu-links">
                        <li className="header__sm-menu-link">
                            <a href="./"> Ansayfa </a>
                        </li>

                        <li className="header__sm-menu-link">
                            <a href="./#about"> Hakkımda </a>
                        </li>

                        <li className="header__sm-menu-link">
                            <a href="./#projects"> Projelerim </a>
                        </li>

                        <li className="header__sm-menu-link">
                            <a href="./#contact"> iletişim </a>
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