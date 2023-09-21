import { createSlice } from '@reduxjs/toolkit';

const name = 'users';

const initialState = {
    isLoading: true,
    data: null,
    error: null,
};

const usersSlice = createSlice({
    name,
    initialState,
    reducers: {
        fetchUsersPending: (state) => {
            state.isLoading = true;
        },
        fetchUsersFulfilled: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        fetchUsersRejected: (state, action) => {
            state.isLoading = false;
            state.data = null;
            state.error = action.payload;
        }
    }
});

export const usersActions = usersSlice.actions;
export const usersReducers = usersSlice.reducer;