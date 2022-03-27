import React, { FC, useContext } from 'react';
import c from './albumItemFiller.module.css'
import { isThemeDarkContext } from '../../../context/themeContext';

const AlbumItemFiller: FC = () => {
    let isDarkThemeContext = useContext(isThemeDarkContext)

    return (
        <div className={c.item_wrapper}>
            <div
                className={c.item_content}
                style={{
                    background: isDarkThemeContext ? 'var(--color-background-white-dark-theme)' : 'var(--color-background-white)',
                }}
            >
                <p>loading...</p>
            </div>
        </div>
    );
};

export default AlbumItemFiller;