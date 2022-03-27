import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from './../../hooks/useActions';
import { useTypedSelector } from './../../hooks/useTypedSelector';
import { IFullUser } from './../../models/IFullUser';
import User from './User';
import { Spin } from 'antd';
import Container from '../../components/containers/container/Container';

const UserContainer = () => {
    let { id } = useParams()
    const { getCurrentUser } = useActions()
    const { isUsersLoading, usersError, users } = useTypedSelector(state => state.usersReducer)
    let currentUser: IFullUser | undefined = users.find(user => user.id === Number(id))
    const [currentUserState, setCurrentUserState] = useState(currentUser)

    useMemo(() => {
        currentUser = users.find(user => user.id === Number(id))

        if (currentUser) {
            setCurrentUserState(currentUser)
        }
    }, [users])

    useEffect(() => {
        if (currentUser === undefined && id) {
            getCurrentUser(id)
        }
    }, [])

    return (
        <Spin spinning={isUsersLoading && !currentUser}>
            {usersError.length !== 0 && <Container><h1>{usersError}</h1></Container>}
            {currentUserState ? <User user={currentUserState} /> : ''}
        </Spin>
    );
};

export default UserContainer;