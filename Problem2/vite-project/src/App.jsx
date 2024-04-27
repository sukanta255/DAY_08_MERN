import './App.css';
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import UserForm from './components/UserForm';
import Header from './components/Header';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {


  return (
    <ThemeProvider>
      <div>
        <Header />
        <UserForm />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  )
}

export default App
