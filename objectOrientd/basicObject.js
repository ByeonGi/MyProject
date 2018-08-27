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
function Ultra(){}
Ultra.prototype.ultraProp = true;