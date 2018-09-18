import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color : 'green',
        fontSize : '2rem',
        background : 'red'
    };
    return (
        <div>
            <ul>
                <li><NavLink exact to = "/" activeStyle ={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to = "/about" activeStyle = {activeStyle}>About</NavLink></li>
                <li><NavLink to = "/about/foo" activeStyle = {activeStyle}>About Foo</NavLink></li>
                <li><NavLink to = "/posts" activeStyle = {activeStyle}>Posts</NavLink></li>
                {/* <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/about/foo">About foo</Link></li> */}
            </ul>
            <hr/>
        </div>
    )
}
// Route를 지정할때 ㅈ처럼, 중첩될 수도 있는 라우트들은 exact로 설정을 해야한다.

export default Menu;