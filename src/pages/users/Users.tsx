import React, { FC } from 'react';
import { IFullUser } from '../../models/IFullUser';

interface UsersProps {
    users: IFullUser[];
}

const Users: FC<UsersProps> = (props) => {
    return (
        <div>
            {props.users.map(user => 
                <div>{user.id}</div>
            )}
        </div>
    );
};

export default Users;