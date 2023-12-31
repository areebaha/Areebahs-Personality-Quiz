/*Add your JavaScript here*/
var morningScore=0;
var nightScore=0;
var questionCount=0;

var result = document.getElementById("result");
var restart= document.getElementById("restart");

var q1a1= document.getElementById("q1a1");
var q1a2= document.getElementById("q1a2");

var q2a1= document.getElementById("q2a1");
var q2a2= document.getElementById("q2a2");

var q3a1= document.getElementById("q3a1");
var q3a2= document.getElementById("q3a2");

q1a1.addEventListener("click", night);
q1a2.addEventListener("click", morning);

q2a1.addEventListener("click", morning);
q2a2.addEventListener("click", night);

q3a1.addEventListener("click", night);
q3a2.addEventListener("click", morning);

restart.addEventListener("click", restartQuiz);

function morning(){ morningScore +=1;
questionCount +=1;

console.log("questionCount = " + questionCount + " morningScore ="+ morningScore);

if (questionCount == 3){
  console.log("The quiz is done!");
  updateResult();
}
}


function night(){
  nightScore +=1;
  questionCount +=1;

  console.log("questionCount =" + questionCount + " nightScore =" + nightScore);

  if (questionCount == 3){
  console.log("The quiz is done!");
  updateResult();
}
}
function updateResult(){
  if (morningScore >= 2) {
  result.innerHTML= "You are a Morning Person!";
  console.log("You are a Morning Person");}
  else if (nightScore >= 2){
    result.innerHTML="You are a Night Owl!"
  console.log("You are a Night Owl");
  }
}  

function restartQuiz(){
  result.innerHTML = "You are a...";
  questionCount=0;
  morningScore= 0;
  nightScore= 0;
}

