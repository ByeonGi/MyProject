// function cal(mode){
//     var funcs = {
//         'plus' : function(left , right) {return left + right},
//         'minus' : function(left, right) {return left - right}
//     }
//     return funcs[mode];

// }

// console.log(cal('plus') (2,1));
// console.log(cal('minus')(2,1));

// var process = {
//     function(input) {return input + 10;},
//     function(input){ return input * input;},
//     function(input){ return input /2;}

// };


// console.log(process[0](1));
// console.log(process[1](1));
// console.log(process[2](1));

//값으로 사용될 수 있는 특성을 이용하면 함수의 인자로 함수로 전달될 수있다.
//값으로 전달된 함수는 호출 될 수 있기 때문에 이를 이용하면 함수의 동작을 완전히 바꿀수 있다.
//인자로 전달된 함수 sortNumber의 구현에 따라서 sort의 동작방법이 완전히 바뀌게 된다.

// function sortNumber(a,b){
//     return a-b;
//     // if(a>b){
//     //     return 1;
//     // }else if(a<b){
//     //     return -1;
//     // }else{
//     //     return 0;
//     // }
// }

// var numbers = [20,10,9,8,7,6,5,4,3,2,1];
// console.log(numbers.sort());
// console.log(numbers.sort(sortNumber));


//콜백은 비동기처리에서도 유용하게 사용된다. 시간이 오래걸리는 작업이 있을 때 이 작업이
//완료된 후에 처리해야 할 일을 콜백으로 지정하면 해당 작업이 끝났을 때 미리 등록한
//작업을 실행하도록 할 수 있다.