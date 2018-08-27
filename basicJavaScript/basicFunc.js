//함수를 호출하는 특별한 방법
//func는 function이라는 객체의 인스턴스 func는 객체 function이 가지고 있는 메소드들을 상속하고 있다.
function sum(arg1, arg2){
    return arg1 + arg2;
}
console.log(sum.apply(null, [1,2]));


//함수 sum은 function객체의 인스턴스이다. 그렇기 때문에 객체function 메소드 apply를 호출 할 수 있다.
//apply메소드는 두개의 인자를 가질 수 있는데,첫번째 인자는 함수(sum)가 실행될 맥락이다.
//맥락의 의미는 다음 예제를 통해서 살펴보자. 두번째 인자는 배열인데, 이배열의 담겨있는 원소가 함수(sum)의 인자로 순차적으로 대입된다.


o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}

function sum(){
    var _sum = 0;
    for(name in this){
        if(typeof this[name] !== 'function')
        _sum += this[name];

    }
    return _sum;
}
console.log(sum.apply(o1));
console.log(sum.apply(o2));
//apply함수의 첫번째 인자에는 객체를 넣는다.
//apply의 첫번째 인자는 함수가 실행될 맥락이다.
//sum.apply(o1)은 함수 sum을 객체o1의 메소드로 만들고 sum을 호출한 후에sum을 삭제한다.  아래와 비슷하다.

o1.sum = sum;
console.log(o1.sum());
delete o1.sum();
//sum 의 o1 소속의 메소드가 된다는 것
//함수 sum에서 this의 값이 전역객체가 아니라 o1이 된다는 의미
//일반 객체 지향 언어에서는 하나의 객체에 소속된 함수는 그 객체의 소유물이 된다.
//함수는 독립적인 객체로서 존재하고, apply나 call 메소드를 통해서 다른 객체의 소유물인 것처럼 실행할 수 있다.


