import React, { FC, useEffect } from 'react';
import { useTypedSelector } from './../../../hooks/useTypedSelector';
import { useActions } from './../../../hooks/useActions';
import UserContent from './UserContent';

interface UserContentContainerProps {
    userId: number;
}

const UserContentContainer: FC<UserContentContainerProps> = (props) => {
    const { getAlbums, setAlbums, getPosts, setPosts } = useActions()
    const { albums, AlbumsError, isAlbumsLoading } = useTypedSelector(state => state.albumsReducer)
    const { posts, postsError, isPostsLoading } = useTypedSelector(state => state.postsReducer)

    useEffect(() => {
        getAlbums(props.userId)
        getPosts(props.userId)

        return () => {
            setAlbums([])
            setPosts([])
        }
    }, [])

    return (
        <UserContent
            albums={albums}
            AlbumsError={AlbumsError}
            isAlbumsLoading={isAlbumsLoading}
            posts={posts}
            postsError={postsError}
            isPostsLoading={isPostsLoading}
        />
    );
};

export default UserContentContainer;