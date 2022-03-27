import React, { FC } from 'react';
import { IFullUser } from '../../models/IFullUser';
import Container from '../../components/containers/container/Container';
import UserItem from '../../components/userItems/userItem/UserItem';
import FlexBox from './../../components/containers/flexBox/FlexBox';

interface UsersProps {
    users: IFullUser[];
}

const Users: FC<UsersProps> = (props) => {
    return (
        <Container>
            <FlexBox flexWrap='wrap'>
                {props.users.map(user =>
                    <UserItem key={user.id} user={user} />
                )}
            </FlexBox>
        </Container>
    );
};

export default Users;