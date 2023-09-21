import { Urls } from '../constants';
import { appDispatch } from '../redux';
import { usersActions } from '../redux/features';
import { api } from './api';

export const fetchClasses = async (payload) => {
    appDispatch(usersActions.fetchUsersPending());

    try {
        const response = await api.get(Urls.users);
        return appDispatch(usersActions.fetchUsersFulfilled([
            ...response.data,
        ]));

    } catch (error) {
        return appDispatch(usersActions.fetchUsersRejected(error.message));
    }
};