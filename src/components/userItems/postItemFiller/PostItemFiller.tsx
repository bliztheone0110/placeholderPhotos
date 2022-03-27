import React, { FC, useContext } from 'react';
import c from './postItemFiller.module.css'
import { isThemeDarkContext } from '../../../context/themeContext';

const PostItemFiller: FC = () => {
    let isDarkThemeContext = useContext(isThemeDarkContext)

    return (
        <div
            className={c.post_wrapper}
            style={{
                background: isDarkThemeContext ? 'var(--color-background-white-dark-theme)' : 'var(--color-background-white)',
            }}
        >
            <h3 className={c.post_title}>Loading</h3>
        </div>
    );
};

export default PostItemFiller;