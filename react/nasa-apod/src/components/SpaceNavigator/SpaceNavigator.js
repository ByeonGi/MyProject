import React from 'react';
import styles from './SpaceNavigator.scss';
import classNames from 'classnames/bind';
// import LeftIcon from 'react-icons/lib/md/chevron-left';

// import RightIcon from 'react-icons/lib/md/chevron-right';
//버전이 달라서 작동 하지 않음

const cx = classNames.bind(styles);

const SpaceNavigator = ({ onPrev, onNext }) =>{
    return (
        <div className = {cx('space-navigator')}>
            <div className = {cx('left', 'end')}>
                <div className={cx('circle')} onClick={onPrev}>
                    왼쪽
                </div>
            </div>
            <div className={cx('right', 'end')}>
                <div className={cx('circle')} onClick={onNext}>
                    오른쪽
                </div>
            </div>
        </div>
    )
}
export default SpaceNavigator;
//앞, 혹은 뒤로 넘기는 버튼들을 내장하고 있다. 각 버튼에 연결될 함수 onPrev와 onNext를 props로 받는다.