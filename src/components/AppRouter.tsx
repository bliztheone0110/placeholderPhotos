import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRouts, privateRouts } from './../routs/index';
import { useTypedSelector } from './../hooks/useTypedSelector';

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.authReducer)

    return (
        isAuth
            ?
            <Routes>
                {privateRouts.map(route =>
                    <Route key={route.path} path={route.path} element={<route.component />} />
                )}
            </Routes>
            :
            <Routes>
                {publicRouts.map(route =>
                    <Route key={route.path} path={route.path} element={<route.component />} />
                )}
            </Routes>
    );
};

export default AppRouter;