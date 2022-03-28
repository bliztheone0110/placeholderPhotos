import React, { FC, useState } from 'react';
import Container from '../../components/containers/container/Container';
import { IFullUser } from './../../models/IFullUser';
import UserInfo from './userInfo/UserInfo';
import UserContentContainer from './userContent/UserContentContainer';
import FlexBox from './../../components/containers/flexBox/FlexBox';

interface UserProps {
    user: IFullUser;
}

const User: FC<UserProps> = (props) => {
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
        <Container>
            <FlexBox display={isMobView ? 'block' : 'flex'}>
                <UserInfo user={props.user} />
                <UserContentContainer userId={props.user.id} />
            </FlexBox>
        </Container>
    );
};

export default User;