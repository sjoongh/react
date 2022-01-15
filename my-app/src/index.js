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

// JSX test 2
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {getGreeting(user)}!
//   </h1>
// );

// JSX도 표현식이다. 컴파일시 결국 JS객체로 인식됨
// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// JSX 속성 정의
// 어트리뷰트에 따옴표를 이용해 문자열 리터럴을 정의할 수 있음.
// const element1 = <div tabIndex="0"></div>;

// 중괄호를 사용하여 JS표현식 삽입
// user변수에 있는 avatarUrl에 접근
// const element2 = <img src={user.avatarUrl}></img>;

// 동일한 어트리뷰트에 위의 두가지 방법중 하나만 사용해야함

// JSX는 JS에 가까운 언어이기에 camelCase프로퍼티 명명 규칙을 사용.
// 예를 들어 JSX에서 class는 className가 되고 tabindex는 tabIndex가 된다.

// JSX는 주입 공격을 방지
// but 사용자 입력을 삽입하는 것은 안전하다.
// const element = <h1>{title}</h1>; --> {title}이 입력됨

// 기본적으로 react DOM은 jsx에 삽입된 모든 값을 렌터링 하기 전에 이스케이프 하므로 
// 애플리케이션에서 명시적으로 작성되지 않은 내용은 주입되지 않음.
// 때문에 모든 항목은 렌더링 되기 전에 문자열로 변환된다.
// 이스케이프 : 특정 문자를 HTML로 변환하는 행위

// JSX는 객체를 표현합니다.
// Bable은 JSX를 React.createElement() 호출로 컴파일한다.

// React.createElement()는 버그가 없는 코드를 작성하는데 도움이 되도록 몇 가지 검사를 수행.
// 이러한 객체를 React엘리먼트라고 하며, 화면에서 보고 싶은 것을 나타내는 표현,

// 다음 두 예시는 동일한 예시이다.
// const element = (
//   <h1 className='greeting'>
//     Hello, world
//   </h1>
// );

// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );

// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };

// 엘리먼트 렌더링

// 엘리먼트는 react앱의 가장 작은 단위이다.
// 엘리먼트는 화면에 표시할 내용을 기술한다.

// 컴포넌트와 엘리먼트를 혼동하지 말 것!
// 엘리먼트는 컴포넌트의 구성요소 이므로 다음장에서 설명

const element = <h1>Hello, world</h1>;

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <h1>Hello world!</h1>,
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
