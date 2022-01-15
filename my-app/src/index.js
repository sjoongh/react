import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// JSX에 표현식 포함하기 --> JSX test 1
// {name}이라는ㅇ 변수를 선언한후 JSX안에서 사용
// JSX의 중괄호 안에는 유효한 모든 JS표현식을 넣을 수 있음.
// const name = 'shin joong ho';
// const element = <h1>Hello, {name}</h1>;

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <h1>Hello world!</h1>,
  // element, --> JSX test 1
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
