import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({children, ...rest}) =>{
    return(
        <div className={cx('button')} {...rest}>
            {children}
        </div>
    );
};

export default Button;
//CSS Module 형식으로 스타일을 설정하였고 , 함수형 컴포넌트를 만들어 주었다. props에서는 children과 ...rest가 있다.
//rest는 컴포넌트가 받을 모든 props를 칭한다. 비구조화 할당 문법에서 ...foo 이런식으로 입력하면 비구조화 할당을 할때에 따로 지정되지 않은 것들은 foo에 객체형태로 담겨진다.

