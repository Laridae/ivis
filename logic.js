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
 
 svg.select("circle:nth-child(" + currentQ + ")").style("fill", "green")
 currentQ = currentQ + 1;
 // If currentQ == 26 then{document.getElementById("options").setAttribute("class", "option inactive"); }  
 
}

  function show_next_question2() {
   console.log(currentQ);
   document.getElementById("question" + currentQ).setAttribute("class", "question inactive");   //current
   document.getElementById("question" + (currentQ+1)).setAttribute("class", "question active"); //next

   svg.select("circle:nth-child(" + currentQ + ")").style("fill", "pear")
   currentQ = currentQ + 1;
   // If currentQ == 26 then{document.getElementById("options").setAttribute("class", "option inactive"); }  

  }

  function show_next_question3() {
   console.log(currentQ);
   document.getElementById("question" + currentQ).setAttribute("class", "question inactive");   //current
   document.getElementById("question" + (currentQ+1)).setAttribute("class", "question active"); //next

   svg.select("circle:nth-child(" + currentQ + ")").style("fill", "orange")
   currentQ = currentQ + 1;
   // If currentQ == 26 then{document.getElementById("options").setAttribute("class", "option inactive"); }  

  }

  function show_next_question4() {
   console.log(currentQ);
   document.getElementById("question" + currentQ).setAttribute("class", "question inactive");   //current
   document.getElementById("question" + (currentQ+1)).setAttribute("class", "question active"); //next

   svg.select("circle:nth-child(" + currentQ + ")").style("fill", "red")
   currentQ = currentQ + 1;
   // If currentQ == 26 then{document.getElementById("options").setAttribute("class", "option inactive"); }  

  }

function choose_3_important(d) {
 // Show 25 options (reveal a div in html)
 // Make a click increase the radius of 'd' by 2.5
}
