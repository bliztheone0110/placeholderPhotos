
import { IFullUser } from './../../../models/IFullUser';

export interface UsersState {
    users: IFullUser[];
    isUsersLoading: boolean;
    isUsersError: string;
}

export enum UsersActionEnum {
    SET_USERS = "SET_USERS",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_ERROR = "SET_ERROR",
}

export interface SetErrorAction {
    type: UsersActionEnum.SET_ERROR;
    payload: string;
}

export interface SetisLoadingAction {
    type: UsersActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export interface SetUsersAction {
    type: UsersActionEnum.SET_USERS;
    payload: IFullUser[];
}

export type UsersActions = SetErrorAction | SetisLoadingAction | SetUsersAction;