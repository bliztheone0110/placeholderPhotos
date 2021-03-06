
import { UsersActionEnum, UsersActions, UsersState } from './types';
import { IFullUser } from './../../../models/IFullUser';

const initialState: UsersState = {
    usersError: '',
    isUsersLoading: false,
    users: [] as IFullUser[],
}

export default function usersReducer(state = initialState, action: UsersActions): UsersState {
    switch (action.type) {
        case UsersActionEnum.SET_ERROR:
            return { ...state, isUsersLoading: false, usersError: action.payload }
        case UsersActionEnum.SET_IS_LOADING:
            return { ...state, isUsersLoading: action.payload }
        case UsersActionEnum.SET_USERS:
            return { ...state, users: action.payload}
        default:
            return state
    }
}