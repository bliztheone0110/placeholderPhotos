import React, { FC, useContext, useState } from 'react';
import { IPost } from '../../../models/IPost';
import c from './postItem.module.css'
import { isThemeDarkContext } from '../../../context/themeContext';

interface PostItemProps {
    post: IPost;
}

const PostItem: FC<PostItemProps> = (props) => {
    const [isActive, setIsActive] = useState(false)
    let isDarkThemeContext = useContext(isThemeDarkContext)

    const toggleActive = (): void => {
        setIsActive(prev => !prev)
    }

    return (
        <div
            className={c.post_wrapper}
            onClick={() => toggleActive()}
            style={{
                background: isDarkThemeContext ? 'var(--color-background-white-dark-theme)' : 'var(--color-background-white)',
            }}
        >
            <h3 className={c.post_title}>{props.post.title}</h3>
            <p className={c.post_text} style={{ maxHeight: isActive === true ? '200px' : '0' }}>
                {props.post.body}
            </p>
        </div>
    );
};

export default PostItem;