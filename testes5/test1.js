var arr = [1,2,3,4,5,6,7,8,9,10].filter(function(num, idx){
    return num %2 ==0;
});

//array.prototype.filter 
//반복문을 내부 반복으로 숨겨 배열을 필터링 할때 사용함
//javaStream의 filter와 동일
//stream 과 한가지 다른점은 stream은 중간 연산이라는 것이 존재했지만 자바스크립트엔 그런거 없음

var arr2 = [1,2,3,4,5,6,7,8,9,10].map(function(num, idx){
    return num *2;
});

//array.prototype.map
//반복문을 내부 반복으로 숨겨 배열 요소를 변환할때 사용
//javaStream으 map과 동일

[1,2,3,4,5,6,7,8,9,10].forEach(function(num, idx){
    console.log(num);
})

//array.prototype.forEach
//반복문을 내부 반복으로 숨겨 배열 요소를 순회할 때 사용
//java stream의 forEach와 동일

var result = [1,2,3,4,5,6,7,8,9,10].every(function(num, idx){
    return num < 20;
})

//array.prototype.every
//반복문을 내부 반복으로 숨겨 배열 요소 전부가 만족하는지 확인
//java stream의 allmatch와 동일

var result2 = [10,20,30,40,50].reduce(function(num1, num2){
    return num1 + num2;
},10);

//array.prototype.reduce
//배열 요소들의 결과값을 뽑아낼때 사용
//java stream 의 reduce와 유사

var result3 = [10,20,30,40,50].reduceRight(function(num1, num2){
    return num1 - num2;
});

//array.prototype.reduceRight
//reduce로 값을 가져올때 역순으로 가져온다.

var result4 = [10,20,30,40,50].indexOf(10);

//array.prototype.indexOf
//인자로 전달된 요소가 잇는 인덱스를 반환한다. 요소가 없으면 -1을 반환한다. 

var result5 = [10,20,30,40,50].lastIndexOf(10);

//array.prototype.lastIndexOf
//요소가 존재하는 마지막 인덱스를 반환한다. 요소가 없으면  -1을 반환한다.



console.log(result5);