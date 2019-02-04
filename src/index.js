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
import Signup from './components/signup';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux'


function reducer(){
  return "state"
}
const store = createStore(reducer);

console.log(store.getState());

ReactDOM.render(
  <Router>
      <div>
        <Provider store={store}>
          <Route exact path='/' component={App} />
          <Route path='/edit/:id' component={Edit} />
          <Route path='/create' component={Create} />
          <Route path='/show/:id' component={Show} />
          <Route exact path="/signup" component={Signup} />
         </Provider>
      </div>
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
