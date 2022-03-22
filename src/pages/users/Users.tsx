import React, { FC } from 'react';
import { IFullUser } from '../../models/IFullUser';
import FlexBox from './../../components/flexBox/FlexBox';
import Container from './../../components/container/Container';

interface UsersProps {
    users: IFullUser[];
}

const Users: FC<UsersProps> = (props) => {
    return (
        <Container>
            <FlexBox>
                {props.users.map(user =>
                    <div>{user.id}</div>
                )}
            </FlexBox>
        </Container>
    );
};

export default Users;