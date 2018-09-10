// import React, { Component } from 'react';
//리액트와 그 내부의 Component를 불러온다. 파일에서 JSX를 사용하려면, 꼭 React를 import 해주어야 한다.

// import logo from './logo.svg';
// import './App.css';

//위처럼 import를 하는 것은 우리가 webpack을 사용하기에 가능한 작업이다. 이렇게 불러오고 나면 나중에 프로젝트를 빌드하게 됐을때 웹팩에서 파일의 확장자에 따라 다른 작업을 하게 된다.
//css 파일을 불러오게 되면, 나중에 프로젝트에서 사용한 프로젝트를 한 파일에 모두 결합해주는 작업을 진행하고, 자바스크립트 파일을 불러오게되면 모든 코드들이 제대로 로딩되게끔 순서를 설정하고 하나의 파일로 합쳐 준다.
//svg처럼 사전에 다로 설정을 되지 않은 확장자의 경우, 그냥 파일로서 불러온다음에 나중에 특정 경로에 사본을 만들어주게되고, 해당 사본의 경로를 텍스트로 받아오게 된다.


// class App extends Component {
//컴포넌트를 만드는 방법은 두가지가 있다.
//클래스를 통해서 만드는 방법, 다른 방법은 함수를 통하여 컴포넌트를 만드는 방법


//클래스 형태로 만들어진 컴포넌트에는 꼭 render 함수가 있어야 하고 그리고 그 내부에서는 JSX를 return 해주어야 한다.
//위에 보이는 HTML 같은 코드가 JSX이다.
//   render() {
//     const name = 'react';
//     return (
//       <div>
//         hello {name}!
//       </div>
//     );
//   }

// }

// // var와  let의 차이
// function foo(){
//   var a = 'hello';
//   if(true){
//     var a = 'bye';
//     console.log(a);//bye

//   }
//   console.log(a);//bye
// }

// function foo(){
//   let a = 'hello';
//   if(true){
//     let a = 'bye';
//     console.log(a);//bye
//   }
//   console.log(a);//hello
// }


//var는 scope가 함수단위인 반명
//const 와 let은 scope가 블록 단위 이다.

//조건부 렌더링
//JSX내부에서 조건부 렌더링을 할때는 삼항 연산자를 사용하거나 AND연산자를 사용한다.
//반면에 if문을 사용할 수는 없다.(사용하려면 IIFE(즉시 실행 함수 표현))을 사용해야한다.)

//->삼항 연산자
// class App extends Component{
//   render(){
//     return (
//       <div>
//         {
//           1 + 1 === 3
//           ?(<div>맞아요 !</div>)
//           :(<div>틀려요 !</div>)
//         }
//       </div>
//     );
//   }
// }

//-> AND연산자
//삼항연산자는 true일때와 false일 때 다른 것들을 보여주고 싶을 때 사용하는 반면,
// AND연산자의 경우 단순히 우리의 조건이true일 때만 보여주고 false 경우 아무것도 보여주고 싶지 않을 때 사용

// class App extends Component{
//   render(){
//     return(
//       <div>
//       {
//         1+1===2 && (<div>맞아요!</div>)
//       }
//       </div>
//     )
//   }
// }

// //대부분의 상화엔 위의 방식으로 해결 가능하지만 가끔식은 복잡한 조건을 작성해야 할 때도 있다.
// //그러한 조건들은 웬만하면 JSX 밖에서 로직을 작성하는 것이 좋다.
// //꼭 JSX내부에서 작성해야 한다면, 이렇게 IIFE를 사용한다.
// class App extends Component{
//   render(){
//     const value = 1;
//     return(
//       <div>
//         {
//           (()=>{
//             if(value === 1) return (<div>하나</div>)
//             if(value === 2) return (<div>둘</div>)
//             if(value === 3) return (<div>셋</div>)
//           })()
//           //화살표 함수는 this, arguments, super 개념이 없는 익명 함수 이다.
//         }
//       </div>
//     );
//   }
// }


// class App extends Component{
//   render(){
//     const style = {
//       backgroundColor : 'black',
//       padding : '16px',
//       color : 'white',
//       fontSize : '12px'
//     };

//     return (
//       <div style = {style}>
//         hi there
//       </div>
//     )
//   }
// }
// //style과 css 클래스를 설정할 때, html 에서 하는 것과 사뭇 다르다.

// import React, {Component} from 'react';
// import './App.css'

// class App extends Component{
//   render(){
//     return (
//       <div className = "App">
      
//         리액트
//       </div>
//     )
//   }
// }
//html에서는 그냥 텍스트 형태로
//="backgroundColor : black; padding: 16px; ..." 이런식으로 작성
//리액트에서는 객체형태로 작성해야한다.
//클래스를 설정하게 될 때에는 html에서는 <div class = 'hello'>이렇게 작성했었는데, 리액트 컴포넌트에서는 class 대신에 className을 사용한다.

//props는 부모 컴포넌트가 자식 컴포넌트에게 주는 값, 자식 컴포넌트에서는 props를 받아오기만하고, 받아온 props를 직접 수정 할 수 없다.
//반면에 state는 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있다.


import React , {Component} from 'react';
import MyName from './MyName';
import Counter from './Counter';

class App extends Component{
  render(){
    return(

      <div>
        <div>
        <MyName name = "리액트"/>,
        </div>
        <div>
          <Counter />
        </div>
      </div>
      
      
    )
  }
}



export default App;
//작성한 컴포넌트를 다른 곳에서 불러와서 사용 할 수 있도록 내보내기를 해준다
