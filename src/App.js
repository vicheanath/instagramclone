import React from 'react';
import Header from './components/Header'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Inbox from './components/Inbox'
import Explore from './components/Explore'
import Profile from './components/Profile'

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/direct/inbox" component={Inbox} />
          <Route path="/explore" component={Explore} />
          <Route path="/:profile" component={Profile} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
