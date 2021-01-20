import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './components/todoList/todosSlice';
import filtersReducer from './components/footer/footerSlice';

const store = configureStore({
    reducer: {
        todos: todosReducer,
        filters: filtersReducer,
    },
});

export default store;
