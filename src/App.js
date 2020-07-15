import React from 'react';
import NewStories from './containers/NewStories';
import GlobalStyles from './styles/GlobalStyles';
import { Topbar } from './components/Topbar';
import {
  Switch,
  Route
} from "react-router-dom";
import JobStories from './containers/JobStories';
import TopStories from './containers/TopStories';
import ScrollArrow from './components/ScrollArrow';
import ShowStories from './containers/ShowStories';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';
import { lightTheme, darkTheme } from './styles/theme'
import BurgerMenu from './components/BurgerMenu';
import SearchResults from './containers/SearchResults';

const App = () => {
  const [ theme, toggleTheme ] = useTheme()
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Topbar theme={theme} toggleTheme={toggleTheme} />
        <BurgerMenu/>
        <Switch>
          <Route exact path='/' component={NewStories} />
          <Route path='/jobs' component={JobStories} />
          <Route path='/top' component={TopStories} />
          <Route path='/show' component={ShowStories} />
          <Route exact path='/search' component={SearchResults} />
        </Switch>
        <ScrollArrow />
      </ThemeProvider>
    </>
  )
}

export default App