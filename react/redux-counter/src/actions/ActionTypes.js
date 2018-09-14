/*
    Action의 종류들의 선언합니다.
    앞에 export를 붙임으로서 , 나중에 이것들을 불러올때,
    import * as types from './ActionTypes'을 할 수 있다.

*/
/*

    여러개의 카운터를 동시에 다루기 위해서, 먼저 액션들을 고친다. \
    우선 ActionTypes부터 고친다. 이번에 카운터를 추가하고, 제거하는 CREATE와 REMOVE이 추가되었다.

*/

export const CREATE = "CREATE";
export const REMOVE = "REMOVE";
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COLOR = 'SET_COLOR';

