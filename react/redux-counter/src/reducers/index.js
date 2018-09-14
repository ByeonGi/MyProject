import {Map, List} from 'immutable';
import * as types from '../actions/ActionTypes';

const initialState = Map({
    counters : List([
        Map({
            color : 'black',
            number :0
        })
    ])
   
})
//{ }은 Map으로 [ ]은 List로 한다

//리듀서 함수를 정의한다.
function counter (state = initialState, action){
    //레퍼런스 생성
    // const { counters } = state;
    const  counters = state.get('counters');

    switch(action.type){
        //카운터를 새로 추가한다.
        case types.CREATE:
            // return {
            //     counters : [
            //         ...counters,
            //         {
            //             color : action.color,
            //             number : 0
            //         }
            //     ]
            // };
            return state.set('counters', counters.push(Map({
                color : action.color,
                number :0
            })))
        case types.REMOVE :
            // return {
            //     //slice를 이용하여 맨 마지막 카운터를 제외시킨다.
            //     counters : counters.slice(0, counters.length - 1)

            // };
            return state.set('counters', counters.pop());
        //action.index 번째 카운터를 number 에 1을 더한다
        case types.INCREMENT :
            // return {
            //     counters : [
            //         ...counters.slice(0, action.index),
            //         {
            //             ...counters[action.index],
            //             number : counters[action.index].number + 1
            //         },
            //         ...counters.slice(action.index + 1, counters.length)
            //     ]
            // };
            return state.set('counters', counters.update(
                action.index,
                (counter) => counter.set('number', counter.get('number') + 1)
            ));
        //action.index 번째 카운터의 number 에 1을 뺀다
        case types.DECREMENT :
            // return {
            //     counters : [
            //         ...counters.slice(0, action.index),
            //         {
            //             ...counters[action.index],
            //             number : counters[action.index].number -1
            //         },
            //         ...counters.slice(action.index +1, counters.length)
            //     ]
            // };
            return state.set('counters', counters.update(
                action.index,
                (counter) => counter.set('number', counter.get('number') -1)
            ))
        case types.SET_COLOR:
            // return {
            //     counter : [
            //         ...counters.slice(0, action.index),
            //         {
            //             ...counters[action.index],
            //             color : action.color
            //         },
            //         ...counters.slice(action.index + 1, counters.length)
            //     ]
            // };
            return state.set('counter', counters.update(
                action.index,
                (counter) => counter.set('color', action.color)
            ))
        default :
            return state;
    }

}

export default counter;