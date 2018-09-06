var app = new Vue ({
    el : '#app-5',
    data : {
        message : '안녕하세요 ! Vue.js!'
    },
    methods : {
        reverseMessage : function(){
            this.message = this.message.split('').reverse().join('');
        }
    }
});
Vue.component('todo-item', {
    //이제 todo-item 컴포넌트는 "prop"이라고 하는
    //사용자 정의 속성 같은 것을 입력 받을 수 있다.
    //이 prop은 todo라는 이름으로 정의했다.

    props:['todo'],
    template:'<li>{{ todo.text }}</li>'
})

var app6 = new Vue({
    el : '#app-6',
    data : {
        message : '',

        groceryList : [
            {id:0, text : 'Vegetable'},
            {id:1, text : 'Cheese'},
            {id:2, text : 'Whatever else humans are supposed to eat'}
        ]
    }
})

//컴포넌트를 사용한 작성방법
//컴포넌트 시스템은 Vue 의 또 다른 중요한 개념이다.
//이는 작고 그 자체로 제 기능을 하며 재사용 할 수 있는 컴포넌트로 구성된 대규모 응용 프로그램을 구축할 수 있게 해주는 추상적 개념이다.
//Vue에서 , 컴포넌트는 본질적으로 미리 정의된 옵션을 가진 Vue 인스턴스 이다. Vue에서 컴포넌트를 등록하는 방법은 간단하다

//todo-item을 가진 컴포넌트를 정의한다.


//각 Vue 인스턴스는 data 객체에 있는 모든 속성을 프록시 처리 합니다.
// var data = { a: 1}
// var vm = new Vue({
//     data : {
//         newTodoText : '',
//         visitCount : 0,
//         hideCompletedTodos : false,
//         todos :[],
//         error : null
//     }
// })

// //같은 객체를 참조합니다.
// vm.a === data.a

// //속성 설정은 원본 데이터에도 영향을 미칩니다.
// vm.a = 2
// data.a//2

//data에 있는 속성들은 인스턴스가 생성될 때 존재한 것들만 반응형
//vm.b = 'h1' b가 변경되어도 화면이 갱신되지 않는다. 어떤 속성이 나중에 필요하다는 것을 알고 있다.
//빈 값이거나 존재하지 않은 상태로 시작한다면 아래와 같이 초기값을 지정할 필요가 있다.
//유일한 예외 Object.freeze()를 사용하는 경우, 이는 기존 속성이 변경되는 것을 막아 반응성 시스템이 추적할 수 없다는 것을 의미한다.

var obj = {
    foo : 'bar'
}

Object.freeze(obj)

new Vue({
    el:'#app',
    data:obj
})


//다른 사용자 정의 속성과 구분하기 위해 $접두어를 붙였다.

var data = {a:1}
var vm = new Vue({
    el : '#example',
    data : data
})

vm.$data === data
vm.$el === document.getElementById('example')

//$watch는 인스턴스 메소드입니다.
vm.$watch('a', function(newVal, oldVal){
    //'vm.a'가 변경되면 호출 됩니다.

})