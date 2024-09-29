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
                            <img src={logoLinkedin} alt='Utku Dava LinkedIn' />
                        </div>
                        <div className="footer-logo footer-logo-github">
                            <img src={logoGithub} alt='Utku Dava GitHub' />
                        </div>
                        <div className="footer-logo footer-logo-whatsapp">
                            <img src={logoWhatsapp} alt='Utku Dava WhatsApp' />
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
