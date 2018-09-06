// //객체란 서로 연관된 변수와 함수를 그룹핑한 그릇이라고 할 수 있다. 
// //객체 내의 변수를 프로퍼티 함수를 메소드라고 부른다.

// //객체 내의 변수 = 프로퍼티
// //함수 = 메소드

// var person = {}
// person.name = 'byeongi';
// person.introduce = function(){
//     return 'my name is ' + this.name;

// }

// console.log(person.introduce());

// var person2 = {
//     'name' : 'byeongi',
//     'introduce' : function(){
//         return 'my name is ' + this.name;
//     }
// }
// console.log(person2.introduce());

//생성자는 객체를 만드는 역할을 하는 함수다. 자바스크립트에서 함수는 재사용 가능한 로직
// function person(){}

// var p1 = new person();

// p1.name = 'byeongi';
// p1.introduce = function(){
//     return 'my name is ' + this.name;
// }
// console.log(p1.introduce());

// var p2 = new person();
// p2.name = 'bigbyeongi';
// p2.introduce = function(){
//     return 'my name is ' + this.name;
// }
// console.log(p2.introduce());

// function person(name){
//     this.name = name;
//     this.introduce = function(){
//         return 'my name is  ' + this.name;

//     }
// }

// var p1 = new person('byeongi');
// console.log(p1.introduce());
// var p2 = new person('bigbyeongi');
// console.log(p2.introduce());



// //생성자 내에서 이 객체의 프로퍼티를 정의


// //일반적인 객체 지향 언어에서 생성자는 클래스의 소속이다.
// //하지만 자바스크립트에서 객체를만드는 주체는 함수
// //함수에서 new를 붙이는 것을 통해서 객체를 만들 수 있다는 점은 자바스크립트에서 함수의 위상을 암시하는 단서

//전역객체는 특수한 객체다. 모든 객체는 이 전역객체의 프로퍼티
// function func(){
//     console.log('hello?');
// }
// func();

// window.func();
// //객체를 명시하지 않으면 암시적으로 window의 프로퍼티로 간주된다.

// var o = {
//     'func': function(){
//     console.log('hello?');
// }}

// o.func();
// window.o.func();
// //자바스크립트에서 모든 객체는 기본적으로 전역객체의 프로퍼티임을 알 수 있다.

// //전역객체api
// //ECMAScript에서는 전역개체의 api를 정의해두었다. 그 외의 api는 호스트 환경에서 필요에 따라서 추가로 정의

//this는 함수내에서 함수 호출 맥락을 의미한다. 맥락이라는 것은 상황에 따라서 달라진다는 의미인데 즉 함수를 어떻게 호출하느냐에
//따라서 this가 가리키는 대상이 달라진다는 뜻, 함수와 객체의 관계가 느슨한 자바스크립트에서 this는 이둘을 연결시켜주는 실질적인 연결점의 역할


// //함수호출
// function func(){
//     if(Object === this){
//         console.log("window === this");
//     }
// }
// func();

// // var o = {
// //     func1 : function(){
// //         if(o === this){
// //             console.log('o === this');
// //         }
 
// //     }
// // }
// // o.func1();

// var o = {
//     func : function(){
//         if(o === this){
//             console.log('o === this');
//         }
//     }
// }
// o.func();

// //함수를 호출했을 때와 new를 이용해서 생성자를 호출했을 때
// var funcThis = null;

// function func(){
//     funcThis = this;
// }

// var o2 = new func();
// if(funcThis === o2){
//     console.log('o2');
// }

// //생성자는 빈 객체를 만든다. 그리고 이 객체내에서 this는 만들어진 객체를 가르킨다.

//생성자가 실행되기 전까지는 객체는 변수에도 할당 될 수 없기 때문에 this가 아니면 객체에 대한 어떠한 작업을 할 수 없다.

// function Func(){
//     console.log(o);
   

// }
// var o = new Func();

//함수의 메소드인 apply, call을 이용하면 this의 값을 제어할 수 있다.

// var o = {}
// var p = {}
// function func(){
//     switch(this){
//         case o : 
//         console.log('o');
//         break;
//         case p :
//         console.log('p');
//         break;
//     }
// }
// func();
// func.apply(o);
// func.apply(p);

//상속이란? 객체는 연관된 로직들로 이루어진 작은 프로그램이라고 할 수 있다.
//상속은 객체의 로직을 그대로 물려 받는 또 다른 객체를 만들 수 있는 기능을 의미한다.
//기존의 로직을 수정하고 변경해서 파생된 새로운 객체를 만들 수 있게 해준다.

// function Person(name){
//     this.name = name;
//     this.introduce = function(){
//         return 'my name is ' + this.name;
//     }

// }
// var p1 = new Person('byeongi');
// console.log(p1.introduce());

// function Person(name){
//     this.name = name;

// }
// Person.prototype.name = null;
// Person.prototype.introduce = function(){
//     return 'my name is ' + this.name;
// }
// var p1 = new Person('byeongi');
// console.log(p1.introduce());

// function Person(name){
//     this.name = name;

// }

// Person.prototype.name = null;
// Person.prototype.introduce = function(){
//     return 'my name is ' + this.name;
// }

// function Programmer(name){
//     this.name = name;
// }
// Programmer.prototype = new Person();

// var p1 = new Programmer('byeongi');
// console.log(p1.introduce());
// //Programmer라는 생성자를 만들었다. 그리고 이 생성자의 prototype과 Person의 객체를 연결 했더니
// //Programmer객체도 메소듣 introduce를 사용할 수 있게 되었다.

// //Programmer가 Person의 기능을 상속하고 있는 것이다.
// //단순히 똑같은 기능을 갖게 되는 것이라면 상속의 의의는 사라질 것이다. 부모의 기능을 계승 발전할 수 있는 것이 상속의 가치다.


// function Person(name){
//     this.name = name;
// }
// Person.prototype.name = null;
// Person.prototype.introduce = function(){
//     return 'my name is ' + this.name;
// }
// function Programmer(name){
//     this.name = name;

// }
// Programmer.prototype = new Person();
// Programmer.prototype.coding = function(){
//     return "hello world";
// }

// var p1 = new Programmer('byeongi');
// console.log(p1.introduce());
// console.log(p1.coding());

//상속의 구체적인 수단 prototype
// function Ultra(){}
// Ultra.prototype.ultraProp = true;

// function Super(){}
// Super.prototype = new Ultra();

// function Sub(){}
// Sub.prototype = new Super();

// var o = new Sub();
// console.log(o.ultraProp);

// //prototype은 객체의 원형이다
// //함수는 객체이다. 그러므로 생성자로 사용될 함수도 객체다. 객체는 프로퍼티를 가질 수 있는데
// //prototype이라는 프로퍼티는 그 용도가 약속되어 있는 특수한 프로퍼티다.
// //prototype에 저장된 속성들은 생성자를 통해 객체가 만들어질 때 그 객체에 연결된다.

//생성자 Sub를 통해서 만들어진 객체 o가 Ultra의 프로퍼티 ultraProp에 접근가능한 것은 prototype체인으로 Sub와 Ultra가
//연결되어 있기 때문이다. 내부적으로 아래와 같은 일이 일어난다.
//1.객체o에서 ultraProp를 찾는다.
//2.없다면 Sub.prototype.ultraProp를 찾는다
//3.없다면 Super.prototype.ultraProp를 찾는다.
//4.없다면 Ultra.prototype.ultraProp를 찾는다.

//prototype는 객체와 객체를 연결하는 체인의 역할을 한다.

//Super.prototype = Ultra.prototype으로 하면 안된다. Super.prototpye의 값을 변경하면
//그것이 Ultra.prototype도 변경하기 때문이다. Super.prototype = new Ultra();는  Ultra.prototype의 원형으로 하는
//객체가 생성되기 때문에 new Ultra()를 통해서 만들어진 객체에 변화가 생겨도 Ultra.prototype의 객체에는 영향을 주지 않는다.

//표준 내장 객체는 자바스크립트가 기본적으로 가지고 있는 객체들을 의미한다.
//내장 객체가 중요한 이유는 프로그래밍을 하는데 기본적으로 필요한 도구들이기 때문이다.
//결국 프로그래밍이 라는 것은 언어와 호스트 환겨에 제공하는 기능들을 통해 새로운 소프트웨어를 만들어내는 것

//자바스크립트의 내장 객체 -> Object, Function, Array, String, Boolean, Number, Math, Date, RegExp

// //배열의 확장
// var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'Tsukuba');
// function getRandomValueFromArray(haystack){
//     var index = Math.floor(haystack.length* Math.random());
//     return haystack[index];
// }
// console.log(getRandomValueFromArray(arr));

// Array.prototype.rand = function(){
//     var index = Math.floor(this.length*Math.random());
//     return this[index];
// }
// var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'Tsukuba');
// console.log(arr.rand());

//Object객체는 객체의 가장 기본적인 형태를 가지고 있는 객체이다. 다시 말해서 아무것도 상속받지 않는 순수한 객체다.
//자바스크립트에서 값을 저장하는 기본적인 단위로 Object를 사용한다.
// var grades = {'byeongi' : 10, 'k9999' : 20};
// //동시에 자바스크립트이 모든 객체는 Object객체를 상속받는데 , 그런 이유로 모든 객체는 Object객체의 프로퍼티를 가지고 있다.

// // //Object객체를 확장하면 모든 객체가 접근할 수 있는 api를 만들 수 있다.
// Object.prototype.contain = function(neddle){
//     for(var name in this){
//         if(this[name] === neddle){
//             return true;
//         }
//     }
//     return false;
// }

// var o = {'name' : 'byeongi', 'city' : 'seoul'};
// console.log(o.contain('byeongi'));
// var a = ['byeongi', 'leezche', 'grapittie'];
// console.log(a.contain('leezche'));

// //Object 객체는 확장하지 않는 것이 바람직, 모든 객체에 영향을 주기 때문이다.

// for(var name in o){
//     console.log(name);
// }

// //확장한 프로퍼티인contain이 포함되어 있다. 객체가 기본저긍로 가지고 있을 것으로 예상하고 있는 객체외에 다른객체를 가지고
// //이쓴ㄴ 것은 개발자들에게 혼란을 준다. 이문제를 회피하기 위해서 프로퍼티의 해당 객체의 소속인지를 체크해볼 수 있는
// //hasOwnProperty를 사용하면 된다.


// for(var name in o){
//     if(o.hasOwnProperty(name))
//     console.log(name);
// }

// //hasOwnProperty는 인자로 전달된 속성의 이름이 객체의 속성인지 여부를 판단한다. 만약 prototype으로 상속받은 객체라면 false가 된다.


//데이터 타입이란 데이터의 형태를 의미한다.
//데이터 타입은 크게 두가지로 구분할 수 있다. 객체와 객체가 아닌 것

//숫자, 문자열, 불리언, null, undefinded
//객체가 아닌 데이터 타입을 원시 데이터 타입이라고 한다. 그 외의 모든 데이터 타입들은 객체다.

//문장열과 관련해서 필요한 기능성을 객체지향적으로 제공해야하는 필요 또한 있기 때문에 원시 데이터형을 객체처럼 다룰 수 있도록
//하기 위한 객체를 자바스크립트는 제공하고 있는데 그것이 레퍼객체다.(wrapper object = String, Number, Boolean)

// var a = {'id':1};
// function func(b){
//     b.id = 2;

// }

// func(a);
// console.log(a.id);