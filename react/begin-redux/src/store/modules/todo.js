import { createAction, handleActions } from 'redux-actions';
import {Map, List} from 'immutable';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0; // todo  item에 들어갈 고유 값

const initialState = Map({
    input : '',
    todos : List()
});

export default handleActions ({
    [CHANGE_INPUT] : (state, action) => state.set('input', action.playload),
    [INSERT] : (state, {playload :text}) =>{
        //위 코드는 action 객체를 비구조화 할당하고, payload 값을 text하고 부르겠다는 의미다.
        const item = Map({id : id ++, checked : false , text}); //하나 추가 할 때마다 id 값을 증가시켜준다.
        return state.update('todos', todos => todos.push(item));
    },

    [TOGGLE] : (state, {playload : id}) => {
        //id 값을 가진 index를 찾아서 checked 값을 반전시킨다.
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.updateIn(['todos', index, 'checked'], checked => !checked);

    },
    [REMOVE] : (state, {payload : id}) => {
        //id 값을 가진 index를 찾아서 지운다.
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.deleteIn(['todos', index]);
    }
}, initialState);

