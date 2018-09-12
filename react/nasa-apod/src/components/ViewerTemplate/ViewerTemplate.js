import React from 'react';
import styles from './ViewerTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ViewerTemplate = ({ viewer, spaceNavigator }) =>{
    return(
        <div className = {cx('viewer-template')}>
            <header>
                Astronomy Picture of the Day
            </header>
            <div className = {cx('viewer-wrapper')}>
                {viewer}
                <div className = {cx('space-navigator-wrapper')}>
                    {spaceNavigator}
                </div>
                {/* space-navigator-wrapper 를 viewer-wrapper 내부에 넣어준 이유는, 추후 SpaceNavigator컴포넌트에서 위치선정 하게 될때
                viewer-wrapper의 크기에 기반하여 설정 할 것이다. */}
            </div>
            
        </div>
    )
}

export default ViewerTemplate;

//이 컴포넌트는 템플릿 컴포넌트로서 JSX형태로 Props인 viewer , spaceNavigator 를 받아와서 적당한 위치에 렌더링한다.