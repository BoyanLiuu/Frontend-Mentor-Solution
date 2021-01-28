import styled from 'styled-components';
import desktopImg from '../assets/img/image-computer.png';
import deviceImg from '../assets/img/image-devices.png';

import listImg from '../assets/img/icon-blacklist.svg';
import textImg from '../assets/img/icon-text.svg';
import previewImg from '../assets/img/icon-preview.svg';

import googleLogo from '../assets/img/logo-google.png';
import ibmLogo from '../assets/img/logo-ibm.png';
import microsoftLogo from '../assets/img/logo-microsoft.png';
import hpLogo from '../assets/img/logo-hp.png';
import vectorLogo from '../assets/img/logo-vector-graphics.png';
const InfoDiv = styled.div`
    margin-top: 16rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .inner-div {
        width: 31.1rem;
    }
    .func-container {
        margin-bottom: 18.6rem;
    }
    .demo-img {
        width: 100%;
        margin-top: 6.5rem;
        margin-bottom: 5.6rem;
    }
    .additional-margin {
        margin-top: 7.4rem;
    }

    .main-title.large {
        font-size: 2.8rem;
        color: hsl(210, 10%, 33%);
        line-height: 3.7rem;
        font-weight: 400;
        margin-bottom: 1.2rem;
    }
    .content {
        width: 31.1rem;
        margin: 0 auto;
        font-size: 1.6rem;
        color: hsl(201, 11%, 66%);
        line-height: 2.6rem;
        font-weight: 400;
    }

    .func-content-container .main-title {
        font-size: 2.4rem;
        line-height: 3.2rem;
        color: hsl(210, 10%, 33%);
        font-weight: 400;
    }
    .func-content-container {
        height: 39.8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .product-benefits-container {
        margin-bottom: 13.1rem;
    }
    .product-benefits-container .main-title,
    .download-container .main-title {
        font-size: 2.8rem;
        line-height: 3.7rem;
        color: hsl(210, 10%, 33%);
        font-weight: 400;
    }
    .additional-benefits-container {
        margin-top: 9rem;
        height: 67.1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .additional-benefits-container-section .main-title {
        font-size: 2.4rem;
        line-height: 3.2rem;
        margin-bottom: 1.6rem;
    }
    .logo {
        margin-bottom: 4rem;
    }
    .company-logo-container {
        width: 13.9rem;
        height: 43.9rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 auto 17rem auto;
    }
    .download-container .main-title {
        margin-bottom: 1.2rem;
    }
    .download-container .content {
        margin-bottom: 4.6rem;
    }
    .download-container {
        margin-bottom: 17rem;
    }

    @media screen and (min-width: 700px) and (max-width: 1100px) {
        .inner-div {
            width: 100%;
            padding: 0 3rem;
        }
        .content {
            width: 100%;
        }
    }

    @media screen and (min-width: 1100px) {
        .inner-div {
            width: 110rem;
            padding: 0;
        }
        .content.desktop {
            width: 73rem;
            margin: 0 auto;
        }

        .func-container {
            max-width: 124.4rem;
            margin-left: -3.2rem;
            margin-top: 8rem;
            margin-bottom: 15rem;
            display: flex;
            padding-right: auto;
            align-self: flex-start;
        }
        .func-container .demo-img {
            margin: 0;
        }
        .func-content-container {
            margin: 6.8rem 0 0 11rem;
        }
        .additional-benefits-container {
            flex-direction: row;
            height: auto;
        }
        .additional-benefits-container-section {
            height: 21.6rem;
        }
        .company-logo-container {
            flex-direction: row;
            height: auto;
            width: 100%;
        }

        .download-container .content {
            margin-bottom: 4.6rem;
        }
        .company-logo:last-child {
            height: 3rem;
        }
        .company-logo:nth-child(3) {
            height: 4.8rem;
        }
    }
`;

const InfoSection = () => {
    return (
        <InfoDiv>
            <h1 className="main-title large">Keep track of your snippets</h1>
            <h3 className="content desktop">
                Clipboard instantly stores any item you copy in the cloud,
                meaning you can access your snippets immediately on all your
                devices. Our Mac and iOS apps will help you organize everything.
            </h3>
            <div className="func-container">
                <img src={desktopImg} alt="computer" className="demo-img" />
                <div className="func-content-container">
                    <div className="func-content-container-section">
                        <h1 className="main-title"> Quick Search</h1>
                        <h3 className="content">
                            Easily search your snippets by content, category,
                            web address, application, and more.
                        </h3>
                    </div>

                    <div className="func-content-container-section">
                        <h1 className="main-title"> iCloud Sync</h1>
                        <h3 className="content">
                            Instantly saves and syncs snippets across all your
                            devices.
                        </h3>
                    </div>
                    <div className="func-content-container-section">
                        <h1 className="main-title"> Complete History</h1>
                        <h3 className="content">
                            Retrieve any snippets from the first moment you
                            started using the app.
                        </h3>
                    </div>
                </div>
            </div>
            <div className="inner-div">
                <div className="product-benefits-container">
                    <h1 className="main-title">Access Clipboard Anywhere</h1>
                    <h3 className="content desktop">
                        Whether you’re on the go, or at your computer, you can
                        access all your Clipboard snippets in a few simple
                        clicks.
                    </h3>
                    <img src={deviceImg} alt="devices" className="demo-img" />

                    <h1 className="main-title additional-margin">
                        Supercharge your workflow
                    </h1>
                    <h3 className="content ">
                        We’ve got the tools to boost your productivity.
                    </h3>
                    <div className="additional-benefits-container">
                        <div className="additional-benefits-container-section">
                            <img
                                src={listImg}
                                alt="blacklist"
                                className="logo"
                            />
                            <h1 className="main-title ">Create blacklists</h1>
                            <h3 className="content">
                                Ensure sensitive information never makes its way
                                to your clipboard by excluding certain sources.
                            </h3>
                        </div>
                        <div className="additional-benefits-container-section">
                            <img src={textImg} alt="text" className="logo" />
                            <h1 className="main-title ">Plain text snippets</h1>
                            <h3 className="content">
                                Remove unwanted formatting from copied text for
                                a consistent look.
                            </h3>
                        </div>
                        <div className="additional-benefits-container-section">
                            <img
                                src={previewImg}
                                alt="preview"
                                className="logo"
                            />
                            <h1 className="main-title ">Sneak preview</h1>
                            <h3 className="content">
                                Quick preview of all snippets on your Clipboard
                                for easy access.
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="company-logo-container">
                    <img
                        src={googleLogo}
                        alt="google"
                        className="company-logo"
                    />
                    <img src={ibmLogo} alt="ibm" className="company-logo" />
                    <img
                        src={microsoftLogo}
                        alt="microsoft"
                        className="company-logo"
                    />
                    <img src={hpLogo} alt="hp" className="company-logo" />
                    <img
                        src={vectorLogo}
                        alt="vector graphics"
                        className="company-logo"
                    />
                </div>

                <div className="download-container">
                    <h1 className="main-title">Clipboard for iOS and Mac OS</h1>
                    <h3 className="content desktop">
                        Available for free on the App Store. Download for Mac or
                        iOS, sync with iCloud and you’re ready to start adding
                        to your clipboard.
                    </h3>

                    <div className="download-btn-container">
                        <button className="ios-btn"> Download for iOS</button>
                        <button className="mac-btn"> Download for Mac</button>
                    </div>
                </div>
            </div>
        </InfoDiv>
    );
};

export default InfoSection;
