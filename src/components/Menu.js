import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMenu } from '../styles/MenuSyles';
import Toggle from './Toggle';

const Menu = ({open, setOpen}) => {
  return (
    <StyledMenu open={open}>
      <Link onClick={() => setOpen(!open)} to="/">      
        NEWEST 
      </Link>
      <Link onClick={() => setOpen(!open)} to="/top">
        TRENDING
        </Link>
        <Link onClick={() => setOpen(!open)} to="/show">
        SHOW
        </Link>
      <Link onClick={() => setOpen(!open)} to="/jobs">
        JOBS
        </Link>
    </StyledMenu>
  )
}

export default Menu;