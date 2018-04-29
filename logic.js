function start_question(){
 //tick
}

var d = 1;

document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
  document.getElementById("question1").setAttribute("class", "question active"); //next
});

function show_next_question() {
 console.log();
 document.getElementById("question" + d).setAttribute("class", "question inactive");   //current
 document.getElementById("question" + (d+1)).setAttribute("class", "question active"); //next
}
