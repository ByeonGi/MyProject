var li = ['a', 'b', 'c', 'd', 'e'];
li.push('f');
//배열 마지막 인덱스에 추가
li =li.concat(['f', 'g']);
//복수의 원소를 배열에 추가하는 방법
li.unshift('z');
//배열의 시작점에 원소를 추가
li.splice(2, 1, 'B');
//첫번째 인자의 값퉈 두번째 인자에 해당하는 원소의숫자만큼 뱅ㄹ로부터 제거한다. 세번째 인자를 첫번째 ㅇ니자의 우너소뒤에 추가한다.

li.shift();
//배열의 첫번째 원소를 제거
li.pop();
//배열 끝점의 원소를 배열 li에서 제거한다.

li.sort();
// 배열을 정렬한다. a,b,c,d
li.reverse();
//반대로 정렬
console.log(li);


//참고자료 https://opentutorials.org/course/743/4736