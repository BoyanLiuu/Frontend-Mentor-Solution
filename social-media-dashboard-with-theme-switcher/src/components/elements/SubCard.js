import { ReactComponent as ArrowDown } from '../misc/img/icon-down.svg';
import { ReactComponent as ArrowUp } from '../misc/img/icon-up.svg';
import Icon from './Icon';

import { StyledSubCardContainer } from '../styles/StyledSubCard';

function SubCard({ title, number, difference, flag, svgName }) {
    return (
        <StyledSubCardContainer flag={flag}>
            <div className="top-section">
                <span className="title"> {title}</span>
                <Icon svgName={svgName} />
            </div>
            <div className="bottom-section">
                <span className="number">{number}</span>
                <div className="differnce-container">
                    {flag ? (
                        <ArrowUp className="direction-icon" />
                    ) : (
                        <ArrowDown className="direction-icon" />
                    )}
                    <span className="direction-text"> {difference}%</span>
                </div>
            </div>
        </StyledSubCardContainer>
    );
}

export default SubCard;
