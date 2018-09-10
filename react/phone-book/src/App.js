import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component{
  id= 2;
    //각 데이터를 식별하기 위함이다.
    // 컴포넌트의 일반 클래스 내부 변수로서 선언, 컴포넌트 내부에 필요한 값 중에서 , 렌더링 되는 것과 상관없는 것들은 굳이 state에 넣어줄 필요가 없다.
    // 
    state = {
        information : [
            {
                id : 0,
                name : "최진혁",
                phone : '010-0000-0000'
            },
            {
                id : 1,
                name : "위승현",
                phone : '010-0000-0001'
            }
        ]
    }
  handleCreate = (data) =>{
    const {information} = this.state;
    this.setState({
      information : information.concat({id : this.id++, ...data})
    })
    console.log(data);
  }
  render(){
    const { information } = this.state;
    return (
      
      <div>
        <PhoneForm
          onCreate = {this.handleCreate}
        />
        <PhoneInfoList data = {this.state.information}/>
        {/* {JSON.stringify(information)} */}
      </div>
    )
  }
}

export default App;

//데이터 렌더링 