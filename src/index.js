import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Signup from './components/signup'


ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
        <Route exact path="/signup" component={Signup} />
      </div>
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
