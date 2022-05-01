
//grow
//inspect box element in developer tools. must have all dimensions increased.
   document.getElementById("button1").addEventListener("click", function() {

   document.getElementById("box").style = "height:250px; width:250px;background-color: orange;margin: 25px";

  });

//blue
//again using developer tools. restore original dimensions. change background-color to blue.
  document.getElementById("button2").addEventListener("click", function() {

  document.getElementById("box").style = "height:150px; width:150px;background-color: blue;margin: 25px";

  });

//fade
//onclick event with .fadeOut function. not affecting dimensions in developer tools
  document.getElementById("button3").addEventListener("click", function() {

  document.getElementById("box").onclick.fadeOut();

  });

//reset
//setting the box back to original dimensions from developer tools.
  document.getElementById("button4").addEventListener("click", function() {

  document.getElementById("box").style = "height:150px; width:150px;background-color: orange;margin: 25px";

  });
