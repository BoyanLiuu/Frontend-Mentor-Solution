import React, { useEffect, useState } from 'react';
import SocialIcons from '../components/SocialIcons';
function Contact() {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // });
    const [inputField, setinputField] = useState({
        name: '',
        email: '',
        msg: '',
    });

    useEffect(() => {
        //remove footer card
        const footerCard = document.getElementsByClassName(
            'footer-container__contact-section'
        );
        footerCard[0].style.display = 'none';
        //clean up after unmount
        return () => (footerCard[0].style.display = 'flex');
    }, []);

    const handleChange = (e) => {
        const target = e.target.name;
        console.log(target);
        const newObj = { ...inputField };
        newObj[target] = e.target.value;
        setinputField(newObj);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let error = document.getElementsByClassName(
            'contact-contaier__input-error-message'
        );
        let input = document.getElementsByClassName(
            'contact-contaier__input-field'
        );
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let i = 0;
        let flag = [false, false, false];
        console.log(input);
        for (let field in inputField) {
            if (inputField[field] === '') {
                error[i].style.display = 'block';
                input[i].classList.add('flag');
                flag[i] = true;
            }
            if (i === 1 && !re.test(inputField[field])) {
                error[i].style.display = 'block';
                input[i].classList.add('flag');
                flag[i] = true;
            }
            i++;
        }
        for (let i in flag) {
            if (flag[i] === false) {
                error[i].style.display = 'none';
                input[i].classList.remove('flag');
            }
        }
    };
    return (
        <div className="contact-contaier">
            <div className="contact-contaier__get-in-touch">
                <h1>Get in Touch</h1>
                <p>
                    I’d love to hear about what you’re working on and how I
                    could help. I’m currently looking for a new role and am open
                    to a wide range of opportunities. My preference would be to
                    find a position in a company in London. But I’m also happy
                    to hear about opportunites that don’t fit that description.
                    I’m a hard-working and positive person who will always
                    approach each task with a sense of purpose and attention to
                    detail. Please do feel free to check out my online profiles
                    below and get in touch using the form.
                </p>
                <SocialIcons />
            </div>

            <div className="contact-contaier__form">
                <h1> Contact Me</h1>

                <form id="contact-contaier__form">
                    <div className="contact-contaier__input-container">
                        <label className="contact-contaier__input-label">
                            Name
                        </label>
                        <input
                            aria-label="Name"
                            type="text"
                            name="name"
                            id="Name"
                            placeholder="Jane Appleseed"
                            className="contact-contaier__input-field"
                            value={inputField.name}
                            onChange={handleChange}
                        />
                        <span className="contact-contaier__input-error-message">
                            This field is require
                        </span>
                    </div>

                    <div className="contact-contaier__input-container">
                        <label className="contact-contaier__input-label">
                            Email Address
                        </label>
                        <input
                            aria-label="email"
                            type="email"
                            name="email"
                            id="email"
                            className="contact-contaier__input-field"
                            placeholder="email@example.com"
                            value={inputField.email}
                            onChange={handleChange}
                        />
                        <span className="contact-contaier__input-error-message">
                            This field is require
                        </span>
                    </div>
                    <div className="contact-contaier__input-container">
                        <label className="contact-contaier__input-label">
                            Message
                        </label>
                        <textarea
                            placeholder="How can I help?"
                            name="msg"
                            id="msg"
                            className="contact-contaier__input-field"
                            value={inputField.msg}
                            onChange={handleChange}></textarea>

                        <span className="contact-contaier__input-error-message">
                            This field is require
                        </span>
                    </div>

                    <button
                        id="submit"
                        type="submit"
                        form="contact-form"
                        className="contact-contaier__btn"
                        onClick={handleSubmit}>
                        SEND Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
