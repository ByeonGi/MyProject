import React from 'react';

const SplitMe = () =>{
    return (
        <h3>
            SplitMe
        </h3>
    );
};

export default SplitMe;

// 비동기적으로 파일을 불러오기 위해서, import 를 최상단에서 하는 것이 아니라, 특정 함수에서 불러오도록 작성한다  LifeCycle 메소드 안에 넣을 수 있다. 우리가 따로 함수를 지정해줄수도 있겠다.