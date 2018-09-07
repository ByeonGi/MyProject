// import React, {Component} from 'react';

// class MyName extends Component{
//     render(){
//         return(
//             <div>안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다.</div>
//         )
//     }
// }

// export default MyName;

//defaultProps
//가끔은 실수로 props를 빠뜨려먹을때가 있다. 혹은 특정 상황에 props를 일부러 비워야 할때도 있다. 그러한 경우에, props의 기본값을 설정해줄수 있다.


// import React, {Component} from 'react';

// class MyName extends Component{
//     render(){
//         return (
//             <div>안녕하세요 제 이름은 <b>{this.props.name}</b>입니다.</div>
//         );
//     }
// }

// MyName.defaultProps = {
//     name : '기본이름'
// };

// export default MyName;

//함수형 컴포넌트
//단순히 props만 받아와서 보여주기만 하는 컴포넌트의 경우엔 더 간편한 문법으로 작성할 수 있는 방법이 있다.
//함수형태로 작성하는 것, 한번 만들었던 MyName 컴포넌트를 다시 작성해보자

import React from 'react';

const MyName = ({name})=>{
    return (
        <div>안녕하세요 ! 제 이름은 {name}입니다.</div>
    )
}

export default MyName;

//컴포넌트와 클래스형 컴포넌트의 주요 차이점은, state와 LifeCycle 이 빠져있다.
// 그래서, 컴포넌트 초기 마운트가 아주 미세하고 빠르고, 메모리 자원을 덜 사용한다. 
// 컴포넌트를 무수히 많이 렌더링 하게 되는게 아니라면 성능적으로 큰 차이가없다.
