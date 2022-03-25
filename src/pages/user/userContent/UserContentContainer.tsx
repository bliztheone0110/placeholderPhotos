import React, { FC, useEffect } from 'react';
import albumsReducer from './../../../store/reducers/albums/index';
import { useTypedSelector } from './../../../hooks/useTypedSelector';
import { useActions } from './../../../hooks/useActions';
import Albums from './albums/Albums';
import { Spin } from 'antd';

interface UserContentContainerProps {
    userId: number;
}

const UserContentContainer: FC<UserContentContainerProps> = (props) => {
    const { getAlbums, setAlbums } = useActions()
    const { albums, AlbumsError, isAlbumsLoading } = useTypedSelector(state => state.albumsReducer)

    useEffect(() => {
        getAlbums(props.userId)

        return () => { setAlbums([]) }
    }, [])

    return (
        <Spin spinning={isAlbumsLoading && albums.length === 0}>
            {AlbumsError.length > 0 && <h1>{AlbumsError}</h1>}
            {albums.length !== 0 ? <Albums albums={albums} /> : ''}
        </Spin>
    );
};

export default UserContentContainer;