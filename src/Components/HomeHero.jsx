import React, { useEffect } from 'react';
import './style/css/homeHero.css';
import logoWhatsapp from '../images/whatsappİconSB.png';
import logoLinkedin from '../images/linkedinİconSB.png';
import logoGithub from '../images/githubİconSB.png';

const HomeHero = () => {


    // Renk değiştirme fonksiyonu
    const changeThemaRed = () => {
        document.documentElement.style.setProperty('--primaryColor', '#ff0000'); // Yeni renk
        document.documentElement.style.setProperty('--secondaryColor', '#4cf000');
    };
    const changeThemaOrange = () => {
        document.documentElement.style.setProperty('--primaryColor', 'orange');
        document.documentElement.style.setProperty('--secondaryColor', 'black'); // Yeni renk
    };
    const changeThemaBlue = () => {
        document.documentElement.style.setProperty('--primaryColor', '#0071f3'); // Yeni renk
        document.documentElement.style.setProperty('--secondaryColor', 'orange');
    };

    return (
        <section className='home-hero'>
            <div className='home-hero__content'>
                <h1 className='heading-primary'>Merhaba, ben Utku Dava</h1>
                <div className='info'>
                    <p className='texting-primary'>
                        Genel ürünün başarısına yol açan Web Sitelerini ve Web Uygulamalarını oluşturan ve yöneten
                        <br />Sonuç Odaklı bir Web Geliştiricisi
                    </p>
                </div>
                <div className='home-hero__cta'>
                    <a href="./#projects" className="btns btns--bg">Projects</a>
                </div>
            </div>
            <div className='home-hero__socials ' id='socials'>
                <div className="home-hero__social">
                    <a href="https://github.com/userUtkuDava" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                        <img src={logoGithub} alt="Utku Dava Github Profil" className="home-hero__social-icon" />
                    </a>

                </div>
                <div className="home-hero__social">
                    <a href="https://www.linkedin.com/in/utku-dava-763548245/" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                        <img src={logoLinkedin} alt="Utku Dava Linkedin Profili" className="home-hero__social-icon" />
                    </a>
                </div>
                <div className="home-hero__social">
                    <a href="https://wa.me/905442348908" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                        <img src={logoWhatsapp} alt="Utku Dava Whatsapp" className="home-hero__social-icon" />
                    </a>
                </div>
                <div className='tema-container'>
                    <div>
                        <p className='tema-title'>Temaları Deneyin!</p>
                        <div className='tema-buttons'>
                            <div className='tema-button-one'>
                                <button className='button-theme-blue ' id="changeColorBtn" onClick={changeThemaBlue}></button>
                            </div>
                            <div className='tema-button-one'>
                                <button className='button-theme-red ' id="changeColorBtn" onClick={changeThemaRed}></button>
                            </div>
                            <div className='tema-button-one'>
                                <button className='button-theme-orange' onClick={changeThemaOrange} id="changeColorBtn"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-hero__mouse-scroll-cont'>
                <div className='mouse'></div>
            </div>
        </section>
    );
};

export default HomeHero;
