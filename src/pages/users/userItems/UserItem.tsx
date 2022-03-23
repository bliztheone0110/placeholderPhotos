import React, { FC } from 'react';
import c from './userItem.module.css'
import { IFullUser } from './../../../models/IFullUser';
import { Link } from 'react-router-dom';

interface UserItemsProps {
    user: IFullUser;
}

const UserItem: FC<UserItemsProps> = (props) => {
    return (
        <div className={c.user_wrapper}>
            <div className={c.user_heightSetter}></div>
            <Link to={`/user/${props.user.id}`} className={c.user_content}>
                <p>{props.user.name}</p>
            </Link>
        </div>
    );
};

export default UserItem;