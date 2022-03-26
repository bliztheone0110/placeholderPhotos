import React, { FC } from 'react';
import c from './albumItem.module.css'
import { IAlbum } from './../../models/IAlbum';
import { Link } from 'react-router-dom';

interface AlbumItemProps {
    album: IAlbum;
}

const AlbumItem: FC<AlbumItemProps> = (props) => {
    return (
        <div className={c.item_wrapper}>
            <Link className={c.item_content} to={`/album/${props.album.id}`}>
                {props.album.title}
            </Link>
        </div>
    );
};

export default AlbumItem;