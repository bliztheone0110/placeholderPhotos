import React, { FC, useContext } from 'react';
import c from './userItem.module.css'
import { IFullUser } from '../../../models/IFullUser';
import { Link } from 'react-router-dom';
import { isThemeDarkContext } from '../../../context/themeContext';

interface UserItemsProps {
    user: IFullUser;
}

const UserItem: FC<UserItemsProps> = (props) => {
    let isDarkThemeContext = useContext(isThemeDarkContext)

    return (
        <div className={c.user_wrapper}>
            <div className={c.user_heightSetter}></div>
            <Link
                to={`/user/${props.user.id}`}
                className={c.user_content}
                style={{
                    background: isDarkThemeContext ? 'var(--color-background-white-dark-theme)' : 'var(--color-background-white)',
                }}
            >
                <p>{props.user.name}</p>
            </Link>
        </div>
    );
};

export default UserItem;