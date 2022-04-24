import React from 'react';
import Navigation from '../components/navbar';
import Footer from '../components/footer';
import "../public/contact.css";

function Contact() {
    return (
        <div className="bg">
            <nav>
                <Navigation />
            </nav>
            <div className="form-container mt-5 mb-3">
                <h1 className="contactTitle mb-5">Contact Us</h1>
                <form className="contact-form">
                    <div className="row mb-4">
                        <div className="col">
                            <input type="text" placeholder="Your Name" className="form-user-icon form-control" name='name' />
                        </div>
                        <div className="col">
                            <input type="email" placeholder="E-mail" className="form-email-icon form-control" name='email' />
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

            <footer>
                <Footer />
            </footer>
        </div >
    );
}

export default Contact;
