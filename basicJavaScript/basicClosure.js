// //클로저는 내부함수가 외부함수의 맥락에 접근할 수 있는 것을 가르킨다.

// function outter(){
    
    
//     function inner(){
//         var title = "coding everybody";
//         console.log(title);
//         //내부함수에 title이 없으면 외부함수에서 title을 찾게됨.
//         //내부함수에서 외부함수의 지역변수에 접근 할 수 있게됨/
//     }
//     //var inner = function(){};

//     inner();
// }
// //함수 안에서만 사용하는 함수가 있을 수 있고 사용하지 않으면 응집성이 떨어진다.
// outter();

//클로저는 내부함수와 밀접한 관계를 가지고 있다.
//내부함수는 외부함의 지역ㅂㄴ수에 접근 할 수 있는데 외부함수의 실행이 끝나서 외부함수가
//소멸된 이후에도 내부함수가 외부함수의 변수에 접근 할 수 있다.
//이러한 메커니즘을 클로저라고 한다.


// function outter(){
//     var title = 'coding everbody';
//     return function(){
//         console.log(title);
    
//     }
//     //함수가 종료됨
// }
// inner = outter();
// //outter에 있는 내부함수가 inner 변수에 입력됨

// inner();
// //계속해서 내부함수를 통해서 외부함수에 접근함.

// function factory_movie(title){
//     return {
//         get_title : function(){
//             return title;//factory_movie의 내부함수 / 내부함수를 생성하고 외부함수의 지역변수에 접근 가능
//         },
//         set_title : function(_title){
//             if(typeof _title === 'String'){
//                 title = _title;
//             }
           
//         }
//     }
// }
// ghost = factory_movie('ghost in the shell');
// matrix = factory_movie('Matrix');

// console.log(ghost.get_title());
// console.log(matrix.get_title());

// ghost.set_title('공각기동대');

// console.log(ghost.get_title());
// console.log(matrix.get_title());

// //1.클로저는 객체의 메소드에서도 사용할 수 있다. 
// //2.동일한 외부함수 안에서 만들어진 내부함수나 메소드는 외부함수의 지역변수를 공유
// //3. 똑같은 외부함수 factory_movie를 공유하고 있는 ghost와 matrix의 get_title의 결과는
// //서로 각각 다르다. 외부함수가 실행될 때마다 새로운 지역변수를 포함하는 클로저가 생성되기
// //ghost와 matrix는 서로 완전히 독립된 객체가된다.
// //4. 자바 스크립트는 기본적으로 private 한 속성을 지원하는 데, 클로저의 이러한 특성을 이용해서
// //private한 속성을 사용할 수 있게된다.

// //private 속성은 객체의 외부에서는 접근 할 수 없는 외부에 감춰진 속성이나 메소드를 의미
// //이를 통해서 객체의 내부에서만 사용해야 하는 값이 노출됨으로서 생길 수 있는 오류를 줄일 수 있다.

// var arr = [];
// for(var i = 0; i <5; i++){
//     arr[i] = function(id){
        
//         return function(){

//             return id;

//         }

//     }(i);//외부함수 즉석 호출
// }

// // for(var i = 0; i<5; i++){
// //     arr[i] = function(){
// //         return i;

// //     }
// // }

// for (var index in arr){
//     console.log(arr[index]());
// }



// function makeFunc(){
//     var name = 'byeongi';
//     function displayName(){
//         console.log(name);
//     }
//     return displayName;
// }
// var myFunc = makeFunc();
// myFunc();

// //displayName() 내부함수가 실행되기 전에 외부함수로부터 반환된다는 것
// //클로저는 함수와 함수가 선언된 어휘적 환경의 조합이기때문에
// //이 환경은 클로저가 생성된 시점의 범위 내에 있는 모든 지역 변수로 구성된다.
// //위의 경우, myFunc은 makeFunc이 싷행될때 생성된 displayName 함수의 인스턴스에 대한 참조이다.
// //displayName의 인스턴스는 그변수 , name이 있는 어휘적 환경에 대한 참조를 유지한다.

// function makeAdder(x){
//     return function(y){
//         return x + y;
//     };
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2));
// console.log(add10(2));

// //단일 인자 x를 받아서 새 함수를 반환하는 함수 makeAdder(x)를 정의 했다.
// //반환 되는 함수는 단일 인자 y를 받아와서 x와 ydml 합을 반환한다.

// //makeAdder함수는 함수 팩토리이다. 특정한 값을 함수의 인자에 덧붙일 수 있는 함수들을 만든다.
// //두개의 새로운 함수들을 만들기 위해 함수 팩토리르 사용한다. 하나는 원래 인자에 5를 더하고
// //다른 하나는 원래 인자에 10을 더한다.
// //add5와 add10은 둘다 클로저이다. 같은 함수 본문 정의를 공유하지만 서로 다른 어휘적 환경을
// //저장한다. add5의 문법적 환경에서x는 5이지만 add10의 어휘적 환경에서 x는 10이다.


//클로저는 어떤 데이터(어휘적 환경)와 그 데이터를 조작하는 함수를 연관시켜주기 때문에 유용하다.
//이것은 객체가 어떤 데이터와 (그 객체의 속성) 하나 혹은 그 이상의 메소드들을 연관시킨다는 점에서 객체 지향프로그래밍과 분명히 같은 맥락에 있다.
//결론적으로 오직 하나의 메소드를 가지고 있는 객체를 일반적으로 사용하는 모든 곳에 클로저를 사용할 수 있다.
//이렇게 할 수 있는 상황은 특히 웹에서 일반적이다. 프론트 엔드 자바스크립트에서 우리가쓰는 많은 코드가이벤트 기반이다.
//몇 가지 동작을 정의한 다음 사용자에 의한 이벤트에 연결한다. 

// var counter = (function(){
//     var privateCounter = 0;
//     function changeBy(val){
//         privateCounter += val;

//     }
//     return {
//         increment : function(){
//             changeBy(1);

//         },
//         decrement : function(){
//             changeBy(-1);
//         },
//         value : function(){
//             return privateCounter;
//         }

//     };
// })();

// console.log(counter.value());
// counter.increment();
// counter.increment();
// console.log(counter.value());
// counter.privateCounter++;
// console.log(counter.value());
// counter.decrement();
// console.log(counter.value());


// //counter.increment, counter.decrement, counter.value 세 함수에 의해 공유되는 하나의 어휘적 환경을 만든다.
// //공유되는 어휘적 환경은 실행되는 익명 함수 안에서 만들어진다. 하나는 privateCounter라는 변수이고 하나는 changeBy라는 함수이다.
// //둘다 익명 함수 외부에서 접근 될 수 없다.
