import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './containers/Homepage/index'
import registerServiceWorker from './registerServiceWorker';
import{ Route, BrowserRouter} from 'react-router-dom'

const App = () => (
    <BrowserRouter>
      <div className="sans-serif">
        <Route path="/" component={Homepage} />
      </div>
    </BrowserRouter>
  );



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
