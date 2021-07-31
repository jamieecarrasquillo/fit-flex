import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './components';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
    );
  }
}

export default Routes;
