
import Login from './../pages/login/Login';
import UsersContainer from './../pages/users/UsersContainer';
import MainPageContainer from './../pages/main/MainPageContainer';
export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/',
    MAIN = '/',
    USERS = '/users',
    USER = '/users/:id',
}

export const publicRouts: IRoute[] = [
    {path: RouteNames.LOGIN, component: Login},
]

export const privateRouts: IRoute[] = [
    {path: RouteNames.MAIN, component: MainPageContainer},
    {path: RouteNames.USERS, component: UsersContainer},
]