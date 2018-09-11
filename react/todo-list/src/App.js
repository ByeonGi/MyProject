import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from'./components/TodoItemList';
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];


class App extends Component {

  id = 3;



  state = {
    input : '',
    todos :[
      {id : 0, text : ' 리액트 소개',checked :false},
      {id : 1, text : ' 리액트 소개',checked : true},
      {id : 2, text : ' 리액트 소개',checked :false}
    ],
    color : '#343a40'
  }

  // 초기 state에는 input의 값과, todos 배열의 기본 아이템 3개를 넣어주었다. todo 객체들을 구분하기 위하여 우리는 id 값을 지정해준다.

  handleChange = (e) =>{
    this.setState({
      input : e.target.value //input 의 다음 바뀔 값

    });
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input : '',//인풋 비우고
      //concat 을 사용하여 배열에 추가
      todos : todos.concat({
        id : this.id++,
        text : input, 
        checked : false,
        color
      })
      //배열에서 concat을 이용해서 추가한 이유 push를 통하여 데이터를 추가하면 배열에 값이 추가되긴 하지만 가르키고 있는 배열을 똑같기 때문에 비교할 수 없다.
      //let arrayOne = []; let arrayTwo = arrayOne; arrayOne.push(1); console.log(arrayOne === arrayTwo)//true; 
      //반면, concat 의 경우엔 새배열을 만들기 때문에 비교할 수 있다.
      //let arrayOne = []; let arrayTwo = arrayOne.concat(1); consol.log(arrayOne === arrayTwo); //false
    });
  }
  handlekeyPress = (e) =>{
    //눌려진 키가 Enter면 handleCreate 호출
    if(e.key === "Enter"){
      this.handleCreate();
    }
  }
  
  // handleToggle = (id) =>{
  //   const {todos} = this.state;

  //   //파라미터로 받은 id를 가지고 몇번째 아이템인지 찾는다.
  //   const index = todos.findIndex(todo => todo.id === id);
  //   const selected = todos[index];//선택한 객체

  //   const nextTodos = [...todos];//배열을 복사

  //   //기존의 값들을 복사하고, checked 값을 덮어쓰기
  //   nextTodos[index] = {
  //     ...selected,
  //     checked : !selected.checked
  //   };
  //   this.setState({
  //     todos : nextTodos
  //   });
  // }


  //===>

  handleToggle = (id) =>{
    const {todos} = this.state;
    const index = todos.findIndex(todo=> todo.id ===id);

    const selected = todos[index];

    this.setState({
      todos :[
        ...todos.slice(0,index),
        {
          ...selected,
          checked : !selected.checked
        },
        ...todos.slice(index +1, todos.length)
      ]
    });
  }

  handleRemove = (id) =>{
    const {todos} = this.state;
    this.setState({
      todos : todos.filter(todo => todo.id !== id)
      // 자바스크립트 배열의 내장함수인filter를 사용했다 즉, 파라미터로 받아온 id를 갖지 않고 배열을 새로 생성해낸것이다.
      //이를 통하여 우리가 지정한 id를 배제한 배열이 재 탄생한다.
    });
  }

  handleSelectColor = (color) =>{
    this.setState({
      color
    })
  }

 
  render() {
    const {input, todos, color} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor      
    } = this;
    //위처럼 비구조화 할당을 했다. 이렇게 함으로써 this.handleChange, this.handleCreate, this.handleKeyPress 이런식으로 계속 this를 붙여줘야하는 작업을 생략 할수 있다.
    return (
      // <div>
      //   <TodoListTemplate form = {<div>이렇게 함</div>}>
      //   {/* form은 나중에 인풋과 버튼이 들어가있는 컴포넌트를 렌더링 할 때 사용 이것도 마치 children을 사용하듯이 JSX현태로 전달을 해준다.*/}
      //     <div>여기엔 children 하이하이</div>
      //   </TodoListTemplate>
      //   {/* JSX를 컴포넌트의 Props로 넣어주려면 위와 같은 방법은 정말 편하다. */}
      // </div>
      <TodoListTemplate form={<Form
        value={input}
        onKeyPress = {handleKeyPress}
        onChange = {handleChange}
        onCreate = {handleCreate}
        color = {color}
      />}
        palette = {<Palette colors = {colors} selected ={color} onSelect = {handleSelectColor}></Palette>}
      >
        
        <TodoItemList todos = {todos} onToggle = {handleToggle} onRemove = {handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;
