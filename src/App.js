import React, { useEffect } from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from 'components/Header';
import Projects from 'views/Projects';
import ProjectDetail from 'views/ProjectDetail';
import About from 'views/About';
import NoPage from 'views/NoPage';


const App = () => {
  const appStyleBlack = {
    backgroundColor: 'black',
    padding: '15px'
  }

  const appStyleWhite = {
    backgroundColor: 'white',
    padding: '15px'
  }

  const location = useLocation();

  return (
    <div style={location.pathname === '/' ? appStyleBlack : appStyleWhite}>
      <Header location={location.pathname}/>
      <Switch>
          <Route exact path="/" component={Projects} />
          <Route path="/projectDetail/:title" component={ProjectDetail} />
          <Route path="/about" component={About} />
          <Route component={NoPage} />
      </Switch>
    </div>
  );
};

export default App;