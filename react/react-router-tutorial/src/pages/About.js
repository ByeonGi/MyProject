import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) =>{
    const query = queryString.parse(location.search);
    console.log(query);

    const detail = query.detail === 'true';
    return (
        <div>
            <h2>About {match.params.name}</h2>
            {/* name 이라는 parmas를 만들고 이값을 match.params.name을 통해 확인 할 수 있다. */}
            {detail && 'detail : blahblah'}
            {/* URL 쿼리를 만들 때 주의 할 점은 받아오는 값들이 모두 문자열이라서 비교 해야 할 땐 boolean을 불러오던 숫자를 불러오던 문자열 형태로 비교를 하거나 알맞은 형태로 변환을시킨 다음에 비교해야함 */}
        </div>
    )
}
export default About;