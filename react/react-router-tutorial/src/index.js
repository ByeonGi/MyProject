import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Root from './client/Root';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root')
    )
}
render(Root)

if(module.hot){
    module.hot.accept('./client/Root', () => {render(Root)})
}


registerServiceWorker();
//AppContainer는 개발환경에서 모듈 리로딩 및 에러 처리를 도와주는 컴포넌트이다. AppContainer는 프로덕션 환경에서는 자동으로 비활성화 된다.\
//module.hot관련 코드가 사용되었는데, 이 코드는 웹팩관련 코드이다. 이 코드는 변화가 발생했을 때, 모듈 업데이트를 허용해주고, 해당 모듈들의 업데이트도 허용해준다.