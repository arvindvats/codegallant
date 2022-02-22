var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var switchColor = document.getElementById("switchColor");
var temp;
color1.value = "#00ffcc";
color2.value = "#A600FF";

// linear-gradient(to right, rgb(235, 255, 255), rgb(60, 144, 144)) // - default

css.textContent = "linear-gradient(to right, "
	+color1.value
	+", "
	+color2.value
	+")";


function copyGradient(){
	css.textContent = body.style.background;
	console.log("color1 value: "+color1.value
		+"; color2 value: "+color2.value);
}

function changeGradient(){
	body.style.background = "linear-gradient(to right, "
	+color1.value
	+", "
	+color2.value
	+")";

	copyGradient();
}

function switchGradient(){
	temp = color1.value;
	color1.value = color2.value;
	color2.value = temp;

	changeGradient(color1.value, color2.value);
	copyGradient();
}

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
switchColor.addEventListener("click", switchGradient);
