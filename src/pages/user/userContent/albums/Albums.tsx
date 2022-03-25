import React, { FC } from 'react';
import { IAlbum } from './../../../../models/IAlbum';
import FlexBox from './../../../../components/flexBox/FlexBox';
import AlbumItem from './../../../../components/albumItem/AlbumItem';

interface AlbumsProps {
    albums: IAlbum[];
}

const Albums: FC<AlbumsProps> = (props) => {
    return (
        <FlexBox flexWrap='wrap'>
            {props.albums.map(album => <AlbumItem album={album} />)}
        </FlexBox>
    );
};

export default Albums;