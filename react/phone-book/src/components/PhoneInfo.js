//각 전화번호 정보를 보여주는 컴포넌트

import React, {Component} from 'react';

class PhoneInfo extends Component{
    static defaultProps = {
        info : {
            name : '이름',
            phone : '010-0000-0000',
            id : 0
        }
    }
    state = {
        //수정 버튼을 눌렀을 때 editing 값을 true로 설정해줄것이다.
        //이 값이 true 일때에는, 기존에 텍스트 형태로 보여주던 값들을
        //input 형태로 보여주게 된다.
        editing : false,
        //input 의 값은 유동적이다. input 값을 담기 위해서 각 필드를 위한 값도 설정한다.
        name : '',
        phone : ''
    }

    handleRemove = () =>{
        //삭제 버튼이 클릭되면 onRemove에 id 넣어서 호출
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }
    //editing 값을 반전시키는 함수이다.
    //true -> false, false -> true
    handleToggleEdit = () =>{
        const {editing} = this.state;
        this.setState({editing : !editing});
        
    }
    //input에서 onChange 이벤트가 발생될때
    //호출되는 함수이다.
    handleChange = (e) =>{
        const {name, value} = e.target;
        this.setState({
            [name] :value
        });
    }
    componentDidUpdate(prevProps, prevState){
        //여기서는 editing값이 바뀔때 처리할 로직이 적혀있다.
        //수정을 눌렀으면, 기존의 값이 input에 나타나고,
        //수정을 적용할때, input의 값들을 부모한테 전달해준다.

        const {info, onUpdate} = this.props;
        if(!prevState.editing && this.state.editing){
            //editing값이 false -> true 로 전환 될 때
            //info 의 값을 state에 넣어준다.
            this.setState({
                name : info.name,
                phone : info.phone
            })
        }

        if(prevState.editing && !this.state.editing){
            //editing 값이 true -> false로 전환 될 때
            onUpdate(info.id, {
                name : this.state.name,
                phone : this.state.phone
            })
        }
    }

    shouldComponentupdate(nextProps, nextState){
        //수정 상태가 아니고, info 값이 같다면 리렌더링 안함
        if(!this.state.editing
            && !nextState.editing
            && nextProps.info === this.Props.info){
                return false;
            }
            //나머지 경우엔 리렌더링 함.
            return true;
    }

    render(){
        console.log('render PhoneInfo ' + this.props.info.id);
        const style ={
            border : '1px solid black',
            padding : '8px',
            margin : '8px'
        };

        const {
            name, phone, id
        }= this.props.info;

        const {editing} = this.state;

        if(editing){
            return (
                <div style = {style}>
                    <div>
                        <input
                            value = {this.state.name}
                            name = "name"
                            placeholder = "이름"
                            onChange = {this.handleChange}></input>
                    </div>
                    <div>
                        <input
                            value = {this.state.phone}
                            name = "phone"
                            placeholder = "전화번호"
                            onChange = {this.handleChange}></input>
                    </div>
                    <button
                        onClick = {this.handleToggleEdit}>적용</button>
                    <button
                        onClick = {this.handleRemove}>삭제</button>
                </div>
            );
        }

        else{
        return (
            
            <div style = {style}>
                <div>
                    <b>{name}</b>
                </div>
                <div>
                    {phone}
                </div>
                <button onClick= {this.handleToggleEdit}>수정</button>
                <button onClick = {this.handleRemove}>삭제</button>
            </div>
        )
        }
    }
}
export default PhoneInfo;

//state 내부의 값을 직접적으로 수정하면 안된다. -이를 불변성 유지라고 한다.
//기존의 배열에 기반하여 새 배열을 만들어내는 함수인 concat, slice, map, filter같은 함수를 사용해야한다.

//리액트에서 불변서 유지가 중요한 이유는 불변성을 유지해야, 리액트에서 모든것들이 필요한 상황세 리렌더링 되도록 설계 할 수 있고, 그렇게 해야 나중에 성능도 최적화 할 수 있기 때문이다.
//id 값의 경우 컴포넌트의 일반 클래스 내부 변수로서 선언, 컴포넌트 내부에서 필요한 값 중에서 렌더링 되는 것과 상관이 없는 것들은 굳이 state에 넣어줄 필요가 없다.
//데이터 렌더링 - 컴포넌트를 여러개 렌더링 하기 위해서는, 앵귤러 뷰처럼 디렉팁즈 같은  걸 사용 할 필요 없이, 그냥 자바스크립트 배열의 내장 함수인 map을 사용한다.
