import { AlbumsActionEnum, AlbumsState, AlbumsActions } from './types';
import { IAlbum } from './../../../models/IAlbum';

const initialState: AlbumsState = {
    AlbumsError: '',
    isAlbumsLoading: false,
    albums: [] as IAlbum[],
}

export default function albumsReducer(state = initialState, action: AlbumsActions): AlbumsState {
    switch (action.type) {
        case AlbumsActionEnum.SET_ALBUMS_ERROR:
            return { ...state, isAlbumsLoading: false, AlbumsError: action.payload }
        case AlbumsActionEnum.SET_ALBUMS_IS_LOADING:
            return { ...state, isAlbumsLoading: action.payload }
        case AlbumsActionEnum.SET_ALBUMS:
            return { ...state, albums: action.payload }
        default:
            return state
    }
}