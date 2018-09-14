import * as types from '../actions/ActionTypes';

const initialState = {
    counters :[
        {
            color : 'black',
            number : 0
        }
    ]
   
}

//리듀서 함수를 정의한다.
function counter (state = initialState, action){
    //레퍼런스 생성
    const { counters } = state;

    switch(action.type){
        //카운터를 새로 추가한다.
        case types.CREATE:
            return {
                counters : [
                    ...counters,
                    {
                        color : action.color,
                        number : 0
                    }
                ]
            };
        case types.REMOVE :
            return {
                //slice를 이용하여 맨 마지막 카운터를 제외시킨다.
                counters : counters.slice(0, counters.length - 1)

            };
        //action.index 번째 카운터를 number 에 1을 더한다
        case types.INCREMENT :
            return {
                counters : [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number : counters[action.index].number + 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        //action.index 번째 카운터의 number 에 1을 뺀다
        case types.DECREMENT :
            return {
                counters : [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number : counters[action.index].number -1
                    },
                    ...counters.slice(action.index +1, counters.length)
                ]
            };
        case types.SET_COLOR:
            return {
                counter : [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color : action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        default :
            return state;
    }

}

export default counter;