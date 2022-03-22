
import axios from 'axios';
import { AppDispatch } from '../..';
import { IUser } from './../../../models/IUser';
import { AuthActionEnum, SetUserAction, SetAuthAction, SetisLoadingAction, SetErrorAction } from './types'

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
    setIsAuth: (isAuth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: isAuth }),
    setIsUserLoading: (isLoading: boolean): SetisLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload: isLoading }),
    setUserError: (error: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload: error }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsUserLoading(true));
            
            setTimeout(async () => {
                const responce = await axios.get<IUser[]>('./users.json')
                const mockUser = responce.data.find(user => user.username === username && user.password === password)

                if (mockUser) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUser.username)
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(AuthActionCreators.setUser(mockUser))
                } else {
                    dispatch(AuthActionCreators.setUserError('Некорректный логин или пароль'))
                }
            }, 1000)
        } catch {
            dispatch(AuthActionCreators.setUserError('произошла ошибка'));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(AuthActionCreators.setIsAuth(false))
        dispatch(AuthActionCreators.setUser({} as IUser))
    }
}