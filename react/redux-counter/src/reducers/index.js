// /*
//     리듀서는 액션의 type에 따라 변화를 일으키는 함수이다.
//     리듀서 파일에는 최초변화를 일으키기전,지니고 있어야 할 초기 상태가 정의되어야 한다.
// */


// import * as types from '../actions/ActionTypes';

// //초기 상태를 정의한다.
// const initialState = {
//     color :'black',
//     number : 0
// }

// /*
//     리듀서 함수에는 state와 action을 파라미터로 가지는 함수이다. 
//     그 내부에서 switch문을 통하여 action.type에 따라 상태에 다른 변화를 일으키면 된다.

//     주의 할 점은 state를 직접 수정하면 절대 안되고, 기존의 state 값에 덮어쓴 새 상태객체를 만드는 방식으로 해야한다.
// */

// /*
//     리듀스 함수를 정의한다. 리듀스는 state와 action을 파라미터로 받는다. state가 undefined일때 (스토어가 생성될때) state의 기본ㄱ밧을 initialState로 사용한다
//     action.type에 따라 다른 작업을 하고, 새 상태를 만들어서 반환한다.
//     이 때 주의 할 점은 state 를 직접 수정하면 안되고,
//     기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야한다.
// */
// function counter(state = initialState, action){
//     switch(action.type){
//         case types.INCREMENT:
//             return {
//                 ...state,
//                 number : state.number+1
//             };
//         case types.DECREMENT:
//             return {
//                 ...state,
//                 number : state.number-1

//             };
//         case types.SET_COLOR:
//             return {
//                 ...state,
//                 color : action.color
//             };

//         default :
//             return state;
//     }
// };

// export default counter;
import number from './number';
import color from './color';

import { combineReducers } from 'redux';

/*
    서브 리듀서들을 하나로 합친다.
    combineReducers를 실행하고 나면, 나중에 store의 형태가 파라미터로 전달한 객체의 모양대로 만들어진다.
    지금의 경우 :
    {
        numberData : {
            number : 0
        },
        colorData : {
            color : 'black'
        }
    }
    로 만들어진다.

*/
const reducers = combineReducers ({
    numberData : number,
    colorData : color
});
export default reducers;