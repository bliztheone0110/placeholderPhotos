import { PostsActionEnum, PostsState, PostsActions } from './types';
import { IPost } from './../../../models/IPost';

const initialState: PostsState = {
    postsError: '',
    isPostsLoading: false,
    posts: [] as IPost[],
}

export default function postsReducer(state = initialState, action: PostsActions): PostsState {
    switch (action.type) {
        case PostsActionEnum.SET_POSTS_ERROR:
            return { ...state, isPostsLoading: false, postsError: action.payload }
        case PostsActionEnum.SET_POSTS_IS_LOADING:
            return { ...state, isPostsLoading: action.payload }
        case PostsActionEnum.SET_POSTS:
            return { ...state, posts: action.payload }
        default:
            return state
    }
}