import React from 'react';
import { TopbarContainer, NavItemContainer, NavItem } from '../styles/TopbarStyles';
import Toggle from './Toggle';


export const Topbar = ({ theme, toggleTheme }) => {

  return (
    <TopbarContainer>
      <span><h1>HACKER NEWS</h1></span>
      <NavItemContainer>
        <NavItem exact to='/'>NEWEST</NavItem>
        <NavItem to='/top'>TRENDING</NavItem>
        <NavItem to='/show'>SHOW</NavItem>
        <NavItem to='/jobs'>JOBS</NavItem>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </NavItemContainer>
    </TopbarContainer>
  )
}

