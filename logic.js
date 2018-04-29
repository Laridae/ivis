function start_question(){
 //tick
}

function show_next_question(d) {
 document.getElementById("question" + d).setAttribute("class", "question inactive");   //current
 document.getElementById("question" + (d+1)).setAttribute("class", "question active"); //next
}
