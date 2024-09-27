import React from 'react'
import './style/css/homeHero.css'
import logoLinkedin from '../images/linkedin.png'
import logoGithub from '../images/github.png'


const HomeHero = () => {
    return (
        <section className='home-hero'>
            <div className='home-hero__content'>
                <h1 className='heading-primary'>
                    Merhaba, ben Utku Dava</h1>
                <div className='info'>
                    <p className='texting-primary'>
                        Genel ürünün başarısına yol açan Web Sitelerini ve Web Uygulamalarını oluşturan ve yöneten Sonuç Odaklı bir Web Geliştiricisi
                    </p>
                </div>
                <div className='home-hero__cta'>
                    <a href="./#projects" class="btns btns--bg">Projects</a>

                </div>
            </div>
            <div className='home-hero__socials'>
                <div class="home-hero__social">
                    <a href="https://github.com/userUtkuDava" class="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                        <img src={logoGithub} alt="Utku Dava Github Profil" class="home-hero__social-icon" />
                    </a>
                </div>
                <div class="home-hero__social">
                    <a href="https://www.linkedin.com/in/utku-dava-763548245/" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                        <img src={logoLinkedin} alt="Utku Dava Linkedin Profili" className="home-hero__social-icon" />
                    </a>
                </div>

            </div>
            <div className='home-hero__mouse-scroll-cont'>
                <div className='mouse'>

                </div>
            </div>

        </section>
    )
}

export default HomeHero