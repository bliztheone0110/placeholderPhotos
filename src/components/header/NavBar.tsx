import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { Link } from 'react-router-dom';
import Container from '../containers/container/Container';

interface NavBarprops {
    isDarkTheme: boolean;
    setIsDarkTheme: () => void;
}

const NavBar: FC<NavBarprops> = (props) => {
    const { isAuth } = useTypedSelector(state => state.authReducer)
    const { logout } = useActions()

    return (
        <Layout.Header className='sticky' style={props.isDarkTheme ? { background: '#001529' } : { background: '#ffffff' }}>
            <Container autoHeight='auto'>
                <nav>
                    <Menu theme={props.isDarkTheme ? 'dark' : 'light'} mode="horizontal" selectable={false} style={{ border: '0' }}>
                        {isAuth
                            ?
                            <Menu.Item key={1} onClick={() => logout()}>
                                <Link to="/" >logout</Link>
                            </Menu.Item>
                            :
                            <Menu.Item key={1}>
                                <Link to="/" >login</Link>
                            </Menu.Item>
                        }
                        {isAuth &&
                            <Menu.Item key={2}>
                                <Link to="/" >Главная</Link>
                            </Menu.Item>
                        }
                        {isAuth &&
                            <Menu.Item key={3}>
                                <Link to="/users" >Пользователи</Link>
                            </Menu.Item>
                        }
                        <Menu.Item key={99} onClick={() => props.setIsDarkTheme()}>
                            {props.isDarkTheme ? 'светлая тема' : 'тёмная тема'}
                        </Menu.Item>
                    </Menu>
                </nav>
            </Container>
        </Layout.Header>
    );
};

export default NavBar;