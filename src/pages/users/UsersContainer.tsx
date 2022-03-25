import React, { FC, useEffect } from 'react';
import { useActions } from './../../hooks/useActions';
import { useTypedSelector } from './../../hooks/useTypedSelector';
import Users from './Users';
import { Spin } from 'antd';
import Container from './../../components/container/Container';

const UsersContainer: FC = () => {
    const { getUsers } = useActions()
    const { users, usersError, isUsersLoading } = useTypedSelector(state => state.usersReducer)

    useEffect(() => {
        if (users.length < 2) {
            getUsers()
        }
    }, [])

    return (
        <Spin spinning={isUsersLoading && users.length < 2}>
            {usersError.length > 0 && <h1>{usersError}</h1>}
            {users.length > 1 && !isUsersLoading ? <Users users={users} /> : <Container /> }
        </Spin>
    );
};

export default UsersContainer;