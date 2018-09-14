//숫자, 색상값과, 더하기, 빼기, 그리고, 색상변경 함수 3개를 props로 전달받는 컴포넌트 이다.

import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, index, onIncrement, onDecrement, onSetColor}) =>{

    //index에 각 이벤트가 실행 될 때 함수의 파라미터로 넣어서 실행하게 해주면 된다.
    return (
        <div
            className = "Counter"
            onClick = {() => onIncrement(index)}
            onContextMenu = {
                // 우클릭을 하여 메뉴가 열리는 이벤트를 의미하낟. 함수가 실행될때 e.preventDefault()를 실행하면 메뉴가 열리지않게된다.
                (e) =>{
                    e.preventDefault();
                    onDecrement(index);
                }
            }
            onDoubleClick = {() => onSetColor(index)}
            style = {{backgroundColor : color}}>

        {number}

        </div>
    )
}

Counter.propsTypes = {
    index : PropTypes.number,
    number : PropTypes.number,
    color : PropTypes.string,
    onIncrement : PropTypes.func,
    onDecrement : PropTypes.func,
    onSetColor : PropTypes.func
};

Counter.defaultProps = {
    index :0,
    number: 0,
    color : 'black',
    // 카운터의 기본 숫자는 o, 기본색상의 검정색이다.
    onIncrement : () => console.warn('onIncrement not defined'),
    onDecrement : () => console.warn('onDecrement not definde'),
    onSetColor : () => console.warn('onSetColor not defined')
};

export default Counter;