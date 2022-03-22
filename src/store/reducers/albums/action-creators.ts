
import axios from 'axios';
import { AppDispatch } from '../..';
import { AlbumsActionEnum, SetAlbumsAction, SetErrorAction, SetisLoadingAction } from './types'
import { IAlbum } from './../../../models/IAlbum';

export const AlbumsActionCreators = {
    setAlbums: (photos: IAlbum[]): SetAlbumsAction => ({ type: AlbumsActionEnum.SET_ALBUMS, payload: photos }),
    setIsAlbumsLoading: (isLoading: boolean): SetisLoadingAction => ({ type: AlbumsActionEnum.SET_ALBUMS_IS_LOADING, payload: isLoading }),
    setAlbumsError: (error: string): SetErrorAction => ({ type: AlbumsActionEnum.SET_ALBUMS_ERROR, payload: error }),
    getAlbums: (id?: number) => async (dispatch: AppDispatch) => {
        dispatch(AlbumsActionCreators.setIsAlbumsLoading(true));

        axios.get<IAlbum[]>(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
            .then(res => {
                dispatch(AlbumsActionCreators.setAlbums(res.data));
            })
            .catch(err => {
                dispatch(AlbumsActionCreators.setAlbumsError('Ошибка загрузки альбомов пользователя'));
            })
            .finally(() => {
                dispatch(AlbumsActionCreators.setIsAlbumsLoading(false));
            })
    },
}