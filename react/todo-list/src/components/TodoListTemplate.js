import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({ form, palette, children}) =>{
    //이 컴포넌트는 함수형 컴포넌트이다. 파라미터로 받게되는 것은 props인데 이를 비구조화 할당하여 원래 (props) => {...}를 해야하는 것을 ({form, children}) => {...} 형태로 작성했다.
    //위의 두가지 매개변수는 props를 받게 된다.
    
    return(
        <main className = "todo-list-template">
            <div className = "title">
                오늘 할 일
            </div>
            <section className ="palette-wrapper">
                {palette}
            </section>
         
            <section className="from-wrapper">
                {form}
            </section>
            <section className = "todos-wrapper">
                {children}
            </section>
            
        </main>
    )
}
export default TodoListTemplate;