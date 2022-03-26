
import { IPhoto } from './../../../models/IPhoto';

export interface PhotosState {
    photos: IPhoto[];
    isPhotosLoading: boolean;
    photosError: string;
}

export enum PhotosActionEnum {
    SET_PHOTOS = "SET_PHOTOS",
    SET_PHOTOS_IS_LOADING = "SET_PHOTOS_IS_LOADING",
    SET_PHOTOS_ERROR = "SET_PHOTOS_ERROR",
}

export interface SetErrorAction {
    type: PhotosActionEnum.SET_PHOTOS_ERROR;
    payload: string;
}

export interface SetisLoadingAction {
    type: PhotosActionEnum.SET_PHOTOS_IS_LOADING;
    payload: boolean;
}

export interface SetPhotosAction {
    type: PhotosActionEnum.SET_PHOTOS;
    payload: IPhoto[];
}

export type PhotosActions = SetErrorAction | SetisLoadingAction | SetPhotosAction;