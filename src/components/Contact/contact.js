import './contact.css';
import twitterIcon from '../../assets/twitter.png';
import instagramIcon from '../../assets/instagram.png';
import githubIcon from '../Contact/github.png';
import linkedinIcon from '../Contact/linkedin.png';
import React from 'react';

const Contact = () => {
    return (
        <div id='contactPage'>
            {/* Projects Section */}
            <div id="clients">
                <h1 className="contactPageTitle">My Projects</h1>
                <div className="projectList">
                    <div className="projectCard">
                        <h3>Phishing & Quishing Detection</h3>
                        <p>Detects phishing websites and QR-based threats using machine learning and Streamlit. A paper titled
                        'Content-Based Phishing and Quishing (QR Phishing) Detection Using Machine Learning' was published in the
                        Journal of Technology, Volume 12, Issue 9, September 2024.</p>
                        <p><strong>Tech:</strong> Python, StreamLit, MLFlow</p>
                        <a href="https://drive.google.com/file/d/1xgU2I7p_A4RY8qOkfZ9rnDDV05MTh6Lr/view" target="_blank" rel="noopener noreferrer">Read It Here</a>
                    </div>
                    <div className="projectCard">
                        <h3>Saffron Quality Analysis</h3>
                        <p>Classifies saffron into quality grades using image processing and a Random Forest classifier. Includes chatbot & feedback loop.</p>
                        <p><strong>Tech:</strong> Python, OpenCV, StreamLit, Scikit-learn, MySQL</p>
                        <a href="https://drive.google.com/file/d/1tLglW3KRm_xbAsE_aMmZDyCNEF4d75sC/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                    <div className="projectCard">
                        <h3>E-commerce Website</h3>
                        <p>Developed a responsive E-commerce website using React, Node.js, and Material UI during full-stack internship at Code Lab Systems.</p>
                        <p><strong>Tech:</strong> React, Node.js, Material UI</p>
                        <a href="https://github.com/vinodkayara/E-Commerce" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div className="projectCard">
                        <h3>Sports News & Portfolio Website</h3>
                        <p>Created a custom WordPress site for sports news and a personal portfolio using React, with clean animations and SEO-ready design.</p>
                        <p><strong>Tech:</strong> WordPress, React JS, JavaScript</p>
                        <a href="https://github.com/vinodkayara/PesonalPortfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <div className="contactCard">
                    <div className="contactDetails">
                        <p><strong>Email:</strong> <a href="mailto:vinodkayara181818@gmail.com">vinodkayara181818@gmail.com</a></p>
                        <p><strong>Phone:</strong> <a href="tel:+918431715839">+91-8431715839</a></p>
                    </div>
                    <div className="links">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={twitterIcon} alt="Twitter" className="link" />
                        </a>
                        <a href="https://instagram.com/vinod.kayara" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className="link" />
                        </a>
                        <a href="https://github.com/vinodkayara" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" className="link" />
                        </a>
                        <a href="https://www.linkedin.com/in/vinod-kayara-51983b293" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" className="link" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
