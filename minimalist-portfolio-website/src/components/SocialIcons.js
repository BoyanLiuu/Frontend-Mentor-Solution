import { ReactComponent as Github } from '../assets/images/icons/github.svg';
import { ReactComponent as Twitter } from '../assets/images/icons/twitter.svg';
import { ReactComponent as LinkedIn } from '../assets/images/icons/linkedin.svg';
const SocialIcons = () => {
    return (
        <div className="social-logos">
            <a href="https://github.com/">
                <Github className="social-logo" />
            </a>

            <a href="https://twitter.com/">
                <Twitter className="social-logo" />
            </a>
            <a href="https://www.linkedin.com/">
                <LinkedIn className="social-logo" />
            </a>
        </div>
    );
};

export default SocialIcons;
