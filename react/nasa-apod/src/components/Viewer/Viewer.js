//해당 컴포넌트는 이미지 혹은 동영상을 보여주는 컴포넌트이다. 데이터의 형식은 mediaType에  video 혹은 image라는 값으로 전달이 될 것이고 이 에 따라 url 을 사용하여 동영상이나 이미지를
//보여주게 된다. 추가적으로 loading값은 데이터를 불러올 때 로딩표시를 하기 위하여 사용되는 props이다.

import React from 'react';
import styles from './Viewer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Viewer = ({mediaType, url, loading}) =>{
    if(!url) return null;

    //mediaType에 video 혹은 image라는 값으로 전달이 된다.
    //url을 사용하여 동영상이나 이미지를 보여준다.
    //loading값은 데이터를 불러올때 로딩표시를 하기 위하여 사용되는 props이다.
    return(
        <div className = {cx('viewer')}>
            {
                mediaType === 'image' ? (
                    <img onClick={() => window.open('url')} src = {url} alt ="space"></img>
                ) : (
                    <iframe title="space-video" src = {url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
                )
            }
        </div>
    )
}

export default Viewer;