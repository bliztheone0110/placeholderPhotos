import React, { FC, useEffect } from 'react';
import { useActions } from './../../hooks/useActions';
import { useTypedSelector } from './../../hooks/useTypedSelector';
import Users from './Users';
import { Alert, Spin } from 'antd';
import { ThemeContext } from './../../context/themeContext';
import img from './../../img/pexels-aleksandar-pasaric-325185.jpg'

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
            <div className='h100'>
                <Users users={users} />
            </div>
        </Spin>
    );
};

export default UsersContainer;