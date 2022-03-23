import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from './../../hooks/useActions';
import { useTypedSelector } from './../../hooks/useTypedSelector';
import { IFullUser } from './../../models/IFullUser';

const UserContainer = () => {
    const [currentUser, setcurrentUser] = useState(undefined as IFullUser | undefined)
    const { getCurrentUser, setUsers } = useActions()
    const { isUsersLoading, isUsersError, users } = useTypedSelector(state => state.usersReducer)
    let { id } = useParams()

    useMemo(() => {
        let currentUser = users.find(user => user.id === Number(id))

        if (currentUser) {
            setcurrentUser(currentUser)
        }
    }, [users])

    useEffect(() => {
        if (currentUser === undefined && id) {
            getCurrentUser(id)
        }
    }, [])

    return (
        <div>
            {currentUser ? <p>{currentUser.name}</p> : ''}
        </div>
    );
};

export default UserContainer;