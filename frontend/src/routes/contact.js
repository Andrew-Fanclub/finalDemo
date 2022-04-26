import React from 'react';
import Navigation from '../components/navbar';
import Footer from '../components/footer';
import "../public/contact.css";
import Logo from '../images/logo2.png';

function Contact() {
    return (
        <div className="bg">
            <head>
                <title>The Plushie Web Scraper You've Been Waiting For</title>
            </head>
            <nav>
                <Navigation />
            </nav>
            <div className="form-container mt-5 mb-3">
                <h1 className="contactTitle mb-5">Contact<img src={Logo} alt="logo" className='logo'/></h1>
                <form className="contact-form" action='/process?form=contactus' method="POST">
                    <div className="row mb-4">
                        <div className="col">
                            <input type="text" placeholder="Your Name" className="form-user-icon form-control name" name='name' />
                        </div>
                        <div className="col">
                            <input type="email" placeholder="E-mail" className="form-email-icon form-control email" name='email' />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <textarea placeholder="Leave your message" className="form-msg-icon form-control message" name='message'></textarea></div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <button className="btn submit-btn">SEND</button>
                        </div>
                    </div>
                </form>
            </div>
            <footer className='contactFooter'>
                <Footer />
            </footer>
        </div >
    );
}

export default Contact;
