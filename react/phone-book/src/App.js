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
        ],
        keyword : ''
    }
    handleChange = (e) =>{
      this.setState({
        keyword : e.target.value,
      });
    }
    handleCreate = (data) =>{
      const {information} = this.state;
      this.setState({
        information : information.concat({id : this.id++, ...data})
      })
      console.log(data);
    }
    handleRemove = (id) =>{
      const {information} = this.state;
      this.setState({
        information : information.filter(info => info.id !==id)
      })
    }
    handleUpdate = (id, data) =>{
      const {information} = this.state;
      this.setState({
        information : information.map(
          info => id === info.id
          ? {...info, ...data}//새 개게를 만들어서 기존이 값과 전달받은 data를 덮어씀
          : info//기존의 값을 그대로 유지
        )
      })
    }
    render(){
      const { information, keyword } = this.state;
      const filteredList = information.filter(
        info => info.name.indexOf(keyword) !==-1
      );
      return (
        
        <div>
          <PhoneForm
            onCreate = {this.handleCreate}
          />
          <p>
            <input
            placeholder = "검색 할 이름을 입력하세요"
            onChange = {this.handleChange}
            value = {keyword}>
            </input>
          </p>
          <PhoneInfoList 
            data = {filteredList}
            onRemove={this.handleRemove}
            onUpdate={this.handleUpdate}/>
          {/* {JSON.stringify(information)} */}
        </div>
      )
   }
}

export default App;

//데이터 렌더링 


//const modifedArray = array.map(item => item.id ===1 ? ({...item, text : 'Korea'}) : item)
//id가 일치하면 새객체를 만들고, 기존의 내용을 집어넣고, 원하는 값 덮어쓰기
//바꿀 필요 없는 것들은 그냥 기존 값 사용