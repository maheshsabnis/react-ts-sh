import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { productReducer } from './reduxapp/reducers';
import MainReduxComponent from './reduxapp/components/mainreduxcomponent';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Configure Redux store
const store = configureStore({
  reducer: {
    products: productReducer
  }
});


root.render(
  <React.StrictMode>
    <h1>Welcome to My React Redux App</h1>
    <Provider store={store}>
      <MainReduxComponent />
    </Provider>
  </React.StrictMode>
);

 
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
