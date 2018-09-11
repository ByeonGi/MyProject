//TodoItem  컴포넌트 여러개를 렌더링해주는 역할
//리스트를 렌더링 하게 될때는 클래스형 컴포넌트로 작성 - 클래스형 컴포넌트로 작성해야 나중에 컴포넌트 성능을 최적화 할 수 있다.

import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component
{
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }
    render(){
        const {todos, onToggle, onRemove} = this.props;
        //todos : todo 객체들이 들어있는 배열
        //onToggle : 체크박스를 키고 끄는 함수
        //onRemove : 아이템을 삭제시키는 함수

        const todoList = todos.map(
            ({id, text, checked, color}) => (
                <TodoItem
                id={id}
                text ={text}
                checked ={checked}
                color = {color}
                // {...todo}로 표현가능<< 내부의 값들이 모두 자동으로 props로 설정된다.
                onToggle = {onToggle}
                onRemove = {onRemove}
                key={id}></TodoItem>
            )
            // 원래는 const todoList = todos.map(todo => ...)의 형태여야하지만 함수의 파라미터 부분에서 비구조화 할당을 하여 객체 내부의 값들을 따로 레퍼런스를 만들어주었다.

        )


        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;