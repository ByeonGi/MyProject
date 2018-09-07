import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//사용자가 만든 컴포넌트를 불러올 때는 import를 사용해서 불러와준다.

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//브라우저 상에 우리의 리액트 컴포넌트를 보여주기 위해서는 ReactDOM.render함수를 사용합니다.
//첫 번째 파라미터는 렌더링 할 결과물이고, 두 번째 파라미터는 컴포넌트를 어떤 DOM에 그릴지 보여준다.
//id가 root인 DOM을 찾아서 그리도록 설정이 되어있다. 해당 DOM은 public/index.html파일에서 찾아 볼 수 있다.

registerServiceWorker();


