import React from 'react';
import Navigation from '../components/navbar';
import Footer from '../components/footer';
import "../public/howWorks.css";

import Search from '../images/howWorksImg/Search.png';
import Press from '../images/howWorksImg/Button.png';
import Result from '../images/howWorksImg/Results.png';

function HowWorks() {
    return (
        <div className="bg">
            <nav>
                <Navigation />
            </nav>
            <div className="mt-5 mb-3">
                <h1 className="title mb-5">How <span className="midWord">It</span> Works</h1>
                <div className="progress">
                    <div className="progress-container">
                        <img src={Search} className="sizeIMG" alt="Create Form Graphic" />
                        <div className="progress-info-container">
                            <p className="progress-subtitle">
                                Search
                            </p>
                            <p className="progress-info">
                                Type in the related terms to plushies that you want to find.
                            </p>
                        </div>

                    </div>
                    <div className="progress-container">
                        <img src={Press} className="sizeIMG" alt="Create Form Graphic" />
                        <div className="progress-info-container">
                            <p className="progress-subtitle">
                                Press Enter
                            </p>
                            <p className="progress-info">
                                Press the button and our scraper will find the plushies for you.
                            </p>
                        </div>

                    </div>

                    <div className="progress-container">
                        <img src={Result} className="sizeIMG" alt="Create Group Graphic" />
                        <div className="progress-info-container">
                            <p className="progress-subtitle">
                                Voilà!
                            </p>
                            <p className="progress-info">
                                Have fun scrolling through all of the results!
                            </p>
                        </div>

                    </div>

                </div>

            </div>

            <footer>
                <Footer />
            </footer>
        </div >
    );
}

export default HowWorks;