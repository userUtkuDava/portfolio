import React from 'react';
import './style/css/footer.css';
import logoWhatsapp from '../images/whatsappİconSB.png';
import logoLinkedin from '../images/linkedinİconSB.png';
import logoGithub from '../images/githubİconSB.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container footer-content justify-content-between d-flex">
                <div className="footer-info">
                    <h3>Utku Dava</h3>
                    <p className='footer-info-text'>
                        Genel ürünün başarısına yol açan Web Sitelerinin ve Web Uygulamalarının Ön Uçunu oluşturan Ön Uç odaklı bir Web Geliştiricisi.
                    </p>
                </div>
                <div className="footer-social d-flex flex-column">
                    <h5 className='footer-social-title'> Sosyal Ağ</h5>
                    <div className="footer-social-icons d-flex flex-row">
                        <div className="footer-logo footer-logo-linkedin">
                            <a href='https://www.linkedin.com/in/utku-dava-763548245/' target='_blank' rel='noopener noreferrer'>
                                <img src={logoLinkedin} alt='Utku Dava LinkedIn' />
                            </a>
                        </div>
                        <div className="footer-logo footer-logo-github">
                            <a href='https://github.com/userUtkuDava ' target='_blank' rel='noopener noreferrer'>

                                <img src={logoGithub} alt='Utku Dava GitHub' />
                            </a>
                        </div>
                        <div className="footer-logo footer-logo-whatsapp">
                            <a href='https://wa.me/905442348908' target='_blank' rel='noopener noreferrer'>
                                <img src={logoWhatsapp} alt='Utku Dava WhatsApp' />
                            </a>
                        </div>
                    </div>
                    <div className='mail'>
                        <a href="mailto:utkudava.js@gmail.com" className='mail-title'>utkudava.js@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
