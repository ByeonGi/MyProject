// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// import { App, Home, Login, Register, Wall } from 'containers';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from 'reducers';
// import thunk from 'redux-thunk';


// const store = createStore(reducers, applyMiddleware(thunk));

// const rootElement = document.getElementById('root');
// ReactDOM.render(
//     <Provider store={store}>
//         <Router history={browserHistory}>
//             <Route path="/" component={App}>
//                 <IndexRoute component={Home}/>
//                 <Route path="home" component={Home}/>
//                 <Route path="login" component={Login}/>
//                 <Route path="register" component={Register}/>
//                 <Route path="wall/:username" component={Wall}/>
//             </Route>
//         </Router>
//     </Provider>, rootElement
// );

import React from 'react';
import ReactDOM from 'react-dom';

//Container Components
import {App, Home, Login, Register} from 'containers';

//Router
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
//dispatcher가 action creator가 만든 action 객체 외에도 사용자가 만든 함수도 처리할 수 있게 해줌

const store = createStore(reducers, applyMiddleware(thunk));


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store = {store}>
        <Router history = {browserHistory}>
        
            <Route path = "/" component = {App}>
                <IndexRoute component = {Home}></IndexRoute>
                <Route path = "home" component = {Home}></Route>
                <Route path = "login" component = {Login}></Route>
                <Route path = "register" component = {Register}></Route>
                
            </Route>
        </Router>

    </Provider>
    , rootElement);