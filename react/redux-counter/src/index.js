import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

/*
    Store는 리덕스에서 가장 핵심적인 인스턴스이다. 안에 현재 상태를 내장하고 있고, 구독 중인 함수들이 상태가 업데이트 될 때마다 다시 실행해줌
*/
import { createStore } from 'redux';
import reducers from './modules';
/*
    Provider 는 react-redux 라이브러리에 내장되어있는, 리액트 앱에 store를 손쉽게 연동 할 수 있도록 도와주는 컴포넌트 이다
    이 컴포넌트를 불러온 다음에 연동 할 컴포넌트를 감싸준 다음에 Provider 컴포넌트의 props로 store 값을 설정해주면 된다.
*/
import { Provider } from 'react-redux';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
