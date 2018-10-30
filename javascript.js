var rec="";
var sq="";
var cir="";
var ell="";

//--------FORM SUBMIT BUTTTON------//

function validate(){
	var a=document.form.radio;
	var rec=a[0].checked;
	var cir=a[1].checked;
	var sq=a[2].checked;
	var ell=a[3].checked;
		
	
for (var i = 0; i < a.length; i++)
	{
		if(rec==true)
		{
outerFont.innerHTML = "<h2><b>Step 2: Insert your values</b></h2>";
innerFont.innerHTML = "You have selected <b>rectangle</b>, please input the required variables.";
form.innerHTML = "<input type='text' id='length' placeholder='Enter length'required>" + "<br>" + "<br>";
form.innerHTML += "<input type='text' id='breadth' placeholder='Enter breadth'required>" + "<br>"+ "<br>";
form.innerHTML += "<button type='button' class='btn btn-default' id='button3' onclick='rectangle()'>Got to step 3:</button>" + " ";
form.innerHTML += "<button type='reset' class='btn btn-default' id='button4'>Cancel</button>" + "<br>";
return true;
		
		} 
		else if (cir==true) 
			{
outerFont.innerHTML = "<h2><b>Step 2: Insert your values</b></h2>";
innerFont.innerHTML = "You have selected <b>circle</b>, please input the required variables.";
form.innerHTML = "<input type='text' id='diameter' placeholder='Enter diameter'required>" + "<br>"+ "<br>";
form.innerHTML += "<button type='button' class='btn btn-default' id='button5' onclick='circle()'>Got to step 3:</button>" + " ";
form.innerHTML += "<button type='reset' class='btn btn-default' id='button6'>Cancel</button>" + "<br>";

return true;
				
			}
			 else if (sq==true) 
			 	{
outerFont.innerHTML = "<h2><b>Step 2: Insert your values</b></h2>";
innerFont.innerHTML = "You have selected <b>square</b>, please input the required variables.";
form.innerHTML = "<input type='text' id='side' placeholder='Enter side'required>" + "<br>"+ "<br>";
form.innerHTML += "<button type='button' class='btn btn-default' id='button7' onclick='square()'>Got to step 3:</button>" + " ";
form.innerHTML += "<button type='reset' class='btn btn-default' id='button8'>Cancel</button>" + "<br>";
					return true;
					
				} 
					else if (ell==true)
						{
outerFont.innerHTML = "<h2><b>Step 2: Insert your values</b></h2>";
innerFont.innerHTML = "You have selected <b>ellipse</b>, please input the required variables.";
form.innerHTML = "<input type='text' id='xaxis' placeholder='Enter xaxis'required>" + "<br>" + "<br>";
form.innerHTML += "<input type='text' id='yaxis' placeholder='Enter yaxis'required>" + "<br>"+ "<br>";
form.innerHTML += "<button type='button' class='btn btn-default' id='button9' onclick='ellipse()'>Got to step 3:</button>" + " ";
form.innerHTML += "<button type='reset' class='btn btn-default' id='button10'>Cancel</button>" + "<br>";

return true;

						}
	window.alert("Select one option");
	return false;
}
}

//---------------------------------//


//-----CLEAR FUNCTION -----//
function clear() {
rec="";
cir=""; 
sq=""; 
ell="";
length=""; 
breadth="";
diameter=""; 
side=""; 
xaxis=""; 
yaxis="";
}
//-------------------------//


//-------SOLVE------------//
function rectangle() {
 var length = document.getElementById("length").value;
 var breadth = document.getElementById("breadth").value;
 var area = parseFloat(length) * parseFloat(breadth);

outerFont.innerHTML = "<h2><b>Step 3: Your results</b></h2>";
innerFont.innerHTML = "You calculated the area of a <b>rectangle</b> with length " + length + " and breadth " + breadth +".";
form.innerHTML ="The area of rectangle is: "+ area +"<br>"+"<br>";
form.innerHTML += "<button type='button' class='btn btn-default' id='button11' onclick='window.location.reload()' href='index.html'>Start Over:</button>";

}


function circle() {
 var diameter = document.getElementById("diameter").value;
 var pi=3.14;
 var onebyfour=0.25;
 var area = parseFloat(diameter) * pi * onebyfour;

outerFont.innerHTML = "<h2><b>Step 3: Your results</b></h2>";
innerFont.innerHTML = "You calculated the area of a <b>circle</b> with diameter of " + diameter + "." + "Below is your result.";
form.innerHTML ="The area of circle is: "+ area +"<br>"+"<br>";
form.innerHTML += "<button type='button' class='btn btn-default' id='button11' onclick='window.location.reload()' href='index.html'>Start Over:</button>";

}


function square() {
 var side = document.getElementById("side").value;
 var area = parseFloat(side) * parseFloat(side);

outerFont.innerHTML = "<h2><b>Step 3: Your results</b></h2>";
innerFont.innerHTML = "You calculated the area of a <b>square</b> with side " + side  + "." + "Below is your result.";
form.innerHTML ="The area of square is: "+ area +"<br>"+"<br>";
form.innerHTML += "<button type='button' class='btn btn-default' id='button11' onclick='window.location.reload()' href='index.html'>Start Over:</button>";

}

function ellipse() {
 var xaxis = document.getElementById("xaxis").value;
 var yaxis = document.getElementById("yaxis").value;
 var pi = 3.14;
 var area = parseFloat(xaxis) * parseFloat(yaxis) * pi;

outerFont.innerHTML = "<h2><b>Step 3: Your results</b></h2>";
innerFont.innerHTML = "You calculated the area of a <b>ellipse</b> with xaxis " + xaxis + " and yaxis " + yaxis +"." + "Below is your result.";
form.innerHTML ="The area of ellipse is: "+ area +"<br>"+"<br>";
form.innerHTML += "<button type='button' class='btn btn-default' id='button11' onclick='window.location.reload()' href='index.html'>Start Over:</button>";

}



//------------------------//


