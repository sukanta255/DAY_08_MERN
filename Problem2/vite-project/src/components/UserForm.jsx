import React from 'react';
import { useTheme } from '../context/ThemeContext';

const UserForm = () => {
  const { theme } = useTheme();

  return (
    <div style={{ background: theme.background, color: theme.text }}>
    </div>
  );
}

export default UserForm;
