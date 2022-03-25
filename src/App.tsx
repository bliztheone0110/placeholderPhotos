import React, { FC, useEffect, useState, useContext } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import { Layout } from "antd";
import NavBar from './components/NavBar';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';
import { ThemeContext } from './context/themeContext';
import './styles/fonts.css';

const App: FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const { setUser, setIsAuth } = useActions()

  const toggleTheme = (): void => {
    setIsDarkTheme(prev => !prev)
  }

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || '') } as IUser)
      setIsAuth(true)
    }
  }, [])

  return (
    <Layout className={isDarkTheme ? 'layout_dark' : ''}>
        <NavBar isDarkTheme={isDarkTheme} setIsDarkTheme={toggleTheme} />
        <ThemeContext.Provider value={isDarkTheme}>
          <Layout.Content className={isDarkTheme ? 'layout_content__dark' : 'layout_content'}>
            <AppRouter />
          </Layout.Content>
        </ThemeContext.Provider>
    </Layout>
  );
}

export default App;
