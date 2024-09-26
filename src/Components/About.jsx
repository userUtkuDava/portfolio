import React from 'react'
import './style/css/about.css'
import $ from 'jquery';
const About = () => {

    $(document).ready(function () {
        $('#myButton1,#myButton2').hover(
            function () {
                $('#mySpan1').addClass('highlight'); // Butona gelince renk değiştir
            },
            function () {
                $('#mySpan1').removeClass('highlight'); // Butondan çıkınca eski haline döner
            }
        );
        $('#myButton3,#myButton4').hover(
            function () {
                $('#mySpan2').addClass('highlight'); // Butona gelince renk değiştir
            },
            function () {
                $('#mySpan2').removeClass('highlight'); // Butondan çıkınca eski haline döner
            }
        );
        $('#myButton5,#myButton6').hover(
            function () {
                $('#mySpan3').addClass('highlight'); // Butona gelince renk değiştir
            },
            function () {
                $('#mySpan3').removeClass('highlight'); // Butondan çıkınca eski haline döner
            }
        );
        $('#myButton7').hover(
            function () {
                $('#mySpan4').addClass('highlight'); // Butona gelince renk değiştir
            },
            function () {
                $('#mySpan4').removeClass('highlight'); // Butondan çıkınca eski haline döner
            }
        );
        $('#myButton8').hover(
            function () {
                $('#mySpan5').addClass('highlight'); // Butona gelince renk değiştir
            },
            function () {
                $('#mySpan5').removeClass('highlight'); // Butondan çıkınca eski haline döner
            }
        );
        $('#myButton9,#myButton10').hover(
            function () {
                $('#mySpan6').addClass('highlight'); // Butona gelince renk değiştir
            },
            function () {
                $('#mySpan6').removeClass('highlight'); // Butondan çıkınca eski haline döner
            }
        );
        $('#myButton11').hover(
            function () {
                $('#mySpan7').addClass('highlight'); // Butona gelince renk değiştir
            },
            function () {
                $('#mySpan7').removeClass('highlight'); // Butondan çıkınca eski haline döner
            }
        );
    });

    return (
        <>
            <section id="about" className='about'>
                <div className='container'>
                    <h2 className='heading-content'>
                        <span className='title'>
                            Hakkımda
                        </span>
                        <div className="heading-sec-sub">
                            Burada benim hakkımda, ne yaptığım ve çoğunlukla programlama ve teknoloji açısından mevcut becerilerim hakkında daha fazla bilgi bulacaksınız.
                        </div>
                    </h2>

                </div>
                <div className='about-content container'>
                    <div className='row'>
                        <div className='about-content-main col-md-6 '>
                            <h3 className="about-content-title ">Beni tanıyın!</h3>
                            <div className='about-content-details'>
                                <p className="paragraf">Genel ürünün başarısına yol açan Web Sitelerinin ve Web Uygulamalarının Ön Uçunu oluşturan ve yöneten bir <span className='v-title'>Ön Uç Odaklı Web Geliştiricisiyim.</span>  Projeler bölümünde bazı çalışmalarıma göz atın.</p>
                                <p className="paragraf">
                                    <span className='skils-title' id='mySpan1'>HTML5 & CSS3:</span> Semantik HTML,
                                    responsive tasarımlar, modern CSS
                                    özellikleri.
                                    <span className='skils-title' id='mySpan2' >JavaScript & jQuery:</span> Etkileşimli ve
                                    dinamik kullanıcı deneyimleri oluşturma.
                                    <span className='skils-title' id='mySpan3'>Bootstrap & Sass:</span>  Hızlı prototipleme ve
                                    stil ön işleme.
                                    <span className='skils-title' id='mySpan4'>React & React Router:</span>  Tek sayfa
                                    uygulamaları (SPA), bileşen tabanlı
                                    mimari.
                                    <span className='skils-title' id='mySpan5'>Redux Toolkit:</span>  Global durum yönetimi ve
                                    uygulama
                                    durumlarının
                                    kontrolü.
                                    <span className='skils-title' id='mySpan6'>AJAX & JSON:</span>  Asenkron veri yükleme ve
                                    sunucu ile etkileşim.
                                    <span className='skils-title' id='mySpan7'>Git</span>  ile ekip içi işbirliğini sağlama
                                </p>
                            </div>
                        </div>
                        <div className='about-content-skils col-md-6'>
                            <h3 className="about-content-title ">Becerilerim</h3>
                            <div className='skils'>
                                <div className="skills__skill" id='myButton1'>HTML</div>
                                <div className="skills__skill" id='myButton2'>CSS3</div>
                                <div className="skills__skill" id='myButton3'>JAVASCRİPT</div>
                                <div className="skills__skill" id='myButton4'>JQUERY</div>
                                <div className="skills__skill" id='myButton5'>BOOTSTRAP</div>
                                <div className="skills__skill" id='myButton6'>SASS</div>
                                <div className="skills__skill" id='myButton7'>REACT</div>
                                <div className="skills__skill" id='myButton8'>REDUX TOOLKİT</div>
                                <div className="skills__skill" id='myButton9'>AJAX</div>
                                <div className="skills__skill" id='myButton10'>JSON</div>
                                <div className="skills__skill" id='myButton11'>GİT</div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About