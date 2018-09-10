//여러개의 PhoneInfo 컴포넌트들을 보여준다.

import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component{
    static defaultProps = {
        data : [],
        //만약에 key를 부여하지 않으면, 배열의 index값이 자동으로 key로 설정이되는데,
        list : [],
        onRemove : () => console.warm('onRemove not defined'),
        onUpdate : () => console.warm('onUpdate not defined')
    }
    
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.data !== this.props.data;
    }
    render(){
        //App이 리렌더링 됨에 따라 PhoneInfoList도 리렌더링이 된다. 실제로 변화가 일어나진 않으니 지금 virtual DOM을 리렌더링 한다.
        //이렇게 낭비되는 자원을 아끼끼 위해서 shouldComponentUpdate LifeCycle API를 사용한다.
        console.log('render PhoneInfoList');
        
        // const {data} = this.props;
        const {data, onRemove, onUpdate}  = this.props;
        const list = data.map(
            info => (
            <PhoneInfo
                key = {info.id}
                info = {info}
                onRemove= {onRemove}
                onUpdate = {onUpdate}
                />)
        );

        return (
            <div> {list} </div>
        )
    }
}
export default PhoneInfoList;


