/* eslint-disable jsx-a11y/anchor-is-valid */
import { GlobalStyle } from '../Theme';
import styled from 'styled-components';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationsCards from '../components/LocationCards';
import errorIcon from '../assets/images/contact/desktop/icon-error.svg';
const StyledContactPageContainer = styled.div`
    .contact-us-container {
        width: 100%;
        height: 76.4rem;
        background-color: var(--peach-color);
    }
    .hero-container {
        width: 32.7rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .hero-text {
        width: 100%;
        height: 18.5rem;
        color: white;
        text-align: center;
        margin-bottom: 4.8rem;
    }
    .hero-text h1 {
        margin-bottom: 2.4rem;
    }
    form {
        display: flex;
        flex-direction: column;
        height: 38.7rem;
        width: 100%;
        border: none;
    }
    .input-field::placeholder {
        font-family: 'Jost', sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2.6rem;
        opacity: 0.5;
        color: white;
    }
    .input-field {
        width: 100%;
        height: 5.5rem;
        padding-left: 1.4rem;
        background-color: transparent;
        border: none;
        outline: none;
        color: white;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2.6rem;
        font-family: 'Jost', sans-serif;
        border-bottom: 0.1rem solid white;
    }

    .last-field {
        height: 12.6rem;
        padding-top: 2.5rem;
    }
    .input-field:focus {
        color: white;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2.6rem;
        font-family: 'Jost', sans-serif;
        border-bottom: 0.3rem solid white;
    }
    .submit-btn {
        margin-top: 4rem;
        font-family: 'Jost', sans-serif;
        border: none;
        outline: none;
        cursor: pointer;
        align-self: center;
    }
    .input-container {
        position: relative;
    }

    .error-container {
        width: 10.4rem;
        position: absolute;
        line-height: 2.6rem;
        font-style: italic;
        font-size: 1.2rem;
        color: white;
        top: 1.6rem;
        right: 0;
        display: flex;
        justify-content: space-between;
        opacity: 0;
        transition: 0.2s opacity ease-in-out;
    }
    .error-icon {
        width: 2rem;
        height: 2rem;
        background-image: url(${errorIcon});
    }
    .flag {
        opacity: 1;
    }

    & footer .talk-about-card {
        display: none;
    }
    footer {
        height: 62.6rem;
    }
    footer .inner-div {
        margin-top: 6.4rem;
    }
`;
function Contact() {
    const [inputField, setinputField] = useState({
        name: '',
        email: '',
        phone: '',
        msg: '',
    });

    const handleChange = (e) => {
        const target = e.target.name;
        console.log(target);
        const newObj = { ...inputField };
        newObj[target] = e.target.value;
        setinputField(newObj);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let error = document.getElementsByClassName('error-container');
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let i = 0;
        let flag = [false, false, false, false];
        for (let field in inputField) {
            if (inputField[field] === '') {
                error[i].classList.add('flag');
                flag[i] = true;
            }
            if (i === 1 && !re.test(inputField[field])) {
                error[i].classList.add('flag');
                flag[i] = true;
            }
            i++;
        }
        for (let i in flag) {
            if (flag[i] === false) {
                error[i].classList.remove('flag');
            }
        }
    };

    return (
        <StyledContactPageContainer>
            <GlobalStyle />
            <main>
                <Header />
                <div className="contact-us-container  flex-col-vh-center">
                    <div className="hero-container ">
                        <div className="hero-text">
                            <h1 className="phone-hero-text">Contact Us</h1>
                            <p className="phone-hero-subtext">
                                Ready to take it to the next level? Let’s talk
                                about your project or idea and find out how we
                                can help your business grow. If you are looking
                                for unique digital experiences that’s relatable
                                to your users, drop us a line.
                            </p>
                        </div>

                        <form id="contact-form">
                            <div className="input-container">
                                <input
                                    aria-label="Name"
                                    type="text"
                                    name="name"
                                    id="Name"
                                    placeholder="Name"
                                    className="input-field"
                                    value={inputField.name}
                                    onChange={handleChange}
                                />
                                <div className="error-container">
                                    <span className="error-message">
                                        Can't be empty
                                    </span>
                                    <div className="error-icon"></div>
                                </div>
                            </div>

                            <div className="input-container">
                                <input
                                    aria-label="email"
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="input-field"
                                    placeholder="Email Adress"
                                    value={inputField.email}
                                    onChange={handleChange}
                                />
                                <div className="error-container">
                                    <span className="error-message">
                                        Email invalid
                                    </span>
                                    <div className="error-icon"></div>
                                </div>
                            </div>

                            <div className="input-container">
                                <input
                                    aria-label="Phone"
                                    type="text"
                                    name="phone"
                                    className="input-field"
                                    id="phone-number"
                                    placeholder="Phone"
                                    value={inputField.phone}
                                    onChange={handleChange}
                                />
                                <div className="error-container">
                                    <span className="error-message">
                                        Can't be empty
                                    </span>
                                    <div className="error-icon"></div>
                                </div>
                            </div>
                            <div className="input-container">
                                <textarea
                                    placeholder="Your Message"
                                    name="msg"
                                    id="msg"
                                    className="input-field last-field"
                                    cols="3"
                                    rows="3"
                                    value={inputField.msg}
                                    onChange={handleChange}></textarea>

                                <div className="error-container">
                                    <span className="error-message">
                                        Can't be empty
                                    </span>
                                    <div className="error-icon"></div>
                                </div>
                            </div>

                            <button
                                id="submit"
                                type="submit"
                                form="contact-form"
                                className="submit-btn link-btn"
                                onClick={handleSubmit}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <LocationsCards />

                <Footer />
            </main>
        </StyledContactPageContainer>
    );
}

export default Contact;
