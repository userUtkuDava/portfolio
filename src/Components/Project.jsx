import React from 'react'
import './style/css/project.css'
import laptopWiew from '../images/laptop.png'
const Project = () => {
    return (
        <>
            <section id="projects" className='project'>
                <div className='container'>
                    <h2 className='heading-content'>
                        <span className='title'>
                            Projelerim
                        </span>
                        <div className="heading-sec-sub">
                            Burada her projede kendi örnek olay incelemesini içeren oluşturduğum bazı kişisel ve müşteri projelerini bulacaksınız.
                        </div>
                    </h2>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='project-img col-md-6'>
                            <img src={laptopWiew} className='laptop-wiew'>
                            </img>
                        </div>
                        <div className='project-detail col-md-6'>
                            <h1 className='mb-2'>
                                <span className='vurgu'>Portfolio</span> Site <span className='vurgu2'>(kurumsal)</span>
                            </h1>
                            <p className='project-detail-description'>
                                Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally
                            </p>
                            <button className='project-detail-btn btns btns--md'>Detay</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='project-img col-md-6'>
                            <img src={laptopWiew} className='laptop-wiew'>
                            </img>
                        </div>
                        <div className='project-detail col-md-6'>
                            <h1 className='mb-2'>
                                <span className='vurgu'>Portfolio</span> Site <span className='vurgu2'>(kurumsal)</span>
                            </h1>
                            <p className='project-detail-description'>
                                Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally
                            </p>
                            <button className='project-detail-btn btns btns--md'>Detay</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='project-img col-md-6'>
                            <img src={laptopWiew} className='laptop-wiew'>
                            </img>
                        </div>
                        <div className='project-detail col-md-6'>
                            <h1 className='mb-2'>
                                <span className='vurgu'>Portfolio</span> Site <span className='vurgu2'>(kurumsal)</span>
                            </h1>
                            <p className='project-detail-description'>
                                Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally
                            </p>
                            <button className='project-detail-btn btns btns--md'>Detay</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Project