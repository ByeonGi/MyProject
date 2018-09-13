import { createAction, handleActions } from 'redux-actions';

// 카운터 관련 상태 로직
//액션 타입을 정의해준다.
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

//액션 생성 함수를 만든다.
//이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내준다.
// export const increment = () => ({type : INCREMENT});
// export const decrement = () => ({type : DECREMENT});
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

//모듈의 초기 상태의 정의합니다

const initialState = {
    number : 0
};

//리듀서를 만들어서 내보내준다.

// export default function reducer(state = initialState, action){
    //리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환한다.
    //state = initialState 이렇게 하면 initialState가 기본값으로 사용된다.
    // switch(action.type){
    //     case INCREMENT :
    //         return {number : state.number + 1};
    //     case DECREMENT : 
    //         return {number : state.number - 1};
    //     default :
    //         return state;//아무 일도 일어나지 않으면 현재 상태를 그대로 반환한다.
    // }
// }

export default handleActions({
    [INCREMENT] : (state, action) =>{
        return { number : state.number + 1};
    },
    [DECREMENT] : ({ number }) => ({ number : number - 1})
}, initialState);