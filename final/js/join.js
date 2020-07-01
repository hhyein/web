function check_password(){
  var password1 = document.getElementById("user_password");
  var password2 = document.getElementById("user_password_check");
  if(password1.value != password2.value){
    document.getElementById("check").innerHTML = "비밀번호가 일치하지 않습니다";
    document.getElementById("check").style.color = "red";
    return false;
  }
  else{
    document.getElementById("check").innerHTML = "비밀번호가 일치합니다";
    document.getElementById("check").style.color = "black";
    return false;
  }
}
