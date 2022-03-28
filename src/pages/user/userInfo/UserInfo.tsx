import React, { FC, useState } from 'react';
import c from './userInfo.module.css'
import userImg from './../../../img/user.png'
import { IFullUser } from '../../../models/IFullUser';
import PropWithValue from '../../../components/userItems/propWithValue/PropWithValue';
import FlexBox from '../../../components/containers/flexBox/FlexBox';

interface MainInfoProps {
    user: IFullUser;
}

const UserInfo: FC<MainInfoProps> = (props) => {
    const [isMobView, setIsMobView] = useState(window.screen.width <= 540 ? true : false)

    window.addEventListener('resize', () => {
        if (window.screen.width <= 540 && !isMobView) {
            setIsMobView(true)
        }

        if (window.screen.width > 540 && isMobView) {
            setIsMobView(false)
        }
    })

    return (
        <section className={c.main}>
            <div className={c.main_content}>
                <FlexBox display={isMobView ? 'flex' : 'block'}>
                    <img src={userImg} alt={props.user.name} />
                    <article>
                        <PropWithValue propName={'Имя'} prop={props.user.name} centered />
                        <PropWithValue propName={'Телефон'} prop={props.user.phone} centered />
                        <PropWithValue propName={'Сайт'} prop={props.user.website} centered />
                        <PropWithValue propName={'Email'} prop={props.user.email} centered />
                        <PropWithValue propName={'Город'} prop={props.user.address.city} centered />
                    </article>
                </FlexBox>
            </div>
        </section>
    );
};

export default UserInfo;