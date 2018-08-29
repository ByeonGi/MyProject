// // //let
// // //기존의 var 를 대체하는 키워드
// // //기존의 함수 스코프 변수인 var는 전역 범위로 스크립트 내 어디서건 참조 가능하다

// // var var1 = 1;
// // function varTest(){
// //     console.log(var1);
// //     if(var1 == 1){
// //         var var2 = 2;
// //     }
// //     console.log(var2);
// // }

// // //반면에 블록 스코프 변수인 let은 자신을 정의한 블록에서만 접근 가능하다
// // let let1 = 1;
// // function letTest(){
// //     console.log(let1);
// //     if(let1 ==1){
// //         let let2 = 2;
// //     }
// //     console.log(let2)//reference error exception
// // }
// // //동일한 변수명으로 변수를 재선언시 let은 type error 를 발생시킨다
// // //따라서 보다 명확한 변수사용으로 디버깅시 오해의 소지가 줄어들어 개발자의 생산성을 향상 시켜준다

// // //const

// // //기존에서 따로 상수용 변수가 없어 'TEST_CONST'와 같이 대문자를 사용하여 구분해 주었다
// // //es6에서는 const를 사용하여 상수형으로 코딩이 가능하다

// // const TEST_CONST = 100;
// // console.log(TEST_CONST);
// // testConst = 1;
// // console.log(TEST_CONST);
// // //읽기 전용 변수이므로 값이 할당되지 않는다.

// // //담긴 값이 불변을 뜻하는게 아니라 단지 변수의 식별자가 재 할당 될 수 없다.

// // const ME = {
// //     'name' : 'es6'
// // }
// // console.log(ME.name);
// // ME.name = 'ES7';//객체 값 재할당

// // console.log(ME.name);
// // ME = {};//변수 자체는 상수값으로 수정되지 않는다.
// // console.log(ME);
// // //{name : 'ES7'}

// // //변수 스코프는 let과 동이라다.

// // //import, export

// // //import = 다른 스크립트의 특정함수 , 객체 primities를 사용하기 위해 들여오는 키워드
// // //export = 반대로 스크립트 내의 특정함수, 객체, primities를 내보내는 키워드
// // //name을 사용한 export와 import

// // function plus(x, y){
// //     return x + y;

// // }
// // const doublePI = Math.PI *2;
// // export {plus, doublePI};

// // //default 를 사용한 export와 import

// // export default function plus(x, y){
// //     return x+ y;
// // }

// // // //그외의 import 표현식
// // // import * as name from 'module-name';
// // // import {member as alias } from 'module-name';
// // // import {member1, member2} from 'module-name';
// // // import defaultMember, {member [ , [...]]} from  {module-name';
// // // import defaultMember, * as name from 'module-name';
// // // import 'module-name';

// // // //그외의 export 표현식
// // // export {variable1 as name1, variable2 as name2, nameN};
// // // export let name1, name2, name3;
// // // export let name1 = 1, name2 = 2, name3 = 2;

// // // export {name1 as default}
// // // export * from ~ ;
// // // export {name1, name2, , nameN} from ~;
// // // export{import1 as name1, import2 as name2, nameN} from~;


// // //arrow function
// // //기존의 function 보다 빠르며 간결한 구문을 보여주는 함수이다.
// // //항상 익명 함수 이다.
// // //생성자를 사용할 수 없다.

// // var plus = function(a,b){
// //     var result = a+b;
// //     return result;
// // }
// // //기존 방식

// // let plus = (a,b) =>{
// //     let result = a + b;
// //     return result;
// // }

// // //가장 중요한 특징중 첫번째는 간결한 구문
// // var result = function (a,b) {return a*b}
// // var result2 = (a,b) => a*b;

// // //두번쨰는 arrow function의 this값은 해당 스코프의 this값과 같다.
// // //기존의 es5에서의 this는 주로 self(that)이나 bind를 사용하여 this를 속박하고 있었다.

// // function phon(){
// //     var self = this,
// //     name = "galaxy s",
// //     version = 6;

// //     versionUp = function(){
// //         console.log(this);
// //         self.version++;
// //     }
// // }

// // //화살표 함수는 간결한 문법과 문맥의 직관성을 제공
// // function Numbers(array, operation){
// //     this.array = array;
// //     this.operation = operation;
// //     this.calculate = function(){
// //         return this.array.reduce(function(accumulator, element){
// //             if(this.operation === 'sum'){
// //                 return accumulator + element;
                
// //             }else if(this.operation === 'multiply'){
// //                 return accumulator * element;

// //             }
// //             throw new Error('Unknown operator');

// //         },bind(this));
// //     }
// // }
// // //보통 함수라면 별도의 this를 정의하지 않아도 인접한 문맥으로 this를 참조하게 된다.
// // //자바스크립트에서는 실행 문맥에 대해 수정하기 위해 특벼한 메소드와 꼼수를 제공한다.
// // //call Function.prototype.call(constext, arg1, ...) 혹은 Function.prototype.apply(context, [arg1, ...]) 
// // //메소드로 문맥을 간접적으로 호출하는 방법
// // //Function.prototype.bind(context, arg1,...) 메소드로 문맥을 묶는 방법
// // //인접 문맥을 var context = this 와 같이 별도의 변수에 저장하고 , 내부 함수에서 그 변수에 접근하는 방법


// // //Numbeers 라는 생성자는 배열에 담긴 요소들의 합께 도는 혹은 곱셈을 계산한다.
// // //이 생성자에는 .calculate()라는 메소드가 있는데, 여기에서는 필요한 operation변수로 받은
// // //연산자를 적용하기 위해 this.array.reduce()라는 것을 사용하고 있다. 
// // //이 콜백 함수에서 this.operation에 접근하기 위해 .bind(this)를 이용해 인접 문맥에 접근하고 있다.

// // //화살표 함수에서는 this 문맥을 효율적으로 바인드 시켜준다. 이 함수는 인접 문맥을 사용하고, this를 새로 정의 하지 않는다.

// // function Numbers(array, operation){
// //     this.array = array;
// //     this.operation = operation;
// //     this.calculate = function(){
// //         return this.array.reduce((accumulator, element) =>{
// //             if( this.operation === 'sum'){
// //                 return accumulator + element;
// //             }
// //             else if(this.operation === 'multiply'){
// //                 return accumulator * element;
// //             }
// //             throw new Error('Unknown operator');
// //         });
// //     }
// // }
// // var myNumbers = new Numbers([1,5,10],'sum');
// // myNumbers.calculate();

// // //this.array.reduce()콜백 함수로 화살표 함수가 적용된 것을 볼 수 있다.
// // //화살표 함수는 this.calculate()메소드와 같은 문맥을 가지기 때문에, this.operation에 접근 할 수 있다.

// //ECMASCript 2015로도 알려져 있는 ECMAScript6는 ECMASCript표준의 가장 최신 버전
// //ES6는 새로운 언어 기능이 포함된 주요 업데이트이며, 2009년도에 표준화된 es5이후로 언어 기능에 대한 첫 업데이트이다.
// //현재 주요 javascript엔진들에서 es6기능들을 구현중에 있다.

// //Arrows
// //Arrows함수는 => 문법을 사용하는 축약형 함수이다.
// //Arrows는 표현식의 결과 값을 반환하는 표현식 본문 뿐만 아니라
// //상태 블럭 본문도 지원한다.
// //하지만 일반 함수의 자신을 호출하는객체를 가리키는 dynamic this와 달리 
// //arrow함수는 코드의 상위 스코프를 가리키는 lexical this를 가집니다.

// var evens = [2,4,6,8];
// var odds = evens.map(v => v+1);
// var nums = evens.map((v,i) => v+i);
// var pairs = evens.map(v => ({even : v, odd: v+1}));

// nums.forEach(v =>{
//     if(v % 5 === 0){
//         fives.push(v);
//     }
// });

// //블럭 내부를 실행만 함 , 반호나을 위해선 return 을 명시

// //lexical this
// var bob = {
//     _name : 'Bob',
//     _friends : ['John, Brian'],
//     pritFriends(){
//         this._friends.forEach(f =>
//         console.log(this._name + ' knwos ' + f));

//     }
// }


// // // printFriends() 함수의 서브루틴은 다음과 문법상 동일
// // this._friends.forEach(function (f){
// //     console.log(this._name + " knows " + f);
// // }.bind(this));

// //classes 
// //es6클래스는 포로토타입 기반 객체지향 패턴을 더 쉽게 사용할 수 있는 대체재입니다.
// //클래스 패턴 생성을 더 쉽고 단순하게 생성할 수 있어서 사용하기도 편하고 상호 운용성도 증가

// // class SkinnedMesh extends THREE.Mesh{
// //     constructor(geometry, materials){
// //         super(geometry, materials);
// //         this.idMtrix = SkinnedMesh.defaultMatrix();
// //         this.bones = [];
// //         this.boneMatices = [];

// //     }

// //     update(camera){
// //         super.update();
// //     }

// //     get boneCount(){
// //         return this.bones.length;
// //     }
// //     set matrixType(matrixType){
// //         this.idMatrix = SkinnedMesh[matrixType]();
// //     }
// //     static defaultMatrix(){
// //         return new THREE.matrix4();
// //     }

// // }


// //Enhanced Object Literals
// //es6에서 객체 리터럴은 선언문에서 프로토타입 설정, foo: foo 선언을 위한 단축 표기법
// //메서드 정의, super 클래스 호출 및 동적 속성명을 지원하도록 향상되었습니다.
// //그에 따라 리터럴 및 클래스 선언이 더 밀접되어져, 객체 기반 설계가더 편리해졌습니다.

// var obj = {
//     _proto_:theProtoObj,


//     //'handler : handler'의 단축 표기
//     handler,


//     toString(){
//         return 'd' + super.toString();
//     },

//     //coputed (dynamic) property nams
//     ['prop_' + (() => 42 )()] : 42


// };

// //Template Strings
// // //Template String(es6부터는 template literals라고 부름)는 문법적으로 더 편하게 string을 생성할 수 있게 함
// // //이는 Perl, Python 등의 문자열 보간과 유사, tagged templated literals는 인젝셔 공격
// // //방어 혹은 문자열로 부터 상위 데이터 구조체 재조립 등을 위해 string 생성을 커스터 마이징이 가능하게 끔 해줌

// // //basic literal string creation
// // 'in javascript \'\n\' is a line-feed'

// // //multiline strings
// // 'in javaScript this is
// // not legal'

// // //string interpolation
// // var name = 'bob', time = 'today';
// // 'Hello ${name}, how are you ${time}?'

// // //construct on HTTP requst prefix is used to interpret the replacements and construction
// // POST'http://foo.org/var?a=${a}&b=${b}

// //destructuring
// //destructuring는 배열과 객체에 패턴 매칭을 통한 데이터 바인딩을 제공합니다
// //destructuring는 할당 실패에 유연하며, 실패 시 undefinded 값이 자동 할당 됩니다.
// //또한 foo ['bar']와 같이 객체의 속성 값도 자동으로 검색하여 바인딩 해줍니다.
// var [a, ,b] = [1,2,3];

// //object matching


// //default + Rest + Spread
// //파라미터에 기본 값을 설정할 수 있습니다.
// function f(x, y = 12){
//     return x + y;

// }
// f(3);

// //가변 인자를 사용가능하며, 배열로 치환 시켜 줍니다 Rest parameters는 arguments보다 직관성을 제공합니다.
// function f(x, ...y){
//     return x * y.length;
// }
// f(3, 'hello', true);


