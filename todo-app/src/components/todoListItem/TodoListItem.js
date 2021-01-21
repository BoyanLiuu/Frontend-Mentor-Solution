import styled from 'styled-components';
import crossIcon from '../../assets/img/icon-cross.svg';
import checkIcon from '../../assets/img/icon-check.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
    todoDeleted,
    todoToggled,
    selectTodoById,
} from '../todoList/todosSlice';

export const StyledTodoListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 0 2rem;

    width: 100%;
    min-height: 5.3rem;
    border-bottom: 1px solid ${(props) => props.theme.circleBorderColor};
    background-color: ${(props) => props.theme.todoBgColor};
    list-style: none;
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
    transition: all 700ms;
    cursor: pointer;
    :hover .remove-btn {
        opacity: 1;
        transition: opacity 0.5s ease-in;
    }

    :hover .complete-btn {
        border-color: ${(props) => props.theme.checkBtnColor};
        transition: all 700ms;
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
        transition: all 700ms;
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
        transition: all 700ms;
        border-radius: 50%;
    }
    .complete-btn:checked {
        background: url(${checkIcon}), ${(props) => props.theme.checkBtnColor};
        background-repeat: no-repeat;
        background-position: 50%;
        transition: none !important;
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

const TodoListItem = ({ id }) => {
    const dispatch = useDispatch();
    const todo = useSelector((state) => selectTodoById(state, id));
    const { text, completed } = todo;

    //event listener
    const handleCompletedChanged = () => {
        dispatch(todoToggled(todo.id));
    };
    const onDelete = () => {
        dispatch(todoDeleted(todo.id));
    };
    return (
        <StyledTodoListItem>
            <div className="segment-label">
                <input
                    className="complete-btn"
                    type="checkbox"
                    checked={completed}
                    aria-label="checkbox"
                    onChange={handleCompletedChanged}
                />
                <span className="text-description">{text}</span>
            </div>

            <div className="remove-btn" onClick={onDelete}></div>
        </StyledTodoListItem>
    );
};

export default TodoListItem;
