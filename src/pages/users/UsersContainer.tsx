import React, { FC, useEffect, useMemo, useState } from 'react';
import { useActions } from './../../hooks/useActions';
import { useTypedSelector } from './../../hooks/useTypedSelector';
import Users from './Users';
import { Spin } from 'antd';
import { ThemeContext } from './../../context/themeContext';
import { IFullUser } from './../../models/IFullUser';
import Container from './../../components/container/Container';

const UsersContainer: FC = () => {
    const { getUsers } = useActions()
    const { users, isUsersError, isUsersLoading } = useTypedSelector(state => state.usersReducer)

    useEffect(() => {
        if (users.length < 2) {
            getUsers()
        }
    }, [])

    return (
        <Spin spinning={isUsersLoading && users.length < 2}>
            {users.length > 1 ? <Users users={users} /> : <Container /> }
        </Spin>
    );
};

export default UsersContainer;