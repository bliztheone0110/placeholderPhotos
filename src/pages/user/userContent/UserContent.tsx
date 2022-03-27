import React, { FC } from 'react';
import Container from '../../../components/containers/container/Container';
import AlbumsSection from './albums/Albums';
import { IAlbum } from './../../../models/IAlbum';
import { IPost } from './../../../models/IPost';
import PostsContainer from './posts/PostsContainer';

interface UserContentProps {
    albums: IAlbum[];
    AlbumsError: string;
    isAlbumsLoading: boolean;
    posts: IPost[];
    postsError: string;
    isPostsLoading: boolean;
}

const UserContent: FC<UserContentProps> = (props) => {
    return (
        <Container>
            <AlbumsSection AlbumsError={props.AlbumsError} albums={props.albums} />
            <PostsContainer postsError={props.postsError} posts={props.posts} itemsPerScreen={10}/>
        </Container>
    );
};

export default UserContent;