import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import React from 'react';
import "../public/footer.css";

function Footer() {
    return (
        <div>
            <Container fluid className="footer-bg col">
                <div className="d-flex flex-row justify-content-between">
                    <div className="col footer-top left-col">
                        <section className="mt-3">
                            <p className="footer-topic">INFORMATION</p>
                            <div className="row">
                                <div className="col">
                                    <a className="footer-subtext" href='/aboutus'>About AFCPlushies</a>
                                    <a className="footer-subtext" href='https://www.buzzfeed.com/04sarahet/which-one-of-my-stuffed-animals-are-you-32mk2049ay'>Take The Plushie Quiz</a>
                                    <a className="footer-subtext" href='data:image/png;base64,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'>Things We Like</a>
                                </div>
                                <div className="col left-col-right">
                                    <a className="footer-subtext" href='/howitworks'>How It Works</a>
                                    <a className="footer-subtext" href='http://www.script-o-rama.com/movie_scripts/a1/bee-movie-script-transcript-seinfeld.html'>Privacy Policy</a>
                                    <a className="footer-subtext" href='http://www.script-o-rama.com/movie_scripts/a1/bee-movie-script-transcript-seinfeld.html'>Terms of Service</a>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col footer-top ps-2">
                        <section className="mt-3">
                            <p className="footer-topic">CONTACT US</p>
                            <h5 id="footer-email" className="mb-4">afcplushies@gmail.com</h5>
                        </section>
                        <section>
                            <p className="footer-topic mb-2">GET IN TOUCH</p>
                            <p className="footer-subtext">Send us a message.</p>
                            <button className="btn send-btn"><a href="/contact">SEND MESSAGE</a></button>
                        </section>
                        <section>
                            <br />
                            <p className='footer-topic mb-2'> AFCPlushies Logo Artist </p>
                            <p className='footer-subtext'>Katherine Le</p>
                            <a className='footer-subtext' href='https://www.instagram.com/lathering03/'> @lathering03 on Instagram </a>
                        </section>
                    </div>
                </div>
            </Container>
        </div >
    );
}

export default Footer;
