
// 스크립트의 위치가 body태그 위 에 있는 경우에
// 태그를 가져와서 사용해야 한다면
// 반드시 window가 load 한다음에 
// 태그 가져오기를 해야 한다.

window.onload=function(){
    // 가입 버튼 클릭시
    // 필수 정보가 모두 입력되었는가 확인하기
    // 비밀번호와 비밀번호확인이 일치하는가
    // let id = document.getElementById("userId");
    // let pw = document.getElementById("userPw");
    // let pwre = document.getElementById("userPwRe");
    // let name = document.getElementById("name");
    // let tel = document.getElementById("tel");

    // id.addEventListener("keyup", joinCheck);
    // pw.addEventListener("keyup", joinCheck);
    // pwre.addEventListener("keyup", joinCheck);
    // name.addEventListener("keyup", joinCheck);
    // tel.addEventListener("keyup", joinCheck);

    // 클래스명으로 태그 가져와서 이벤트 등록하기
    const 필수입력 = document.getElementsByClassName("essential");
    // 클래스명으로 가지고오는건 배열형식

    for( var input of 필수입력 ){
        input.addEventListener("keyup", joinCheck);
    }
    // querSelector - 자바스크립트로 태그를가져오는 방법 (동적)
    // 제일 첫번쨰 한가지만 가지고 올수있음
    let id = document.querySelector("#userId");
    // 태그형식이 id면 # class면 . 태그로대있으면 그냥 태그명으로 해주면된다

    //여러 태그를 가져오려면
    const input = document.querySelectorAll(".essential");

    // for( var i = 0 ; i < 5 ; i++ )
    // for( var i in 필수입력 ) // 배열의 인덱스값이 i에 저장
    // for( var date of 필수입력 ) // 배열의 데이터값이 저장
}

// 만약에 이름을 입력안했을경우 사용자에게
// 알려주고 싶다면 지금과 같은 방식은 어렵다(불가능은 아님)
// 지금의 방식은 누구를 입력안했다라고 표현하는게 아니고
// 모두 입력했냐 안했냐만 확인하기

function joinCheck(){
    let id = document.getElementById("userId");
    let pw = document.getElementById("userPw");
    let pwre = document.getElementById("userPwRe");
    let name = document.getElementById("name");
    let tel = document.getElementById("tel");

    var count = 0;
    if (id.value != '') count++;
    if (pw.value != '') count++;
    if (pwre.value != '') count++;
    if (name.value != '') count++;
    if (tel.value != '') count++;

    if (count == 5){ // 필수 입력 모두 했다.
        if(pw.value != pwre.value){ // 비밀번호와 비밀번호 확인이 다른값이라면
            alert("비밀번호를 다시 확인해 주세요");
            pw.value=''; // 비밀번호 input값 비우기(초기화)
            pwre.value=''; // 비밀번호 확인 input값 비우기(초기화)
            return;
        }
    // == 두번은 값만 비교하고 === 세번은 타입까지 비교

        document.getElementById("joinbt").disabled = false;
    }else{ // 필수 입력 중 하나이상 입력 안함
        document.getElementById("joinbt").disabled = true;
    }
    
}

