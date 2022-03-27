import React, { FC, useContext } from 'react';
import c from './albumItem.module.css'
import { IAlbum } from '../../../models/IAlbum';
import { Link } from 'react-router-dom';
import { isThemeDarkContext } from '../../../context/themeContext';

interface AlbumItemProps {
    album: IAlbum;
}

const AlbumItem: FC<AlbumItemProps> = (props) => {
    let isDarkThemeContext = useContext(isThemeDarkContext)

    return (
        <div className={c.item_wrapper} >
            <Link
                className={c.item_content}
                to={`/album/${props.album.id}`}
                style={{
                    background: isDarkThemeContext ? 'var(--color-background-white-dark-theme)' : 'var(--color-background-white)',
                }}
            >
                {props.album.title}
            </Link>
        </div>
    );
};

export default AlbumItem;