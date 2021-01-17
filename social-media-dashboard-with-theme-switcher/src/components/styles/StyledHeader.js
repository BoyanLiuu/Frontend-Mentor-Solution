import styled from 'styled-components';

export const StyledHeader = styled.div`
    font-weight: 700;
    .title {
        font-size: 2.4rem;
        line-height: 2.9rem;
        color: ${(props) => props.theme.mainText};
    }

    .data-info,
    .dark-mode {
        font-size: 1.4rem;
        line-height: 1.7rem;

        color: ${(props) => props.theme.subText};
        align-self: flex-end;
        margin-right: 1.3rem;
    }
    .break-line {
        margin-bottom: 1.6rem;
        border-top: 1px solid ${(props) => props.theme.hrColor};
    }
    .data-info {
        margin: 0.4rem 0 2.4rem 0;
    }
    .dark-mode-container {
        margin-bottom: 4rem;
        display: flex;
        justify-content: space-between;
    }

    .dark-mode-checkbox {
        width: 4.8rem;
        height: 2.4rem;
        background: ${(props) => props.theme.togglerColor};
        position: relative;
        border-radius: 1.2rem;
        appearance: none;
        cursor: pointer;
        outline: none;
    }
    .dark-mode-checkbox::before {
        content: '';
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        transition: all 0.3s ease;
        cursor: pointer;
        position: absolute;
        background: #fff;
        opacity: 0.9;
        top: 50%;
        right: 0.4rem;
        transform: translateY(-50%);
        background-color: white;
    }
    .dark-mode-checkbox:checked::before {
        right: 2.5rem;
    }

    .dark-mode-checkbox:checked {
        background: ${(props) => props.theme.togglerColor};
    }
    @media screen and (min-width: 1110px) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4rem;
        .title {
            font-size: 2.8rem;
            line-height: 3.4rem;
        }

        .break-line {
            display: none;
        }

        .dark-mode-container {
            margin-bottom: 0;
        }
        .data-info {
            margin-bottom: 0;
        }
    }

    @media screen and (min-width: 1110px) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4rem;
        .title {
            font-size: 2.8rem;
            line-height: 3.4rem;
        }

        .break-line {
            display: none;
        }

        .dark-mode-container {
            height: 100%;
            margin-bottom: 0;
            align-content: center;
        }
        .dark-mode {
            align-self: center;
        }
        .data-info {
            margin-bottom: 0;
        }
    }
`;
