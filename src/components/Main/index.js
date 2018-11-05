import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Project from '../Project';
const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/project/:projectId' component={Project}/>
      </Switch>
    </main>
);

export default Main;
