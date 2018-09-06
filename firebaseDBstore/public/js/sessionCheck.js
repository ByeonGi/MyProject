function userSessionCheck(){
    console.log(currentTime);
    firebaseEmailAuth.onAuthStateChanged(function(user){
      if(user){
        // 조회 - 데이터 베이스에 저장된 닉네임을 현재 접속되어 있는 user 의 pk key 값을 이용해서 가져오기

        firebaseDatabase.ref("users/" + user.uid).once('value').then(function(snapshot){
          
          //자바스크립트 dom 선택자를 통해서 네비게이션 메뉴의 엘리먼트 변경해주기
          document.getElementById('loginmenu').textContent = "로그아웃";
          document.getElementById('loginmenu').href = "/logout.html";
          document.getElementById('joinmenu').textContent = "반가워요 ! " + snapshot.val().name + " 님";
          document.getElementById('joinmenu').href = "#";

          name = snapshot.val().name;
          loginUserKey = snapshot.key;
          userInfo = snapshot.val();
          //snapshot.val()에는 sessionCheck할때 로그인 한 유저와 관련된 값이 들어있다.

          
          


          if(document.getElementById('titleCheck').textContent == "mypage"){
            // 1. 닉네임 변경하기  
    
            document.getElementById('nicname').textContent = name;

            // 2. 이미지가 존재하면 , 이미지 url을 가져와서 img 태그에 넣어준다.
            if(snapshot.val().imgURL){
                document.getElementById('myimage').src = snapshot.val().imgURL;
                console.log('이미지가 저장되어 있다');

            }else{
                // 없으면 다른 이미지 대체
                document.getElementById('myimage').src = "https://www.w3schools.com/bootstrap/img_avatar3.png";
                console.log("이미지가 없네열");
            }

            // 3. 한줄 글이 있으면 가져와서 넣어준다.
            if(snapshot.val().comment){
                document.getElementById('statetxt').textContent = snapshot.val().comment;
                console.log('한줄글이 저장되어 있다');

            }
            else{
                //없으면 더미 데이터를 넣어준다.
                document.getElementById('statetxt').textContent = "아몰라 걍 살아라";
                console.log('한줄글이 없넹');
            }
          }else{
            //index.html 에서 호출했다면
            //alert(userInfo.userid); //uid는 db에서 user 테이블의 각 개체들의 pk인데, 이값은 인증에서 생성된 아이디의 pk 값과 같다.


          //감사리스트 호출
          thanksList();
          //userSessionCheck()가 다안 끝났음에도 불구하고 thanksList를 호출해버린다. loginUserKey가 할당안된 상태에서 실행되면 안되기 때문에
          //userSessionCheck() 함수가 끝나는 부분에 넣어준다.

          return true;
          }
        });

      }else{
        $('#comment').val("로그인 하시면 사람들의 감사 리스트를 보실수 있습니다. ");
        return false;
      }
    })
  }