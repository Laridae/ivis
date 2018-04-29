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
 // We want to change group of [the node] to 'dark green'
 // Trick is that the id is currently "Klimatpolitik bör överordnas..." which can't be incremented.
 // TODO: remake so howering with cursor above text still shows text, but the id is a number.
 // document.getElementById("question" + currentQ).setAttribute("group", "5"); //remainder, "question" =/= node
 // svg.selectAll("circle").data().style("fill", "red") //Change the colour of currentNode to dark green. 
 svg.select("circle:nth-child("currentQ")").style("fill", "green")
 
}
