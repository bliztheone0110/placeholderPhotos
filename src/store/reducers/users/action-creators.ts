
import axios from 'axios';
import { AppDispatch } from '../..';
import { SetUsersAction, SetisLoadingAction, SetErrorAction, UsersActionEnum } from './types'
import { IFullUser } from './../../../models/IFullUser';

export const UsersActionCreators = {
    setUsers: (users: IFullUser[]): SetUsersAction => ({ type: UsersActionEnum.SET_USERS, payload: users }),
    setIsUsersLoading: (isUsersLoading: boolean): SetisLoadingAction => ({ type: UsersActionEnum.SET_IS_LOADING, payload: isUsersLoading }),
    setUsersError: (error: string): SetErrorAction => ({ type: UsersActionEnum.SET_ERROR, payload: error }),
    getUsers: (id?: number) => async (dispatch: AppDispatch) => {
        dispatch(UsersActionCreators.setIsUsersLoading(true));
        let currentQuerryUrl = id ? `https://jsonplaceholder.typicode.com/users?id=${id}` : 'https://jsonplaceholder.typicode.com/users';

        axios.get<IFullUser[]>(currentQuerryUrl)
            .then(res => {
                dispatch(UsersActionCreators.setUsers(res.data));
                dispatch(UsersActionCreators.setIsUsersLoading(false));
            })
            .catch(err => {
                dispatch(UsersActionCreators.setUsersError('Ошибка загрузки пользователей'));
                dispatch(UsersActionCreators.setIsUsersLoading(false));
            })
    },
}