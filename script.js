function checkAnswer() {

  let answer = document.getElementById("answer").value;
  let result = document.getElementById("result");

  if(answer == "5"){
    result.innerHTML = "答對了！🎉";
    result.style.color = "green";
  }else{
    result.innerHTML = "再想想看 🤔";
    result.style.color = "red";
  }

}
