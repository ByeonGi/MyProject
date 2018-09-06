//함수에는 arguments 라는 변수에 담긴 숨겨진 유사 배열. 
//이 배열에는 함수를 호출할 때 입력한 인자가 담겨있다.
function sum(){
    var i, _sum=0;
    //출력할 결과를 단언할 변수
    for(i = 0; i<arguments.length; i++){
        console.log(i + ' : ' + arguments[i]);
        _sum += arguments[i];
    }
    return _sum;
}

console.log('result : ' + sum(1,2,3,4));

//함수 sum은 인자로 전ㄷㄹ된 값을 모두 더해서 리턴하는 함수 이다. 그런데 1행 처럼
//함수 sum은 인자에 대한 정의하가 없다. 마지막 라인에서는 4개의 인자를 함수 sum으로 전달하고 있다.
//함수의 정의 부분에서 인자에 대한 구현이 없음에도 인자를 전달 할 수 있는 것은 arguments라는 특수한 배열이 있기 때문이다.
//arguments는 함수안에서 사용할 수 있도록 그 이름이나 특성이나 약속되어 있는 일종의 배열이다.
//arguments[0]은 함수로 전달된 첫번째 인자를 알아낼 수 있다.
//arguments.length를 이용해서 함수로 전달된 인자의 개수를 알아낼 수도 있다.
//이러한 특성에 반복문을 결합하면 함수로 전달된 인자의 값을 순차적으로 가져올 수 있다.

function zero(){
    console.log(
        'zero.legth', zero.length,
        'arguments', arguments.length

    );
}
function one(arg1){
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}

function two(arg1, arg2){
    console.log(
        'two.length', two.length,
        //함수에 정의돈 인자의 수
        'arguments', arguments.length
        //몇개의 인자를 전달 했는가, 실제 전달된 인자
    );
}
zero();
one('val1', 'val2');
two('val1');