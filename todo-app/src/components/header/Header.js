import styled from 'styled-components';

const HeaderDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3.9rem;

    .title {
        font-size: 3rem;
        text-transform: uppercase;
        letter-spacing: 1rem;
        color: white;
    }
    .switch-theme-logo {
        width: 2.5rem;
        height: 2.5rem;
        background-image: ${(props) => `url(${props.src})`};
        background-size: cover;
    }
`;

const Header = ({ name }) => {
    const logo = require(`../../assets/img/${name}.svg`).default;
    return (
        <HeaderDiv src={logo}>
            <h1 className="title">Todo</h1>
            <div className="switch-theme-logo"></div>
        </HeaderDiv>
    );
};

export default Header;
