import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {id: 1, name: 'Илья'},
  {id: 2, name: 'Андрей'},
  {id: 3, name: 'Влад'},
]
let messagesData = [
  {id: 1, message: 'Hi all test test'},
  {id: 2, message: 'Do u like me?'},
  {id: 3, message: 'Bye bye'}
]

let postData = [
  {message: 'lallalaal', likeCount: 13},
  {message: 'it is my first post', likeCount: 0},
  {message: 'do u like anime', likeCount: 103}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
