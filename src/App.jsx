import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Today from './components/Today';
import Week from './components/Week';

const App = () => {
  return (
    <main>
      <Navbar />
      <Route
        render={({ location }) => (
          <Switch location={location}>
            <Route exact path="/" component={Today} />
            <Route path="/today" component={Today} />
            <Route path="/week" component={Week} />
            <Redirect to="/" />
          </Switch>
        )}
      />
    </main>
  );
};

export default App;
