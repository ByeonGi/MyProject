//배열과 객체의 차이점 
//배열은 아이템에 대한 식별자로 숫자를 사용, 데이터가 추가되면 배열 전체에서 
//중복되지 않는 인덱스가 자동으로 만들어져서 추가된 데이터에 대한 식별자가 된다.
//이 인덱스를 이용해서 데이터를 가져오게 되는 것이다.
//만약 인덱스로 문자를 사용하고 싶다면 객체를 사용해야한다.
//배열은 순서를 가지고 있다.

// 방법 1
// var grades = {'byeongi' : 10, 'hey' : 6, 'hello' : 80};
// 방법2
// var grades2 = {};
// grades2['byeongi'] = 10;
// grades2['hey'] = 6;
// grades2['hello'] = 80;
// 방법3
// var grades3 = new Object();
// grades3['byeongi'] = 10;
// grades3['hey'] = 6;
// grades3['hello'] = 80;

// console.log(grades['byeongi']);
// console.log(grades.byeongi);


// var grades = {'byeongi' : 10, 'hey' : 6, 'hello' : 80};
// //변수 in key값
// for(key in grades){
//     console.log('key : ' + key + 'value : ' + grades[key]);
// }


// for문은 in 뒤에 따라오는 배열의 key값을  in 앞의 변수 name에 담아서 반복문을 실행한다.
// 반복문이 실행 될때 변수 key의 값이 순차적으로 할당되기 때문에 grades[key]를 통해서 객체의 값을 알아낼 수 있다.
// 객체에는 객체를 담을 수도 있고 , 함수도 담을 수 있다.

// var grades = {
//     'list' : {'byeongi' : 10, 'hey' : 6, 'hello' : 80},
//     'show' : function(){
//         for(var name in this.list){
//             console.log(name + ':' + this.list[name]);
//         }
//     }
// };

// grades.show();



















//참고 자료 https://opentutorials.org/course/743/6491