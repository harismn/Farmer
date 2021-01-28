import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './containers/Homepage/index'
import registerServiceWorker from './registerServiceWorker';
import{ Route, BrowserRouter} from 'react-router-dom'
import Signin from './containers/Signin/index'

const App = () => (
    <BrowserRouter>
      <div className="sans-serif">
        <Route path="/" component={Homepage} />
        <Route path="/login" component={Signin} />
      </div>
    </BrowserRouter>
  );



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
