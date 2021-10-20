import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/dest/style.min.css";
import "./assets/dest/fonts.css";
import "./assets/css/libs/flickity.css"
import "./assets/css/libs/libs.css"
import "./assets/dest/stylelibs.min.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

