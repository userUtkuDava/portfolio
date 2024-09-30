import React, { useState } from 'react';
import { init, send } from 'emailjs-com';
import './style/css/contact.css';
import { FcOk } from "react-icons/fc";
init('eTl4ZNMpGlWkf83ld')

const Contact = () => {
    const [visibility, setVisibility] = useState('hidden');


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS ile gönder
        send('service_dlrs0lw', 'template_6j57nn4', formData)
            .then((response) => {
                console.log('Başarıyla gönderildi!', response.status, response.text);
                setVisibility('visbility')
                document.getElementById('alertMessage').innerHTML = `
                 <div className="flex flex-column items-center">
                 
                    <p>Mesajınız Alındı</p>
                 
                 </div>
                `

                setTimeout(() => {
                    setVisibility('hidden')
                }, 3000); // 3 saniye bekler
            })
            .catch((err) => {
                console.error('Gönderim hatası:', err);
                setVisibility('visbility')
                document.getElementById('alertMessage').innerHTML = "Mesaj gönderiminde hata meydana geldi"

                setTimeout(() => {
                    setVisibility('hidden')
                }, 5000); // 5 saniye bekler
            });

        // Form verilerini sıfırlama
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id='contact' className='contact'>
            <div className="container">
                <h2 className='heading-content'>
                    <span className='title'>İLETİŞİM</span>
                    <div className="heading-sec-sub">
                        Aşağıdaki formu göndererek benimle iletişime geçmekten çekinmeyin, mümkün olan en kısa sürede size geri döneceğim.
                    </div>
                </h2>
            </div>
            <div className=" contact-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="contact__form-field">
                        <label className='contact__form-label' htmlFor="name">İsim</label>
                        <input
                            required
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='İsminizi Giriniz'
                            className='contact__form-input'
                            type="text"
                        />
                    </div>
                    <div className="contact__form-field">
                        <label className='contact__form-label' htmlFor="email">Email</label>
                        <input
                            required
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Mailinizi Giriniz'
                            className='contact__form-input'
                            type="email"
                        />
                    </div>
                    <div className="contact__form-field">
                        <label className='contact__form-label' htmlFor="message">Mesaj</label>
                        <textarea
                            required
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            cols="10"
                            rows="5"
                            className="contact__form-input"
                            placeholder="Mesajınızı Giriniz"
                        ></textarea>
                    </div>
                    <div className="from-alert-container">
                        <p id='alertMessage' className={`${visibility} text-black font-medium text-base bg-gray-200 text-dark text-center p-3 rounded mb-4 shadow-sm`}>

                        </p>
                    </div>
                    <button type="submit" className="btn btn--theme contact__btn">
                        Gönder
                    </button>

                </form>
            </div>
        </section>
    );
};

export default Contact;
