import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return this.props.checked !== nextProps.checked;
    }
    
    render(){
        const {text, checked, id, color, onToggle, onRemove} = this.props;
        //text: todo 내용
        //checked : 체크박스 상태
        //id : todo 의 고유 아이디
        //onToggle : 체크박스를 키고 끄는 함수
        //onRemove : 아이템을 삭제시키는 함수
        console.log(id);

        return(
            <div className = "todo-item" onClick ={()=>onToggle(id)}>
            {/* onToggle과 onRemove는 id를 파라미터로 넣으면 해당 id를 가진 데이터를 업데이트 한다. 파라미터를 넣어줘야 하기 때문이다.
            onClick={() => onToggle(id)} 와 같은 형식으로 작성
            onClick = {onToggle{id}} 와 같은 형식으로 하고 싶다면 절대 안된다. 
            위처럼 하면 해당 함수가 렌더링 될때 호출이 된다. 해당 함수가 호출되면 데이터가 변경 될 것이고, 데이터가 변경되면 또 리렌더링이 된다. 무한반복된다. */}
            {/* 해당 컴포넌트의 최상위 DOM의 클릭이벤트에는 onToggle을 넣어주고 ,X가 있는 부분에선 onRemove를 넣어주었다. */}
                <div className = "remove" onClick ={(e)=>{
                    e.stopPropagation();//onToggle 이 실행되지 않도록 함(이 작업을 하지 않으면 onRemove함수만 실행 되는 것이 아니라, 해당 DOM의 부모의 클릭 이벤트에 연결되어있는 onToggle이 실행되는데)
                    //onRemove-> onToggle 이렇게 실행이 되면서 코드가 의도치 않게 작동하여 삭제가 제대로 진행되지 않는다.
                    //e.stopPropagation() 은 이벤트의 확산을 멈춰준다. 즉, 삭제부분에 들어간 이벤트가 해당 부모의 이벤트까지 전달되지 않도록 해준다. onToggle은 실행되지 않고 onRemove만 실행된다.
                    onRemove(id)
                }}>&times;
                </div>
                <div style={{color}} className = {`todo-text ${checked ? ' checked' : ''}`} >
                {/* <div className={`todo-text ${checked && 'checked'}`}> */}
                {/* // == "todo-text" + checked && 'checked' */}
                {/* 동적인 클래스를 적용할 때는 , 위와같이 문자열을 상황에 따라 변조하면 된다. classnames를 사용하면 훨씬 쉽게 할 수 있다. 
                예) classnames('todo-text', { checked })  */}
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">&#x2713;</div>)
                    
                    
                }
            </div>
        )
    }
}
export default TodoItem;