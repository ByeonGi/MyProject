import React, {Component} from 'react';

class Counter extends Component{
    state = {
        number : 0
    }
    handleIncrease = () =>{
        this.setState({
            number : this.state.number + 1

        });


    }
    handleDecrease = () =>{
        this.setState({
            number : this.state.number -1
        });
    }

    render(){
        return(
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                <button onClick= {this.handleIncrease}>+</button>
                <button onClick= {this.handleDecrease}>-</button>
            </div>
        )
    }
}

//state는 동적인 데이터를 다룰때 사용
//state를 정의할 때는 class fields문법을 사용해서 정의한다.