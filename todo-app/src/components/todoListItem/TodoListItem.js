import styled from 'styled-components';
import crossIcon from '../../assets/img/icon-cross.svg';
import checkIcon from '../../assets/img/icon-check.svg';
export const StyledTodoListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 0 2rem;

    width: 100%;
    min-height: 5.3rem;
    border: 1px solid ${(props) => props.theme.circleBorderColor};
    background-color: ${(props) => props.theme.todoBgColor};
    list-style: none;
    cursor: pointer;
    :hover .remove-btn {
        opacity: 1;
        transition: opacity 0.5s ease-in;
    }

    :hover .complete-btn {
        border-color: ${(props) => props.theme.checkBtnColor};
    }
    .segment-label {
        display: flex;
        flex-grow: 2;
    }
    .text-description {
        display: inline-block;
        font-size: 1.2rem;
        line-height: 1.2rem;
        color: ${(props) => props.theme.toDoActiveColor};
        align-self: center;
    }
    .remove-btn,
    .complete-btn {
        cursor: pointer;
        outline: none;
    }
    .complete-btn {
        margin-right: 1.6rem;
        appearance: none;

        width: 2rem;
        height: 2rem;
        border: 1px solid ${(props) => props.theme.circleBorderColor};
        border-radius: 50%;
    }
    .complete-btn:checked {
        background: url(${checkIcon}), ${(props) => props.theme.checkBtnColor};
        background-repeat: no-repeat;
        background-position: 50%;
    }

    .complete-btn:checked + .text-description {
        text-decoration: line-through;
        color: ${(props) => props.theme.toDoinActiveColor};
    }

    .remove-btn {
        width: 1.2rem;
        height: 1.2rem;
        background-image: url(${crossIcon});
        background-size: cover;
        opacity: 0;
    }
`;

const TodoListItem = ({ textDescription }) => {
    return (
        <StyledTodoListItem>
            <div className="segment-label">
                <input
                    className="complete-btn"
                    type="checkbox"
                    aria-label="checkbox"
                />
                <span className="text-description">{textDescription}</span>
            </div>

            <div className="remove-btn"> </div>
        </StyledTodoListItem>
    );
};

export default TodoListItem;
