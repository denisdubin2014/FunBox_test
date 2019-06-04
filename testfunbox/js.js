katchange1 = document.getElementById("svgborder1");
katchange2 = document.getElementById("svgborder2");
katchange3 = document.getElementById("svgborder3");

circle1 = document.getElementById("catweight1");
circle2 = document.getElementById("catweight2");
circle3 = document.getElementById("catweight3");

buy11 = document.getElementById("aboutfooter11");
buy12 = document.getElementById("aboutfooter12");
buy13 = document.getElementById("aboutfooter13");

buy21 = document.getElementById("aboutfooter21");
buy22 = document.getElementById("aboutfooter22");
buy23 = document.getElementById("aboutfooter23");

buy31 = document.getElementById("aboutfooter31");
buy32 = document.getElementById("aboutfooter32");
buy33 = document.getElementById("aboutfooter33");

var x = 0;
var y = 0;
var z = 0;




//для 1ого кота


function kat1click1() {
			           if (x == 0) {
						            x = 1; 
					   }
					   else if(x = 2) {
					                katchange1.style.stroke = "rgb(22,152,217)";
								    circle1.style.backgroundColor = "rgb(22,153,217)";
								    buy11.style.display = "block";
									buy12.style.display = "none";
								    buy13.style.display = "none";
									x = 0;
					   }
} 

function kat1out1() {
	                  if(x == 1) {
						         katchange1.style.stroke = "rgb(217,22,103)";
						         circle1.style.backgroundColor = "rgb(217,22,103)";
								 buy11.style.display = "none";
								 buy12.style.display = "block";
								 buy13.style.display = "none";
								 
								 x = 2;
					  }
}





kat1.addEventListener("click", kat1click1);
kat1.addEventListener("mouseleave", kat1out1);



//для 2ого кота

function kat1click2() {
			           if (y == 0) {
						            y = 1; 
					   }
					   else if(y = 2) {
					                katchange2.style.stroke = "rgb(22,152,217)";
								    circle2.style.backgroundColor = "rgb(22,153,217)";
								    buy21.style.display = "block";
									buy22.style.display = "none";
								    buy23.style.display = "none";
									y = 0;
					   }
} 

function kat1out2() {
	                  if(y == 1) {
						         katchange2.style.stroke = "rgb(217,22,103)";
						         circle2.style.backgroundColor = "rgb(217,22,103)";
								 buy21.style.display = "none";
								 buy22.style.display = "block";
								 buy23.style.display = "none";
								 
								 y = 2;
					  }
}






kat2.addEventListener("click", kat1click2);
kat2.addEventListener("mouseleave", kat1out2);




//для 3ого кота

function kat1click3() {
			           if (z == 0) {
						            z = 1; 
					   }
					   else if(z = 2) {
					                svgborderskiplast.style.zIndex = "0";
								    circle3.style.backgroundColor = "rgb(22,153,217)";
								    buy31.style.display = "block";
									buy32.style.display = "none";
								    buy33.style.display = "none";
									z = 0;
					   }
} 

function kat1out3() {
	                  if(z == 1) {
						         svgborderskiplast.style.zIndex = "9999";
						         circle3.style.backgroundColor = "rgb(179,179,179)";
								 buy31.style.display = "none";
								 buy32.style.display = "none";
								 buy33.style.display = "block";
								 
								 z = 2;
					  }
}






kat3.addEventListener("click", kat1click3);
kat3.addEventListener("mouseleave", kat1out3);