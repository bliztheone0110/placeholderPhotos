import React, { FC, useEffect } from 'react';
import { useActions } from './../../hooks/useActions';
import { useTypedSelector } from './../../hooks/useTypedSelector';
import Users from './Users';
import { Spin } from 'antd';
import { ThemeContext } from './../../context/themeContext';

const UsersContainer: FC = () => {
    const { getUsers } = useActions()
    const { users, isUsersError, isUsersLoading } = useTypedSelector(state => state.usersReducer)
    const themeContext = React.useContext(ThemeContext);

    useEffect(() => {
        if (users.length <= 1) {
            getUsers()
        }
    }, [])

    return (
        <Spin spinning={isUsersLoading}>
            <Users users={users} />
        </Spin>
    );
};

export default UsersContainer;