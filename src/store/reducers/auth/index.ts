
import { AuthActionEnum, AuthActions, AuthState } from './types';
import { IUser } from './../../../models/IUser';

const initialState: AuthState = {
    isAuth: false,
    error: '',
    isLoading: false,
    user: {} as IUser,
}

export default function authReducer(state = initialState, action: AuthActions): AuthState {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return { ...state, isAuth: action.payload, isLoading: false }
        case AuthActionEnum.SET_ERROR:
            return { ...state, isLoading: false, error: action.payload }
        case AuthActionEnum.SET_IS_AUTH_LOADING:
            return { ...state, isLoading: action.payload }
        case AuthActionEnum.SET_USER:
            return { ...state, isLoading: false, user: action.payload }
        default:
            return state
    }
}