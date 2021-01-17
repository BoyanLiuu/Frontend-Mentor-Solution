import { ReactComponent as ArrowDown } from '../misc/img/icon-down.svg';
import { ReactComponent as ArrowUp } from '../misc/img/icon-up.svg';
import Icon from './Icon';

import { StyledMainCardContainer } from '../styles/StyledMainCard';

function MainCard({ name, followers, difference, flag, svgName }) {
    return (
        <StyledMainCardContainer className={svgName} flag={flag}>
            <div className="top-section">
                <Icon svgName={svgName} />
                <span className="name"> {name}</span>
            </div>
            <div className="middle-section">
                <h5 className="number-text"> {followers}</h5>
                <h6 className="sub-text">FOLLOWERS</h6>
            </div>
            <div className="bottom-section">
                {flag ? (
                    <ArrowUp className="direction-icon" />
                ) : (
                    <ArrowDown className="direction-icon" />
                )}

                <span className="direction-text"> {difference} Today</span>
            </div>
        </StyledMainCardContainer>
    );
}

export default MainCard;
