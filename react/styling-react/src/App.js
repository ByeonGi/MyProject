import React, { Component } from 'react';

// import Button from './components/Button';
import StyleButton from './components/StyledButton';


class App extends Component {
  render() {

    return (
      // <div className={[styles.box, styles.blue].join(' ')}>
      // {/* className이 여러개일때는 styles.box도 문자열 형태이기 때문에 사이에 공백을 두고 합쳐준다. */}
        
      // </div>
      <div>
        {/* <Button>버튼</Button> */}
        <StyleButton big>버튼</StyleButton>
      </div>
    );
  }
}

export default App;
