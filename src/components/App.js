import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Posts from './Posts';
import Home from './Home';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
