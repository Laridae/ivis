function start_question(){
 //tick
}

function show_next_question(d) {
 var currentQ = document.getElementById("question" + d).setAttribute("class", "question inactive");
 var nextQ = document.getElementById("question" + (d+1)).setAttribute("class", "question active");
}
