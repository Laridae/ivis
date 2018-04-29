function start_question(){
 //tick
}

var currentQ = 1;

document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
  document.getElementById("question1").setAttribute("class", "question active"); //next
});

function show_next_question() {
 console.log(currentQ);
 document.getElementById("question" + currentQ).setAttribute("class", "question inactive");   //current
 document.getElementById("question" + (currentQ+1)).setAttribute("class", "question active"); //next
 currentQ = currentQ + 1;
 // We want to change group of currentQ to 'dark green'
 document.getElementById("question" + currentQ).setAttribute("group", "5"); 
}
