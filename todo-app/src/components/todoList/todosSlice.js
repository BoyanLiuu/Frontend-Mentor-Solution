import { createSlice, createSelector } from '@reduxjs/toolkit';
import { StatusFilters } from '../footer/footerSlice';

const initialState = {
    entities: {},
    maxId: 0,
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded(state, action) {
            const todo = action.payload;
            const curObj = {
                text: todo,
                completed: false,
                id: state.maxId + 1,
            };
            state.entities[state.maxId + 1] = curObj;
            state.maxId++;
        },
        todoToggled(state, action) {
            const todoId = action.payload;
            const todo = state.entities[todoId];
            todo.completed = !todo.completed;
        },
        todoDeleted(state, action) {
            delete state.entities[action.payload];
        },
        completedTodosCleared(state) {
            Object.values(state.entities).forEach((todo) => {
                if (todo.completed) {
                    delete state.entities[todo.id];
                }
            });
        },
        //load  pre-defined task in store.js
        todosLoaded(state, action) {
            const newEntities = {};
            let length = action.payload.length - 1;
            action.payload.forEach((todo) => {
                newEntities[todo.id] = todo;
            });
            state.entities = newEntities;
            state.maxId = length;
        },
    },
});

export const {
    completedTodosCleared,
    todoAdded,
    todoDeleted,
    todoToggled,
    todosLoaded,
} = todosSlice.actions;

export default todosSlice.reducer;

//basic selector to get all the task object from store
const selectTodoEntities = (state) => state.todos.entities;

export const selectTodoById = (state, todoId) => {
    return selectTodoEntities(state)[todoId];
};

//Memorizing Selectors with createSelector
export const selectTodos = createSelector(selectTodoEntities, (entities) =>
    Object.values(entities)
);
//get all task id
export const selectTodoIds = createSelector(
    // First, pass one or more "input selector" functions:
    selectTodos,
    // Then, an "output selector" that receives all the input results as arguments
    // and returns a final result value
    (todos) => todos.map((todo) => todo.id)
);

// filter out task based on filter state
export const selectFilteredTodos = createSelector(
    // First input selector: all todos
    selectTodos,
    // Second input selector: all filter values, represent current filter state
    (state) => state.filters,
    // Output selector: receives both values
    (todos, filters) => {
        const { status } = filters;
        const showAllCompletions = status === StatusFilters.All;
        //return all todos
        if (showAllCompletions) {
            return todos;
        }
        // true: completed, false: active
        const completedStatus = status === StatusFilters.Completed;
        // Return either active or completed todos based on filter
        return todos.filter((todo) => todo.completed === completedStatus);
    }
);

export const selectFilteredTodoIds = createSelector(
    // Pass our other memoized selector as an input
    selectFilteredTodos,
    // take previous as input And derive data in the output selector
    (filteredTodos) => filteredTodos.map((todo) => todo.id)
);
