function results() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	getheight = height * 0.3048; // 1 foot = 0.3048 meters
	getBMI = (weight / Math.pow(getheight, 2)).toFixed(2);

	if (getBMI <= 18.4) {
		showResults = "Your BMI is " + getBMI;
		document.querySelector(".message").style.display = "none";
		document.getElementById("showUnderweight").innerHTML = "Result : Underweight &#128533";
	}

	if (getBMI >= 18.5 && getBMI <= 24.9) {
		showResults = "Your BMI is " + getBMI;
		document.querySelector(".message").style.display = "none";
		document.getElementById("showNormal").innerHTML = "Result : Healthy Weight &#128512;";
	}

	if (getBMI >= 25 && getBMI <= 29.9) {
		showResults = "Your BMI is " + getBMI;
		document.querySelector(".message").style.display = "none";
		document.getElementById("showOverweight").innerHTML = "Result : Overweight &#128544";
	}

	if (getBMI >= 30) {
		showResults = "Your BMI is " + getBMI;
		document.querySelector(".message").style.display = "none";
		document.getElementById("showObese").innerHTML = "Result : Obesity &#128545";
	}

	if ((weight.length <= 0) || (height.length <= 0)) {
		document.getElementById("message").innerHTML = "Note : Please enter your exact height & weight.";
		document.querySelector(".cards-2").style.display = "none";
		document.querySelector("#showResult").style.display = "none";
	}

	if ((weight < 0) || (height < 0)) {
		document.getElementById("message").innerHTML = "Note : Height and weight should not be negative values.";
		document.querySelector(".cards-2").style.display = "none";
		document.querySelector("#showResult").style.display = "none";
	}

	if ((weight == 0) || (height == 0)) {
		document.getElementById("message").innerHTML = "Note : Please enter your exact height & weight.";
		document.querySelector(".cards-2").style.display = "none";
		document.querySelector("#showResult").style.display = "none";
	}

	else {
		document.getElementById("showResult").innerHTML = showResults;
	}

	// remove the [results] button

	document.querySelector(".reset").style.display = "block";
	document.querySelector(".results").style.display = "none";
}