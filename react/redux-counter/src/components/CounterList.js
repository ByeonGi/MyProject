// 여러 카운터들을 렌더링 해줄 CounterList 컴포넌트
//이 컴포넌트는 카운터 객체들의 배열 counters와 , 카운터를 조작하는 onIncrement, onDecrement, onSetColor함수를 props로 전달받는다.
//counters를 Counter 컴포넌틑 배열로로 변환하는 과정에선 , key를 배열의 index로 설정하고, index값도 컴포넌트에 props로 전달 해준다. 
// 그리고 color 값과 number 값을 각각 설정하는 대신에 {...counter} 으로 객체를 풀어서 한꺼번에 전달해줄수도 있다.

import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

import './CounterList.css';

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {
    const counterList = counters.map(
        (counter, i) => (
            <Counter
                key = {i}
                index = {i}
                {...counter}
                onIncrement = {onIncrement}
                onDecrement = {onDecrement}
                onSetColor = {onSetColor}
            ></Counter>
        )
    );

    return (
        <div className = "CounterList">
            {counterList}
        </div>
    )
}

CounterList.propTypes = {
    counters : PropTypes.arrayOf(PropTypes.shape({
        color : PropTypes.string,
        number : PropTypes.number
    })),
    onIncrement : PropTypes.func,
    onDecrement : PropTypes.func,
    onSetColor : PropTypes.func
}

CounterList.defaultProps = {
    counters : [],
    onIncrement : () => console.log('onIncrement not defined'),
    onDecrement : () => console.log('onDecrement not defined'),
    onSetColor : () => console.log('onSetColor not defined')
}

export default CounterList;