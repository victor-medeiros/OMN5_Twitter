import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Timeline from './pages/Timeline';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/timeline" exact component={Timeline}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
