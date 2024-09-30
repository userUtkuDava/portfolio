import React, { useState } from 'react';
import { init, send } from 'emailjs-com';
import './style/css/contact.css';

init('eTl4ZNMpGlWkf83ld')

const Contact = () => {
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
                alert('Mesajınız başarıyla gönderildi!');
            })
            .catch((err) => {
                console.error('Gönderim hatası:', err);
                alert('Mesaj gönderiminde bir hata oluştu.');
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
            <div className="container contact-form-container">
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
                        <p className='text-dark text-center p-3 text-4xl font-bold'>Deneme asdsadsda asdasd dsd d s</p>
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
