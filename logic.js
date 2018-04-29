alert("Du har virus!")

var tick = 1

function show_next_question(d) {
 var currentQ = document.getElementById("question" + d).setAttribute("class", "inactive");
 var nextQ = document.getElementById("fråga" + (d+1)).setAttribute("class", "active");
 currentQ set attribute
 hide div.d; 
 show div.x;
}
