import styled from 'styled-components';
import React, { useState } from 'react';
import TodoListItem from '../todoListItem/TodoListItem';
import Footer from '../footer/Footer';
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
        top: 2.4rem;
        transform: translateY(-50%);
        transition: all 700ms;
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
        transition: all 700ms;
    }
    .task-input::placeholder {
        color: ${(props) => props.theme.toDoInputTextColor};
        font-family: 'Josefin Sans', sans-serif;
        transition: all 700ms;
    }

    ul {
        margin-top: 1.6rem;
        width: 100%;
    }

    li:first-child {
        border-top-right-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
    }
    .footer-section {
        width: 100%;
        min-height: 5.3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;
        box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
        background-color: ${(props) => props.theme.todoBgColor};
        list-style: none;
        font-size: 1.2rem;
        border-bottom-right-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        margin-bottom: 1.6rem;
        transition: all 700ms;

        .itemInfor {
            color: ${(props) => props.theme.toDoSubColor};
            transition: all 700ms;
        }

        .clear-all-btn {
            font-size: 1.2rem;
            font-family: 'Josefin Sans', sans-serif;
            border: none;
            outline: none;
            cursor: pointer;
            background: transparent;
            color: ${(props) => props.theme.toDoSubColor};
            transition: all 700ms;
        }
    }
`;

const TodoList = () => {
    let a = `Complete online JavaScript courseComplete online JavaScript courseComplete online JavaScript courseComplete online JavaScript courseComplete online JavaScript courseComplete online JavaScript `;
    //hooks
    const [text, setText] = useState('');
    //event listener
    const handleClearComplete = () => {
        console.log('clear all completed ');
    };

    const handleChange = (e) => setText(e.target.value);

    const handleKeyDown = async (e) => {
        // If the user pressed the Enter key:
        const trimmedText = text.trim();
        if (e.which === 13 && trimmedText) {
            console.log(trimmedText);
            // And clear out the text input
            setText('');
        }
    };

    return (
        <TodoListContainer>
            <input
                className=" task-input"
                aria-label="Create a new todo..."
                type="text"
                value={text}
                placeholder="Create a new todo..."
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <ul>
                <TodoListItem textDescription="Complete online JavaScript course" />
                <TodoListItem textDescription="Complete online JavaScript course" />
                <TodoListItem textDescription="Complete online JavaScript course" />
                <TodoListItem textDescription="Complete online JavaScript course" />
                <TodoListItem textDescription="Complete online JavaScript course" />
                <TodoListItem textDescription="Complete online JavaScript course" />
                <li className="footer-section">
                    <span className="itemInfor">5 items left</span>
                    <button
                        aria-label="Clear Completed"
                        className="clear-all-btn"
                        onClick={handleClearComplete}>
                        Clear Completed
                    </button>
                </li>
            </ul>
            <Footer />
        </TodoListContainer>
    );
};

export default TodoList;
