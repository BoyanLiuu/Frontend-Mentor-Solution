import styled from 'styled-components';
import TodoListItem, { StyledTodoListItem } from '../todoListItem/TodoListItem';

const TodoListContainer = styled.div`
    position: relative;
    ::before {
        content: '';
        position: absolute;
        z-index: 1;

        width: 2rem;
        height: 2rem;
        border: 1px solid ${(props) => props.theme.circleBorderColor};
        border-radius: 50%;
        left: 2rem;
        top: 50%;
        transform: translateY(-50%);
    }
    .task-input {
        position: relative;
        width: 100%;
        height: 4.8rem;
        outline: none;
        border: none;
        border-radius: 0.5rem;

        padding-left: 5.1rem;

        color: ${(props) => props.theme.toDoInputTextColor};
        background-color: ${(props) => props.theme.todoBgColor};
        font-size: 1.2rem;
        letter-spacing: -0.167px;
    }
    .task-input::placeholder {
        color: ${(props) => props.theme.toDoInputTextColor};
        font-family: 'Josefin Sans', sans-serif;
    }

    ul {
        position: absolute;
        top: 6.4rem;
        width: 100%;
    }
`;

//       <TodoListItem />
const TodoList = () => {
    let a = `Complete online JavaScript courseComplete online JavaScript courseComplete online JavaScript courseComplete online JavaScript courseComplete online JavaScript courseComplete online JavaScript `;
    return (
        <TodoListContainer>
            <input
                className=" task-input"
                aria-label="Create a new todo..."
                type="text"
                placeholder="Create a new todo..."
            />
            <ul>
                <TodoListItem textDescription="Complete online JavaScript course" />
                <TodoListItem textDescription="Complete online JavaScript course" />
                <TodoListItem textDescription="Complete online JavaScript course" />
                <TodoListItem textDescription="Complete online JavaScript course" />
                <TodoListItem textDescription="Complete online JavaScript course" />
                <TodoListItem textDescription="Complete online JavaScript course" />
            </ul>
        </TodoListContainer>
    );
};

export default TodoList;
