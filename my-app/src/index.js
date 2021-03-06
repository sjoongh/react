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

// 기본(basic) render 설정
// ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <h1>Hello world!</h1>,
//   element,
//   document.getElementById('root')
// );

// reportWebVitals();

// ----------------------------------------------------------------------------------------------------
// 엘리먼트 렌더링

// 엘리먼트는 react앱의 가장 작은 단위이다.
// 엘리먼트는 화면에 표시할 내용을 기술한다.

// 컴포넌트와 엘리먼트를 혼동하지 말 것!
// 엘리먼트는 컴포넌트의 구성요소 이므로 다음장에서 설명

// const element = <h1>Hello, world</h1>;

// element를 ReactDOM.render()로 전달하면 DOM노드에 렌더링
// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element,
//   document.getElementById('root'));

// 현재까지 내용으로 UI를 업데이트 하는 방법 : 새로운 엘리먼트를 생성해 ReactDom.render()로 전달
// ex: 시계 구현
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element,
//     document.getElementById('root'));
// }

// setInterval(tick, 1000);


// ---------------------------------------------------------------------------------------
// Component와 Props

// 함수 컴포넌트
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// ES6 class 컴포넌트
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

// 컴포넌트 렌더링
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// React의 App컴포넌트 활용
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// Comment 컴포넌트를 살펴보자
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className='UserInfo'>
//         <img className='Avatar'
//           src={props.author.avatarUrl}
//           alt={props.author.name} 
//           />
//         <div className='UserInfo-name'>
//           {props.author.name}
//         </div>
//       </div>
//       <div className='Comment-text'>
//         {props.text}
//       </div>
//       <div className='Comment-date'>
//         {FormData(props.date)}
//       </div>
//     </div>
//   );
// }

// Avatar 추출
// function Avatar(props) {
//   return (
//     <img className='Avatar' 
//       src={props.user.Avatar}
//       alt={props.user.name}
//     />
//   );
// }

// Comment를 단순하게 표현
// function Comment(props) {
//   return (
//     <div className='Comment'>
//       <div className='UserInfo'>
//         <Avatar user={props.autor} />
//         <div className='UserInfo-name'>
//           {props.autor.name}
//         </div>
//       </div>
//       <div className='Comment-text'>
//         {props.text}
//       </div>
//       <div className='Comment-date'>
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// Avatar 옆에 사용자의 이름을 렌더링하는 UserInfo 컴포넌트 추출
// function UserInfo(props) {
//   return (
//     <div className='UserInfo'>
//       <Avatar user={props.user} />
//       <div className='UserInfo-name'>
//         {props.user.name}
//       </div>
//     </div>
//   );
// }

// 단순해진 Comment
// function Comment(props) {
//   return (
//     <div className='Comment'>
//       <UserInfo user={props.author} />
//       <div className='Comment-text'>
//         {props.text}
//       </div>
//       <div className='Comment-date'>
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// sum 함수 --> 이와 같은 함수를 순수함수라 한다
// 입력값을 바꾸려 하지 않고 항상 동일한 입력값에 대해 동일한 결과 반환
// function sum(a, b) {
//   return a + b;
// }

// 자신의 입력값을 변경 --> 순수함수가 아닌 함수
// function withdraw(account, amount) {
//   account.total -= amount;
// }

// React 컴포넌트는 자신의 props를 다룰 때 반드시 순수함수처럼 동작해야 한다.

// ------------------------------------------------------------------------------------
// state and Life cycle

function tick() {
  const element = (
    <div>
      <h1>Hello, world</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  )
}

setInterval(tick, 1000);