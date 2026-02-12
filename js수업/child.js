
// 자바스크립트 객체
// 객체 리터럴
let obj1 = { name : "이순신" , age : 34 , address : "통영시" };
obj1.name = "이성계";
boj1.age;
obj1.address;

// 함수형 객체
function user(name, age, address){
    this.name = name;
    this.age = age;
    this.address = address;
}

let u = new user ("장보고",54,"완도");
let u1 = new user ("장영실",44,"한양");

// Object() 를 이용하여 객체 만들기
let u2 = new Object();

// class 문법으로 객체 만들기
class member{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

// 프로토타입 을 이용한 객체 생성
boj1.prototype.job="군인";

// 부모창에 입력한 이름을 가져와서 자식창의 input태그에 넣기
// 새창을 열어줘 부모창(메인창)은 window.opener 이다.
let parentName = window.opener.document.getElementById("name");

// 자식의 input 태그 가져오기
let childName = document.getElementById("childName");
// input 태그의 value에 부모의 이름 input 태그 value 값 넣기

childName.value = parentName.value;

// 이메일을 클릭하면 부모창의 input태그에 넣기

const list = document.querySelectorAll(".emailText");

list.forEach( text => { text.addEventListener("click", () =>{
    // 부모창의 이메일 input태그 가져오기
   let pareentEmail = window.opener.document.getElementById("email");
    pareentEmail.value = text.innerText;
    window.close(); // 자식창 닫기
}) } );

// for( var text of list){
//     a(text);
// }
// function a(text){
//     text.addEventListener("click", function(){
//     });
// }
// 위아래 함수가 똑같은 의미이나 화살표함수(위)는 일회용이다