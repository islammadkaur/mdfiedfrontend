import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers/index';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.scss';
import {BrowserRouter} from 'react-router-dom';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

  let store = createStore(persistedReducer)
  let persistor = persistStore(store)

  

ReactDOM.render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
