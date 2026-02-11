let search = document.getElementById("search");

search.addEventListener("click", function(){
    // 새로운 브라우저 창 열기
    // window.open("주소", 대상(위치), 옵션);

       // 새창 옵션 : widht, height
            // 위치 : top, left
// 창크기 조절 기능 : resizable = yes / no
   // 스크롤바 표시 : scrollbars = yes / no
       // 툴바 표시 : toolbar = yes / no
     // 주소창 표시 : location = yes / no

    // 새창 띄우기 전에 이름 입력했는지 확인
    if(document.querySelector("#name").value == ""){
        alert("이름을 입력해주세요");
        return;
    }

   const child = window.open("child.html","_blank","width=500,height=700,top=100,left=400");
   child.document.body.style.background="pink";
});