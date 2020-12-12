import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id: 1, likeCount: 12, message: 'Hi'},
    {id: 2, likeCount: 0, message: 'How is life?'},
    {id: 3, likeCount: 0, message: 'How is you?'}
]

let dialogsData = [
    {id: 1, name: 'Nick'},
    {id: 2, name: 'Mike'},
    {id: 3, name: 'Lukas'}
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Why are you so sad?'},
    {id: 4, message: 'Nevermind!'}
]
ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
