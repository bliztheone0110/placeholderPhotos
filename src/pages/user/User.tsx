import React, { FC } from 'react';
import Container from '../../components/containers/container/Container';
import { IFullUser } from './../../models/IFullUser';
import UserInfo from './userInfo/UserInfo';
import UserContentContainer from './userContent/UserContentContainer';
import FlexBox from './../../components/containers/flexBox/FlexBox';

interface UserProps {
    user: IFullUser;
}

const User: FC<UserProps> = (props) => {
    return (
        <Container>
            <FlexBox>
                <UserInfo user={props.user} />
                <UserContentContainer userId={props.user.id} />
            </FlexBox>
        </Container>
    );
};

export default User;