
import axios from 'axios';
import { AppDispatch } from '../..';
import { PostsActionEnum, SetErrorAction, SetPostsAction, SetisLoadingAction } from './types'
import { IPost } from './../../../models/IPost';

export const PostsActionCreators = {
    setPosts: (posts: IPost[]): SetPostsAction => ({ type: PostsActionEnum.SET_POSTS, payload: posts }),
    setIsPostsLoading: (isLoading: boolean): SetisLoadingAction => ({ type: PostsActionEnum.SET_POSTS_IS_LOADING, payload: isLoading }),
    setPostsError: (error: string): SetErrorAction => ({ type: PostsActionEnum.SET_POSTS_ERROR, payload: error }),
    getPosts: (id?: number) => async (dispatch: AppDispatch) => {
        dispatch(PostsActionCreators.setIsPostsLoading(true));

        axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userUd=${id}`)
            .then(res => {
                dispatch(PostsActionCreators.setPosts(res.data));
            })
            .catch(err => {
                dispatch(PostsActionCreators.setPostsError('Ошибка загрузки постов'));
            })
            .finally(() => {
                dispatch(PostsActionCreators.setIsPostsLoading(false));
            })
    },
}