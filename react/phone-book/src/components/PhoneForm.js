// import React, {Component} from 'react';

// class PhoneForm extends Component {
//     state = {
//         name : '',
//         phone : ''
//     }
//     handleChange = (e) =>{
//         this.setState({
//             [e.target.name] : e.target.value
            
//         });
//     }
//     handleSubmit = (e) =>{
//         //페이지 리로딩 방지
//         e.preventDefault();//원래 이벤트가 해야하는 작업을 방지시킨다는 의미이다.
//         //상태 값을 onCreate를 통하여 부모에게 전달
//         this.props.onCreate(this.state);
//         //상태 초기화
//         this.setState({
//             name : '',
//             phone : ''
//         })

//     }
//     render(){
//         return (
//             <form onSubmit = {this.handleSubmit}>
//                 <input 
//                     placeholder = "이름"
//                     value = {this.state.name}
//                     //데이터를 등록하고 나면 name값을 공백으로 초기화 해주는데 그렇게 초기화 됐을 때 input에도 반영이 되도록 value값을 설정해주었다.
//                     onChange = {this.handleChange}
//                     // onChange는 input의 텍스트 값이 바뀔때마다 발생하는 이벤트이다.
//                     name = "name"
//                 />
//                 <input
//                 placeholder = "전화번호"
//                 value = {this.state.phone}
//                 onChange = {this.handleChange}
//                 name = "phone"
//                 />
//                 <button type="submit" >등록</button>

//                 {/* <div>{this.state.name} {this.state.phone}</div> */}
//             </form>
//         )
//     }
// }
// //onChange 이벤트가 발생하면, e.target.value 값을 통하여 이벤트 객체에 담겨있는 현재의 텍스트 값을 읽어올 수 있다.
// //render 부분에서 input을 렌더링 할 때에는 value값과 onChange값을 넣어주었다.
// //onChange에 handleChange를 설정하였다. 
// export default PhoneForm;

import React, {Component} from 'react';

class PhoneForm extends Component{
    state = {
        name : '',
        phone : ''
    }
    handleChange= (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name : '',
            phone : ''
        })
    }
    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <input 
                placeholder = "이름"
                value={this.state.name}
                onChange = {this.handleChange}
                name = "name"></input>
                <input
                placeholder = "전화번호"
                value = {this.state.phone}
                onChange = {this.handleChange}
                name = "phone"></input>
                <button
                type = "submit">등록</button>
            </form>
        )
    }
}

export default PhoneForm;