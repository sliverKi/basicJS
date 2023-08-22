//event handling
//제출된 입력값 참조
//로직 구현

const form = document.getElementById("form")
form.addEventListener("submit", function(e){
    e.preventDefault()//기존 기능 차단
   let userID = e.target.id.value//입력값을 읽음
   let userPW1 =e.target.pw1.value
   let userPW2 =e.target.pw2.value
   let userName =e.target.name.value
   let userPhone =e.target.phone.value
   let userPosition =e.target.position.value
   let userGender =e.target.gender.value
   let userEmail =e.target.email.value
   let userIntro =e.target.intro.value
   
    if ((userID.length)<6){
        alert("아이디가 너무 짧아요. 6자 이상 해주세요.")
        return 
    }
    if (userPW1!==userPW2){
        alert("비밀번호가 일치하지 않습니다.")
        return
    }
    if (userName=false){
        alert("사용자 이름을 입력해 주세요.")
        return
    }
    //welcome!:)
    document.body.innerHTML=""
    document.write(`<p>${userID}님 환영합니다</p>`)
   
})


