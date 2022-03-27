import React, { FC } from 'react';
import c from './userInfo.module.css'
import userImg from './../../../img/user.png'
import { IFullUser } from '../../../models/IFullUser';
import PropWithValue from '../../../components/userItems/propWithValue/PropWithValue';

interface MainInfoProps {
    user: IFullUser;
}

const UserInfo: FC<MainInfoProps> = (props) => {
    return (
        <div className={c.main}>
            <div className={c.main_content}>
                <img src={userImg} alt={props.user.name} />
                <PropWithValue propName={'Имя'} prop={props.user.name} centered />
                <PropWithValue propName={'Телефон'} prop={props.user.phone} centered />
                <PropWithValue propName={'Сайт'} prop={props.user.website} centered />
                <PropWithValue propName={'Email'} prop={props.user.email} centered />
                <PropWithValue propName={'Город'} prop={props.user.address.city} centered />
            </div>
        </div>
    );
};

export default UserInfo;