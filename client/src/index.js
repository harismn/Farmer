import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './containers/Homepage/index'
import registerServiceWorker from './registerServiceWorker';
import{ Route, BrowserRouter} from 'react-router-dom'
import LoginPage from './containers/LoginPage/index'

const App = () => (
    <BrowserRouter>
      <div className="sans-serif">
        <Route path="/" component={Homepage} />
        <Route path="/login" component={LoginPage} />
      </div>
    </BrowserRouter>
  );



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
