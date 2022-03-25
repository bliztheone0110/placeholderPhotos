import React, { FC } from 'react';
import { IFullUser } from '../../models/IFullUser';
import FlexBox from './../../components/flexBox/FlexBox';
import Container from './../../components/container/Container';
import UserItem from './userItems/UserItem';

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