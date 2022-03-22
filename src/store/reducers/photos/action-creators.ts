
import axios from 'axios';
import { AppDispatch } from '../..';
import { PhotosActionEnum, SetErrorAction, SetPhotosAction, SetisLoadingAction } from './types'
import { IPhoto } from './../../../models/IPhoto';

export const PhotosActionCreators = {
    setPhotos: (photos: IPhoto[]): SetPhotosAction => ({ type: PhotosActionEnum.SET_PHOTOS, payload: photos }),
    setIsPhotosLoading: (isLoading: boolean): SetisLoadingAction => ({ type: PhotosActionEnum.SET_PHOTOS_IS_LOADING, payload: isLoading }),
    setPhotosError: (error: string): SetErrorAction => ({ type: PhotosActionEnum.SET_PHOTOS_ERROR, payload: error }),
    getPhotos: (id?: number) => async (dispatch: AppDispatch) => {
        dispatch(PhotosActionCreators.setIsPhotosLoading(true));

        axios.get<IPhoto[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            .then(res => {
                dispatch(PhotosActionCreators.setPhotos(res.data));
            })
            .catch(err => {
                dispatch(PhotosActionCreators.setPhotosError('Ошибка загрузки пользователей'));
            })
            .finally(() => {
                dispatch(PhotosActionCreators.setIsPhotosLoading(false));
            })
    },
}