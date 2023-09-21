import { configureStore } from '@reduxjs/toolkit';
import {
    usersReducers
} from './features';


export const store = configureStore({
    reducer: {
        users: usersReducers,
    }
});

export const appDispatch = store.dispatch;