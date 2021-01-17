import { StyledHeader } from '../styles/StyledHeader';
function Header({ toggle }) {
    return (
        <StyledHeader>
            <div className="info-container">
                <h1 className="title">Social Media DashBoard</h1>
                <h2 className="data-info">Total Followers: 23,004</h2>
            </div>

            <hr className="break-line"></hr>
            <div className="dark-mode-container">
                <span className="dark-mode"> Dark Mode </span>
                <span className="toggle">
                    <input
                        aria-label="dark mode toggle"
                        type="checkbox"
                        className="dark-mode-checkbox"
                        id="checkbox"
                        onClick={() => toggle()}
                    />
                </span>
            </div>
        </StyledHeader>
    );
}

export default Header;
