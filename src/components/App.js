import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Posts from './Posts';
import Home from './Home';
import EditForm from './EditForm';
import Post from './Post';

function App() {
  return (
    <div>
      <Switch>
        
        <Route path='/edit/:id'>
          <EditForm />
        </Route>
        <Route path='/posts/:id'>
          <Post />
        </Route>
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
