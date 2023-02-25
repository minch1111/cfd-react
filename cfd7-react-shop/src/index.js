import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppProvider from './core/AppProvider';
import store from './store';
// import "./assets/css/stylelibs.min.css"
// import "./assets/img/"


ReactDOM.render(
  <React.StrictMode>
    <AppProvider store={store}>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
