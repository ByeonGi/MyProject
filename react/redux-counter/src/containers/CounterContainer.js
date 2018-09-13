import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

//store 안의 state 값을 props로 연결해준다.
const mapStateToProps = (state) => ({
    color : state.colorData.color,
    number : state.numberData.number
})

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만든후, 이를 props로 연결해준다.

*/

const mapDispatchToProps = (dispatch) =>({
    onIncrement : () => dispatch(actions.increment()),
    onDecrement : () => dispatch(actions.decrement()),
    onSetColor : () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
})
/*
    Counter 컴포넌트의 Container 컴포넌트 
    COunter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 한다.

*/

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;

//상태를 연결시키는 함수는mapStateToProps로 , 액션함수를 연결시키는 함수는 mapDispatchToProps로 만들어서,이를 connnect에 전달해주고, 그렇게 전달받은 함수에 우리가 아까 만든 Counter 컴포넌트를 전달하여 이를 내보냈다.

