
import { IPost } from './../../../models/IPost';

export interface PostsState {
    posts: IPost[];
    isPostsLoading: boolean;
    postsError: string;
}

export enum PostsActionEnum {
    SET_POSTS = "SET_POSTS",
    SET_POSTS_IS_LOADING = "SET_POSTS_IS_LOADING",
    SET_POSTS_ERROR = "SET_POSTS_ERROR",
}

export interface SetErrorAction {
    type: PostsActionEnum.SET_POSTS_ERROR;
    payload: string;
}

export interface SetisLoadingAction {
    type: PostsActionEnum.SET_POSTS_IS_LOADING;
    payload: boolean;
}

export interface SetPostsAction {
    type: PostsActionEnum.SET_POSTS;
    payload: IPost[];
}

export type PostsActions = SetErrorAction | SetisLoadingAction | SetPostsAction;