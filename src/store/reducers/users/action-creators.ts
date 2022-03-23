
import axios from 'axios';
import { AppDispatch } from '../..';
import { SetUsersAction, SetisLoadingAction, SetErrorAction, UsersActionEnum } from './types'
import { IFullUser } from './../../../models/IFullUser';

export const UsersActionCreators = {
    setUsers: (users: IFullUser[]): SetUsersAction => ({ type: UsersActionEnum.SET_USERS, payload: users }),
    setIsUsersLoading: (isUsersLoading: boolean): SetisLoadingAction => ({ type: UsersActionEnum.SET_IS_LOADING, payload: isUsersLoading }),
    setUsersError: (error: string): SetErrorAction => ({ type: UsersActionEnum.SET_ERROR, payload: error }),
    getUsers: (id?: number) => (dispatch: AppDispatch) => {
        dispatch(UsersActionCreators.setIsUsersLoading(true));

        axios.get<IFullUser[]>('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                dispatch(UsersActionCreators.setUsers(res.data));
                dispatch(UsersActionCreators.setIsUsersLoading(false));
            })
            .catch(err => {
                dispatch(UsersActionCreators.setUsersError('Ошибка загрузки пользователей'));
                dispatch(UsersActionCreators.setIsUsersLoading(false));
            })
    },
    getCurrentUser: (id: string) => (dispatch: AppDispatch) => {
        dispatch(UsersActionCreators.setIsUsersLoading(true));

        axios.get<IFullUser[]>(`https://jsonplaceholder.typicode.com/users?id=${id}`)
            .then(res => {
                dispatch(UsersActionCreators.setUsers(res.data));
                dispatch(UsersActionCreators.setIsUsersLoading(false));
            })
            .catch(err => {
                dispatch(UsersActionCreators.setUsersError('Ошибка загрузки пользователя'));
                dispatch(UsersActionCreators.setIsUsersLoading(false));
            })
    }
}