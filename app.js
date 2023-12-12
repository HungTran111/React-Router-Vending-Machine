import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VendingMachine from './vendingmachine';
import Snack from './snack';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={VendingMachine} />
        <Route path="/snack/:id" component={Snack} />
      </Switch>
    </Router>
  );
};

export default App;
