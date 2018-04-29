function start_question(){
 //tick
}

document.addEventListener("DOMContentLoaded", function(event) { 
  //do work

document.getElementById("question1").setAttribute("class", "question active"); //next

});


function show_next_question(d) {
 document.getElementById("question" + d).setAttribute("class", "question inactive");   //current
 document.getElementById("question" + (d+1)).setAttribute("class", "question active"); //next
}
