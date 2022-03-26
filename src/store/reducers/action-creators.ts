
import { AuthActionCreators } from './auth/action-creators';
import { UsersActionCreators } from './users/action-creators';
import { PhotosActionCreators } from './photos/action-creators';
import { AlbumsActionCreators } from './albums/action-creators';
import { PostsActionCreators } from './posts/action-creators';

export const allActionCreators = {
    ...AuthActionCreators,
    ...UsersActionCreators,
    ...PhotosActionCreators,
    ...AlbumsActionCreators,
    ...PostsActionCreators,
}