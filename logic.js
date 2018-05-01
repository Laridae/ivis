function start_question(){
 //tick
}

var currentQ = 0; //Changed from 1

document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
  document.getElementById("question0").setAttribute("class", "question active"); //changed from 1
  //document.getElementById("start_option").setAttribute("class", "question active");
});

  // Quick fix for the start button
  function mission_start() {
   console.log(currentQ);
   document.getElementById("question" + currentQ).setAttribute("class", "question inactive");   //current
   document.getElementById("question" + (currentQ+1)).setAttribute("class", "question active"); //next

   document.getElementById("start_option").setAttribute("class", "option inactive");
   document.getElementById("option1").setAttribute("class", "question active");
   document.getElementById("option2").setAttribute("class", "question active");
   document.getElementById("option3").setAttribute("class", "question active");
   document.getElementById("option4").setAttribute("class", "question active");
   currentQ = currentQ + 1;
   // If currentQ == 26 then{document.getElementById("options").setAttribute("class", "option inactive"); }  

  }

function show_next_question() {
 console.log(currentQ);
 document.getElementById("question" + currentQ).setAttribute("class", "question inactive");   //current
 document.getElementById("question" + (currentQ+1)).setAttribute("class", "question active"); //next
 
 svg.select("circle:nth-child(" + currentQ + ")").style("fill", "limegreen")
 currentQ = currentQ + 1;
 // If currentQ == 26 then{document.getElementById("options").setAttribute("class", "option inactive"); }  
 
}

  function show_next_question2() {
   console.log(currentQ);
   document.getElementById("question" + currentQ).setAttribute("class", "question inactive");   //current
   document.getElementById("question" + (currentQ+1)).setAttribute("class", "question active"); //next

   svg.select("circle:nth-child(" + currentQ + ")").style("fill", "greenyellow")
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

   svg.select("circle:nth-child(" + currentQ + ")").style("fill", "orangered")
   currentQ = currentQ + 1;
   // If currentQ == 26 then{document.getElementById("options").setAttribute("class", "option inactive"); }  

  }

function choose_3_important(d) {
 // Show 25 options (reveal a div in html)
 // Make a click increase the radius of 'd' by 2.5
}
