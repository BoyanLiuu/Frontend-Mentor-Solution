import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './components/todoList/todosSlice';
import filtersReducer from './components/footer/footerSlice';
import { todosLoaded } from './components/todoList/todosSlice';

const pre_defined_tasks = [
    {
        text: 'Complete online JavaScript course',
        completed: true,
        id: 0,
    },
    {
        text: 'Jog around the park 3x',
        completed: false,
        id: 1,
    },
    {
        text: '10 minutes meditation',
        completed: false,
        id: 2,
    },
    {
        text: 'Read for 1 hour',
        completed: false,
        id: 3,
    },
    {
        text: 'Pick up groceries',
        completed: false,
        id: 4,
    },
    {
        text: 'Complete Todo App on Frontend Mentor',
        completed: false,
        id: 5,
    },
];

const store = configureStore({
    reducer: {
        todos: todosReducer,
        filters: filtersReducer,
    },
});

// localStorage.setItem('tech', 'JavaScript');
// let techStack = localStorage.getItem('tech');
// console.log(techStack);
store.dispatch(todosLoaded(pre_defined_tasks));
export default store;
