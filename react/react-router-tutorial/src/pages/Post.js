import React from 'react';

const Post = ({match, location}) => {
    return (
        <div>
            포스트 {match.params.id}
            <div>
                location.pathname : {location.pathname}
            </div>
            <div>
                match.path : {match.path}
            </div>
            <div>
                match.url : {match.url}
            </div>
        </div>
    )
}
export default Post;