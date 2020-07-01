function create(){
  var num1 = Math.floor((Math.random()*9)+1);
  var num2 = Math.floor((Math.random()*9)+1);
  document.getElementById("first").innerHTML = num1;
  document.getElementById("second").innerHTML = num2;
}

function check(){
  var num1 = document.getElementById("first").textContent;
  var num2 = document.getElementById("second").textContent;
  var answer = num1*num2;
  var input = document.getElementById("answer");

  if(answer == input.value){
    document.getElementById("check").innerHTML = "정답입니다";
  }
  else{
    document.getElementById("check").innerHTML = "오답입니다";
  }
}
