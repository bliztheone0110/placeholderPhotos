
import Login from './../pages/login/Login';
import UsersContainer from './../pages/users/UsersContainer';
import MainPageContainer from './../pages/main/MainPageContainer';
import UserContainer from './../pages/user/UserContainer';
import AlbumContainer from './../pages/album/AlbumContainer';
export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/',
    MAIN = '/',
    USERS = '/users',
    USER = '/user/:id',
    ALBUM = '/album/:id',
}

export const publicRouts: IRoute[] = [
    {path: RouteNames.LOGIN, component: Login},
]

export const privateRouts: IRoute[] = [
    {path: RouteNames.MAIN, component: MainPageContainer},
    {path: RouteNames.USERS, component: UsersContainer},
    {path: RouteNames.USER, component: UserContainer},
    {path: RouteNames.ALBUM, component: AlbumContainer},
]