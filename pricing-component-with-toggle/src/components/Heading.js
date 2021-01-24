import styled from 'styled-components';

const HeaderDiv = styled.div`
    width: 23.9rem;
    margin: 6.4rem 5rem 8rem 0;
    text-align: center;
    .title {
        font-size: ${(prop) => prop.theme.mediumFont};
        color: ${(prop) => prop.theme.mainTextColor};
        line-height: 3.9rem;
        margin-bottom: 4rem;
    }
    .toggle-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .change-plan-checkbox {
        appearance: none;
        width: 5.6rem;
        height: 3.2rem;
        background: ${(prop) => prop.theme.gradientColor};
        border-radius: 1.6rem;
        position: relative;
        border: none;
        outline: none;
        cursor: pointer;
    }
    .change-plan-checkbox::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0.4rem;
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 50%;
        background-color: white;
    }

    .change-plan-checkbox:checked::before {
        left: 0.4rem;
    }

    .change-plan-checkbox:checked {
        background: ${(prop) => prop.theme.gradientColor2};
    }
    .toggle-tilte {
        font-size: ${(prop) => prop.theme.xsmallFont};
        color: ${(prop) => prop.theme.toggleTextColor};
    }
`;

const Header = ({ handleToggle }) => {
    const onClick = () => {
        handleToggle();
    };
    return (
        <HeaderDiv>
            <h1 className="title">Our Pricing</h1>
            <div className="toggle-container">
                <span className="toggle-tilte"> Annually</span>
                <input
                    aria-label="change plan toggle"
                    type="checkbox"
                    className="change-plan-checkbox"
                    id="checkbox"
                    onClick={onClick}
                />
                <span className="toggle-tilte">Monthly</span>
            </div>
        </HeaderDiv>
    );
};

export default Header;
