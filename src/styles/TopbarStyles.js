import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = 'nav-item-active'

export const TopbarContainer = styled.div`
width: 100%;
height: 8vh;
background-color: #F0652F;
display: flex;
h1 {
    font-size: 2.5rem;
    margin: auto;
    color: #ffff;

}

span {
    display: inline-block;
    vertical-align: center;
    display: flex;
    height: 100%;
    justify-content: flex-start;
    width: max-content;
    margin-left: 2rem;
}
`

export const NavItemContainer = styled.div`
    width: 80%;
    background-color: #F0652F;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1.3rem;
    @media (max-width: 800px) {
    display: none;
  }
`

export const NavItem = styled(NavLink).attrs({ activeClassName })`
text-decoration: none;
color: ${props => props.theme.mode = 'dark' ? '#fff' : '#1F1F1F'};
&.${activeClassName} {
  outline: 0;
  text-decoration: none;
  color: ${props => props.theme.mode = 'dark' ? '#1F1F1F' : '#fff'};
}
`