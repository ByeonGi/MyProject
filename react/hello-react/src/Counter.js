// import React, {Component} from 'react';

// class Counter extends Component{
//     state = {
//         number : 0,
//         foo : 'bar'
//     }

//     //setState는 객체의 깊숙한 곳까지 확인하지 못한다.
//     state = {
//         number : 0,
//         foo : {
//             bar : 0,
//             foobar : 1
//         }
//     }

//     // test  = () =>{
//     //     this.setState({
//     //         foo : {
//     //             foobar : 2
//     //         }
//     //     })
//     // }
//     //위와 같이 한다고 해서 foobar가 없데이트 되지 않는다.
//     //기존의 foo객체가 바뀌어버린다.
//     test = () =>{
//         this.setState({
//             foo: {
//                 ...this.state.foo,
//                 //...은 자바스크립트의 전개연산자이다. 기존의 객체안에 있는 내용을 해당 위치에다가 풀어준다는 의미이다. 우리가 설정하고 싶은 값을 또 넣어주면 해당 값을 덮어쓰게 된다.
//                 foobar : 2
//             }
//         })
//     }
    
//     handleIncrease = () =>{
//         // this.setState({
//         //     number : this.state.number + 1

//         // });
//         //위처럼 작성하게 되면 굳이 this.state를 조회해야된다.
//         // this.setState(
//         //     (state) => ({
//         //         number : state.number
//         //     }),
//         //     ({number}) => ({
//         //         number : number + 1
//         //     })
//         //     //==const {number } = this.state;
//         // )
//         //비구조화 할당이다.
//         const {number} = this.state;
//         this.setState({
//             number : number + 1
//         })
//     }
//     handleDecrease = () =>{
//         this.setState({
//             number : this.state.number -1
//         });
//     }


//     // handleIncrease(){
//     //     this.setState({
//     //         number : this.state.number +1
//     //     })
//     // }
//     // handleDecrease(){
//     //     this.setState({
//     //         number : this.state.number -1
//     //     })
//     // }
//     //위 처럼 코딩하게 되면 나중에 버튼에서 클릭이벤트가 발생했을 때 this가 undefined로 나타나서 제대로 처리되지 않는다. 이는 함수가 버튼의 클릭이벤트로 전달이
//     //되는 과정에서 'this'와의 연결이 끊겨버리기 때문이다. 이를 고쳐주려면 constructor에서 
//     // constructor(props){
//     //     super(props);
//     //     this.handleIncrease = this.handleIncrease.bind(this);
//     //     this.handleDecrease = this.handleDecrease.bind(this);
//     // }
//     //처럼 해주거나 , 우리가 이전에 작성한 코드처럼 아예 화살표 함수 형태로 하면 this가 풀리는 것에 대한 걱정이 없다.


//     render(){
//         return(
//             <div>
//                 <h1>카운터</h1>
//                 <div>값 : {this.state.number}</div>
//                 <button onClick= {this.handleIncrease}>+</button>
//                 <button onClick= {this.handleDecrease}>-</button>
//                 {/* html 과 다른점 
//                 이벤트 이름을 설정할 때 camelCase로 설정해주어야한다. onClick, onmousedown은 omMouseDown,onchnage는 onChnage 이런식으로
//                 이벤트에 전달해주는 값은 함수여야 한다. 만약에 onClick = {this.hadelIncrease()} 이런식으로 하게 된다면, 렌더링을 할때마다 해당 함수가 호출이 된다.//#endregion
//                 이렇게 되면 문제가 발생한다. 렌더링 -> 함수호출 -> setState -> 렌더링 -> 함수호출 -> 무한반복 이 되어버린다. */}
//             </div>
//         )
//     }
// }

// //state는 동적인 데이터를 다룰때 사용
// //state를 정의할 때는 class fields문법을 사용해서 정의한다.

// //

// export default Counter;

// import React, { Component } from 'react';

// class Counter extends Component{
//     state = {
//         number :0
//     }
//     constructor(props){
//         super(props);
//         console.log('constructor');
//     }

//     componentWillMount(){
//         console.log('componentWillMount(deprecated)');
//     }
//     componentDidMount(){
//         console.log('componentDidMount');

//     }
//     shouldComponentUpdate(nextProps, nextState){
//         console.log('shouldComponentUpdate');
//         if(nextState.number % 5===0) return false;
//         return true;
//     }

//     componentWillUpdate(nextProps, nextState){
//         console.log('componentWillUpdate');

//     }
//     componentDidUpdate(prevProps, prevState){
//         console.log('componentDidUpdate');
//     }
//     handleIncrease = () =>{
//         const {number} = this.state;
//         this.setState({
//             number : number +1
//         })
//     }
//     handleDecrease = () =>{
//         this.setState(
//             ({number}) => ({
//                 number : number -1
//             })
//         )
//     }
    
//     render() {
//         console.log('render');
//         return (
//             <div>
//                 <h1>카운터</h1>
//                 <div>값 : {this.state.number}</div>
//                 <button onClick ={this.handleIncrease}>+</button>
//                 <button onClick = {this.handleDecrease}>-</button>
//             </div>
//         )
//     }
// }

// export default Counter;

import React, {Component} from 'react';
const Problematic = () =>{
    throw (new Error('버그가 나타났다!'));
    return (
        <div>

        </div>
    );
};

class Counter extends Component {

    state ={
        number : 0,
        error : false
    }

    componentDidCatch(error, info){
        this.setState({
            error: true
        });
    }
  
    handleIncrease = () =>{
        const {number} = this.state
        this.setState({
            number : number +1
        })
    }
    handelDecrease = () =>{
        this.setState(
            ({number})=>({
                number : number +1
            })
        )
    }
    
    render(){
        if(this.state.error) return (<h1>에러발생 !</h1>);
        if(!this.props.object || !this.props.array || this.props.array.lenght === 0) return null
        
        return(
            

            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                {this.state.number === 4&& <Problematic/>}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default Counter;

//렌더링 부분에서 오류가 발생하는 것을 사전에 방지해 주어야한다. 주로 자주 에러가 발생하는 이유
//1 존재하지 않는 함수를 호출하려고 할때(예를 들어서props로 받았을 줄 알았던 함수가 전달되지않았을때))this.props.onClick();
//2 배열이나 객체가 올 줄 알았는데, 해당 객체나배열이 존재하지 않을 때 this.props.object.value; this.props.array.length;
//이런한 것들은 render함수에서 다음과 같은 형식으로 막아 줄수 있다.
//render(){ if(!this.props.object || !this.props.array|| this.props.array.lengh === 0) return null}
//혹은 컴포넌트의 기본값을 설정하는 defaultProps를 통해서 설정하면 된다.
//class Sample extends component { static defaultProps = { onIncrement : () => conosle.warn('onIncrement is not defined'), object : {}, array : []}}