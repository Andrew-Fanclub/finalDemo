import React from 'react';
import Navigation from '../components/navbar';
import Footer from '../components/footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../public/whoWe.css";
import mj from "../images/team/mjShoot.jpg";
import catherine from "../images/team/catherine.jpg";

function WhoWe() {
    return (
        <div className="bg">
            <nav>
                <Navigation />
            </nav>
            <div className="constraint mt-5 mb-3">
                <h1 className="title">About Us</h1>
                <section className='mb-5'>
                    <h3 className="subTitle">Our Project</h3>
                    <h4 className='text'>AFCPlushies is a webscraper built with ReactJS, SQL, Node, and Python in order to be the next Amazon - but for plushies!</h4>
                </section>
                <section className="team">
                    <h3 className="subTitle">Our Team</h3>
                    <section className="ms-5">
                        <Row className="mb-3">
                            <Col><div className="square"><img className='team' src={mj} placeholder='mj' /></div></Col>
                            <Col className="me-5">
                                <h5 className='teamTextBold'>Marlon Burog</h5>
                                <p className='teamText'>1st year Software Engineering major</p>
                            </Col>
                            <Col><div className="square"><img className='team' src={catherine} placeholder='catherine' /></div></Col>
                            <Col className="me-5">
                                <h5 className='teamTextBold'>Catherine Nguyen</h5>
                                <p className='teamText'>3rd Year (Graduating Senior) Computer Science major</p>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col><div className="square"></div></Col>
                            <Col className="me-5">
                                <h5 className='teamTextBold'>Yik Haw Teoh</h5>
                                <p className='teamText'>Teammate</p>
                            </Col>

                            <Col><div className="square"></div></Col>
                            <Col className="me-5">
                                <h5 className='teamTextBold'>Matthew Chan</h5>
                                <p className='teamText'>Teammate</p>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col><div className="square"></div></Col>
                            <Col className="me-5">
                                <h5 className='teamTextBold'>Wen Hui Cheah</h5>
                                <p className='teamText'>Teammate</p>
                            </Col>

                            <Col><div className="square"></div></Col>
                            <Col className="me-5">
                                <h5 className='teamTextBold'>Brad Lee</h5>
                                <p className='teamText'>Teammate</p>
                            </Col>
                        </Row>
                    </section>
                </section>
            </div>

            <footer>
                <Footer />
            </footer>
        </div >
    );
}

export default WhoWe;
