import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tw-elements';
import App from './App';
import { Provider } from 'react-redux';
import {createStore} from "redux"
import allReducers from './reducers';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const store = createStore(allReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
       <App/>
    </Provider>


  </React.StrictMode>
);


