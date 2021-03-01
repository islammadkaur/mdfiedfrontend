import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import {createStore} from 'redux';
import rootReducer from './reducers/index';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.scss';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
