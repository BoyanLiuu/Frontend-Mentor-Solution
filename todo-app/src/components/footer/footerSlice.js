import { createSlice } from '@reduxjs/toolkit';

export const StatusFilters = {
    All: 'All',
    Active: 'Active',
    Completed: 'Completed',
};

const initialState = {
    status: StatusFilters.All,
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        statusFilterChanged(state, action) {
            state.status = action.payload;
        },
    },
});

export const { statusFilterChanged } = filtersSlice.actions;
// so we can use it in store.js
export default filtersSlice.reducer;
