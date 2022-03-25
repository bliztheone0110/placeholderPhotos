
import { IAlbum } from './../../../models/IAlbum';

export interface AlbumsState {
    albums: IAlbum[];
    isAlbumsLoading: boolean;
    AlbumsError: string;
}

export enum AlbumsActionEnum {
    SET_ALBUMS = "SET_ALBUMS",
    SET_ALBUMS_IS_LOADING = "SET_ALBUMS_IS_LOADING",
    SET_ALBUMS_ERROR = "SET_ALBUMS_ERROR",
}

export interface SetErrorAction {
    type: AlbumsActionEnum.SET_ALBUMS_ERROR;
    payload: string;
}

export interface SetisLoadingAction {
    type: AlbumsActionEnum.SET_ALBUMS_IS_LOADING;
    payload: boolean;
}

export interface SetAlbumsAction {
    type: AlbumsActionEnum.SET_ALBUMS;
    payload: IAlbum[];
}

export type AlbumsActions = SetErrorAction | SetisLoadingAction | SetAlbumsAction;