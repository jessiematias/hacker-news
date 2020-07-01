import React from "react";
import { FiSun, FiMoon } from 'react-icons/fi';

const Toggle = ({ theme, toggleTheme }) => {
return theme === 'light' ? <FiSun style={{cursor: 'pointer', width: '2rem',
    height: '2rem'}} onClick={toggleTheme}/> : <FiMoon style={{cursor: 'pointer', width: '2rem',
    height: '2rem'}} onClick={toggleTheme}/>
}

export default Toggle;