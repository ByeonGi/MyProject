//여러개의 PhoneInfo 컴포넌트들을 보여준다.

import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component{
    static defaultProps = {
        data : []
        //만약에 key를 부여하지 않으면, 배열의 index값이 자동으로 key로 설정이되는데,
    }
    render(){
        const {data} = this.props;
        const list = data.map(
            info => (<PhoneInfo key = {info.id} info = {info}/>)
        );

        return (
            <div> {list} </div>
        )
    }
}
export default PhoneInfoList;
