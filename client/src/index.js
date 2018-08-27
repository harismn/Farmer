import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './containers/Homepage/index'
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Signin from './containers/Signin/index'
import store from './store'
import {Provider} from 'react-redux'
import reducers from './reducers/index'
import './App.css'

const App = <Provider store={store(reducers)}>
  <BrowserRouter>
    <Switch>
   
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Signin} />
     
    </Switch>
  </BrowserRouter>
  </Provider>

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
