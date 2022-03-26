import { PhotosActionEnum, PhotosState, PhotosActions } from './types';
import { IPhoto } from './../../../models/IPhoto';

const initialState: PhotosState = {
    photosError: '',
    isPhotosLoading: false,
    photos: [] as IPhoto[],
}

export default function photosReducer(state = initialState, action: PhotosActions): PhotosState {
    switch (action.type) {
        case PhotosActionEnum.SET_PHOTOS_ERROR:
            return { ...state, isPhotosLoading: false, photosError: action.payload }
        case PhotosActionEnum.SET_PHOTOS_IS_LOADING:
            return { ...state, isPhotosLoading: action.payload }
        case PhotosActionEnum.SET_PHOTOS:
            return { ...state, photos: action.payload }
        default:
            return state
    }
}