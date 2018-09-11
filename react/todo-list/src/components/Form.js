import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress, color}) => {
    return (
        <div className = "form">
            <input value = {value} onChange = {onChange} onKeyPress = {onKeyPress} style ={{color}}></input>
            <div className = "create-button" onClick = {onCreate}>추가</div>
        </div>
    )
}

export default Form;

//4가지의 props를 받아온다.
//value : 인풋의 내용
//onCreate : 버튼이 클릭 될 때 실행 될 함수
//onChange : 인풋 내용이 변경될 때 실행되는 함수
//onkeyPress : 인풋에서 키를 입력할 때 실행되는 함수, 이 함수는 나중에 Enter가 눌렸을 때 onCreate를 한것과 동일한 작업을 하기 위해서 사용한다.
