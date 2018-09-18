import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu';
class App extends Component{
    state = {
        SplitMe : null,
    }

    showSplitMe = () =>{
        //비동기적으로 코드를 불러온다. 함수의 결과는 Promise를 반환한다.
        //import() 는 모듈의 전체 네임스페이스를 불러오므로, default를 직접 지정해주어야한다.
        import('components/SplitMe').then(({default : Component})=> {
            this.setState({
                SplitMe : Component
            });
        });
        // import() 은Promise를 반환하고, 해당 Promise가 resolve하는 값은 모듈의 전체 네임스페이스이다. then() 안에 들어있는 함수의 파라미터에 ({default : Component})
        //가 들어갔지 이는 비 구조화 할당 문법의 활용법이다. 결과값 객체 안에 있는default 를 Component라는 이름을 할당해준다.
    }

    render(){
        const { SplitMe } = this.state;//state에 담겨있는 splitMe에 대한 레퍼런스
        return(
            <div>
                <Menu/>
                { SplitMe && <SplitMe/> /* SplitMe 가 유효하면 렌더링을 해준다.*/}
                <button onClick = {this.showSplitMe}>ClickMe</button>
                <Route exact path ="/" component = {Home}/> 
                <Route path = "/posts" component = {Posts}/>
                {/* 주어진 경로와 정호가히 맞아 떨어져야만 설정한 컴포넌트를 보여준다 */}
                <Switch>
                    <Route path = "/about/:name" component = {About}/>
                    <Route path = "/about" component = {About}/> 
                </Switch>
                {/* URL의 params를 설정할 때에는 :foo의 형식으로 설정한다. 이렇게 하면 foo라는 parmas가 생긴다. */}
            </div>
        )
    }
}

export default App;