import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Todo from './Todo';

ReactDOM.render(
  <Todo />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
