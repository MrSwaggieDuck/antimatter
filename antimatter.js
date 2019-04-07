var antimatter = 10;
var dimension1 = {
	cost:10,
	amount:0,
	multiplier:1,
	next10:10,
}
var dimension2 = {
	cost:1000,
	amount:0,
	multiplier:1,
	next10:10,
}
var dimension3 = {
	cost:100000,
	amount:0,
	multiplier:1,
	next10:10,
}
var dimension4 = {
	cost:10000000,
	amount:0,
	multiplier:1,
	next10:10,
}
var dimension5 = {
	cost:1000000000,
	amount:0,
	multiplier: 1,
	next10:10,
}
var dimension6 = {
	cost:100000000000,
	amount:0,
	multiplier: 1,
	next10:10,
}
var dimension7 = {
	cost:10000000000000,
	amount:0,
	multiplier: 1,
	next10:10,
}
var dimension8 = {
	cost:1000000000000000,
	amount:0,
	multiplier: 1,
	next10:10,
}

function buyDimension1() {
	if(antimatter >= dimension1.cost) {
		antimatter -= dimension1.cost;
		dimension1.amount += 1;
		dimension1.next10 -= 1;
		if(dimension1.next10 == 0) {
			dimension1.next10 = 10;
			dimension1.cost *= 100;
			dimension1.multiplier *= 2;
		}	
	}
}

function buyDimension1next10() {
	if(antimatter >= dimension1.cost*dimension1.next10) {
		antimatter -= dimension1.cost*dimension1.next10;
		dimension1.amount += dimension1.next10;
		dimension1.next10 = 10;
		dimension1.cost *= 100;
		dimension1.multiplier *= 2;
	}
}

function buyDimension2() {
	if(antimatter >= dimension2.cost) {
		antimatter -= dimension2.cost;
		dimension2.amount += 1;
		dimension2.next10 -= 1;
		if(dimension2.next10 == 0) {
			dimension2.next10 = 10;
			dimension2.cost *= 1000;
			dimension2.multiplier *= 2;
		}
	}
}

function buyDimension2next10() {
	if(antimatter >= dimension2.cost*dimension2.next10) {
		antimatter -= dimension2.cost*dimension2.next10;
		dimension2.amount += dimension2.next10;
		dimension2.next10 = 10;
		dimension2.cost *= 1000;
		dimension2.multiplier *= 2;
	}
}

function buyDimension3() {
	if(antimatter >= dimension3.cost) {
		antimatter -= dimension3.cost;
		dimension3.amount += 1;
		dimension3.next10 -= 1;
		if(dimension3.next10 == 0) {
			dimension3.next10 = 10;
			dimension3.cost *= 10000;
			dimension3.multiplier *= 2;
		}	
	}
}

function buyDimension3next10() {
	if(antimatter >= dimension3.cost*dimension3.next10) {
		antimatter -= dimension3.cost*dimension3.next10;
		dimension3.amount += dimension3.next10;
		dimension3.next10 = 10;
		dimension3.cost *= 10000;
		dimension3.multiplier *= 2;
	}
}

function buyDimension4() {
	if(antimatter >= dimension4.cost) {
		antimatter -= dimension4.cost;
		dimension4.amount += 1;
		dimension4.next10 -= 1;
		if(dimension4.next10 == 0) {
			dimension4.next10 = 10;
			dimension4.cost *= 100000;
			dimension4.multiplier *= 2;
		}	
	}
}

function buyDimension4next10() {
	if(antimatter >= dimension4.cost*dimension4.next10) {
		antimatter -= dimension4.cost*dimension4.next10;
		dimension4.amount += dimension4.next10;
		dimension4.next10 = 10;
		dimension4.cost *= 100000;
		dimension4.multiplier *= 2;
	}
}

function buyDimension5() {
	if(antimatter >= dimension5.cost) {
		antimatter -= dimension5.cost;
		dimension5.amount += 1;
		dimension5.next10 -= 1;
		if(dimension5.next10 == 0) {
			dimension5.next10 = 10;
			dimension5.cost *= 100000;
			dimension5.multiplier *= 2;
		}	
	}
}

function buyDimension5next10() {
	if(antimatter >= dimension5.cost*dimension5.next10) {
		antimatter -= dimension5.cost*dimension5.next10;
		dimension5.amount += dimension5.next10;
		dimension5.next10 = 10;
		dimension5.cost *= 1000000;
		dimension5.multiplier *= 2;
	}
}

function buyDimension6() {
	if(antimatter >= dimension6.cost) {
		antimatter -= dimension6.cost;
		dimension6.amount += 1;
		dimension6.next10 -= 1;
		if(dimension6.next10 == 0) {
			dimension6.next10 = 10;
			dimension6.cost *= 10000000;
			dimension6.multiplier *= 2;
		}	
	}
}

function buyDimension6next10() {
	if(antimatter >= dimension6.cost*dimension6.next10) {
		antimatter -= dimension6.cost*dimension6.next10;
		dimension6.amount += dimension6.next10;
		dimension6.next10 = 10;
		dimension6.cost *= 100000;
		dimension6.multiplier *= 2;
	}
}

function buyDimension7() {
	if(antimatter >= dimension7.cost) {
		antimatter -= dimension7.cost;
		dimension7.amount += 1;
		dimension7.next10 -= 1;
		if(dimension7.next10 == 0) {
			dimension7.next10 = 10;
			dimension7.cost *= 100000000;
			dimension7.multiplier *= 2;
		}	
	}
}

function buyDimension7next10() {
	if(antimatter >= dimension7.cost*dimension7.next10) {
		antimatter -= dimension7.cost*dimension7.next10;
		dimension7.amount += dimension7.next10;
		dimension7.next10 = 10;
		dimension7.cost *= 100000000;
		dimension7.multiplier *= 2;
	}
}

function buyDimension8() {
	if(antimatter >= dimension8.cost) {
		antimatter -= dimension8.cost;
		dimension8.amount += 1;
		dimension8.next10 -= 1;
		if(dimension8.next10 == 0) {
			dimension8.next10 = 10;
			dimension8.cost *= 1000000000;
			dimension8.multiplier *= 2;
		}	
	}
}

function buyDimension8next10() {
	if(antimatter >= dimension8.cost*dimension8.next10) {
		antimatter -= dimension8.cost*dimension8.next10;
		dimension8.amount += dimension8.next10;
		dimension8.next10 = 10;
		dimension8.cost *= 1000000000;
		dimension8.multiplier *= 2;
	}
}

function update() {
	antimatter += (dimension1.amount*dimension1.multiplier) / 10;
	dimension1.amount += (dimension2.amount*dimension2.multiplier) / 10;
	dimension2.amount += (dimension3.amount*dimension2.multiplier) / 10;
	dimension3.amount += (dimension4.amount*dimension4.multiplier) / 10;
	dimension4.amount += (dimension5.amount*dimension5.multiplier) / 10;
	dimension5.amount += (dimension6.amount*dimension6.multiplier) / 10;
	dimension6.amount += (dimension7.amount*dimension7.multiplier) / 10;
	dimension7.amount += (dimension8.amount*dimension8.multiplier) / 10;

	document.querySelector("#antimatterCounter").innerHTML = convert(antimatter) + " Antimatter";
//First Dimension
	document.querySelector("#dim1Multiplier").innerHTML = convert(dimension1.multiplier) + "X";
	document.querySelector("#dim1Amount").innerHTML = convert(dimension1.amount);
	document.querySelector("#dim1Growth").innerHTML = "+" + convert(dimension2.amount*dimension2.multiplier) + "/s";
	document.querySelector("#dim1Button").innerHTML = "Buy First Dimension: " + convert(dimension1.cost) + " Antimatter";
	document.querySelector("#dim1Button10").innerHTML = "Buy til next 10: " + convert(dimension1.cost*dimension1.next10) + " Antimatter";

	if(antimatter >= dimension1.cost) {
		document.querySelector("#dim1Button").classList.remove("buyButtonUnavailable");
		document.querySelector("#dim1Button").classList.add("buyButtonAvailable");
	} else {
		document.querySelector("#dim1Button").classList.add("buyButtonUnavailable");
		document.querySelector("#dim1Button").classList.remove("buyButtonAvailable");
	}

	if(antimatter >= dimension1.cost*dimension1.next10) {
		document.querySelector("#dim1Button10").classList.add("buy10ButtonAvailable");
		document.querySelector("#dim1Button10").classList.remove("buy10ButtonUnavailable");
	} else {
		document.querySelector("#dim1Button10").classList.add("buy10ButtonUnavailable");
		document.querySelector("#dim1Button10").classList.remove("buy10ButtonAvailable");
	}
//Second Dimension
	document.querySelector("#dim2Multiplier").innerHTML = convert(dimension2.multiplier) + "X";
	document.querySelector("#dim2Amount").innerHTML = convert(dimension2.amount);
	document.querySelector("#dim2Growth").innerHTML = "+" + convert(dimension3.amount*dimension3.multiplier) + "/s"
	document.querySelector("#dim2Button").innerHTML = "Buy Second Dimension: " + convert(dimension2.cost) + " Antimatter";
	document.querySelector("#dim2Button10").innerHTML = "Buy til next 10: " + convert(dimension2.cost*dimension2.next10) + " Antimatter";

	if(antimatter >= dimension2.cost) {
		document.querySelector("#dim2Button").classList.remove("buyButtonUnavailable");
		document.querySelector("#dim2Button").classList.add("buyButtonAvailable");
	} else {
		document.querySelector("#dim2Button").classList.add("buyButtonUnavailable");
		document.querySelector("#dim2Button").classList.remove("buyButtonAvailable");
	}

	if(antimatter >= dimension2.cost*dimension2.next10) {
		document.querySelector("#dim2Button10").classList.add("buy10ButtonAvailable");
		document.querySelector("#dim2Button10").classList.remove("buy10ButtonUnavailable");
	} else {
		document.querySelector("#dim2Button10").classList.add("buy10ButtonUnavailable");
		document.querySelector("#dim2Button10").classList.remove("buy10ButtonAvailable");
	}
//Third Dimension
	document.querySelector("#dim3Multiplier").innerHTML = convert(dimension3.multiplier) + "X";
	document.querySelector("#dim3Amount").innerHTML = convert(dimension3.amount);
	document.querySelector("#dim3Growth").innerHTML = "+" + convert(dimension4.amount*dimension4.multiplier) + "/s";
	document.querySelector("#dim3Button").innerHTML = "Buy Third Dimension: " + convert(dimension3.cost) + " Antimatter";
	document.querySelector("#dim3Button10").innerHTML = "Buy til next 10: " + convert(dimension3.cost*dimension3.next10) + " Antimatter";

	if(antimatter >= dimension3.cost) {
		document.querySelector("#dim3Button").classList.remove("buyButtonUnavailable");
		document.querySelector("#dim3Button").classList.add("buyButtonAvailable");
	} else {
		document.querySelector("#dim3Button").classList.add("buyButtonUnavailable");
		document.querySelector("#dim3Button").classList.remove("buyButtonAvailable");
	}

	if(antimatter >= dimension3.cost*dimension3.next10) {
		document.querySelector("#dim3Button10").classList.add("buy10ButtonAvailable");
		document.querySelector("#dim3Button10").classList.remove("buy10ButtonUnavailable");
	} else {
		document.querySelector("#dim3Button10").classList.add("buy10ButtonUnavailable");
		document.querySelector("#dim3Button10").classList.remove("buy10ButtonAvailable");
	}
//Fourth Dimension
	document.querySelector("#dim4Multiplier").innerHTML = convert(dimension4.multiplier) + "X";
	document.querySelector("#dim4Amount").innerHTML = convert(dimension4.amount);
	document.querySelector("#dim4Growth").innerHTML = "+" + convert(dimension5.amount*dimension5.multiplier) + "/s";
	document.querySelector("#dim4Button").innerHTML = "Buy Fourth Dimension: " + convert(dimension4.cost) + " Antimatter";
	document.querySelector("#dim4Button10").innerHTML = "Buy til next 10: " + convert(dimension4.cost*dimension4.next10) + " Antimatter";

	if(antimatter >= dimension4.cost) {
		document.querySelector("#dim4Button").classList.remove("buyButtonUnavailable");
		document.querySelector("#dim4Button").classList.add("buyButtonAvailable");
	} else {
		document.querySelector("#dim4Button").classList.add("buyButtonUnavailable");
		document.querySelector("#dim4Button").classList.remove("buyButtonAvailable");
	}

	if(antimatter >= dimension4.cost*dimension4.next10) {
		document.querySelector("#dim4Button10").classList.add("buy10ButtonAvailable");
		document.querySelector("#dim4Button10").classList.remove("buy10ButtonUnavailable");
	} else {
		document.querySelector("#dim4Button10").classList.add("buy10ButtonUnavailable");
		document.querySelector("#dim4Button10").classList.remove("buy10ButtonAvailable");
	}
//Fifth Dimension
  	document.querySelector("#dim5Multiplier").innerHTML = convert(dimension5.multiplier) + "X";
	document.querySelector("#dim5Amount").innerHTML = convert(dimension5.amount);
	document.querySelector("#dim5Growth").innerHTML = "+" + convert(dimension6.amount*dimension6.multiplier) + "/s";
	document.querySelector("#dim5Button").innerHTML = "Buy Fifth Dimension: " + convert(dimension5.cost) + " Antimatter";
	document.querySelector("#dim5Button10").innerHTML = "Buy til next 10: " + convert(dimension5.cost*dimension5.next10) + " Antimatter";

	if(antimatter >= dimension5.cost) {
		document.querySelector("#dim5Button").classList.remove("buyButtonUnavailable");
		document.querySelector("#dim5Button").classList.add("buyButtonAvailable");
	} else {
		document.querySelector("#dim5Button").classList.add("buyButtonUnavailable");
		document.querySelector("#dim5Button").classList.remove("buyButtonAvailable");
	}

	if(antimatter >= dimension5.cost*dimension5.next10) {
		document.querySelector("#dim5Button10").classList.add("buy10ButtonAvailable");
		document.querySelector("#dim5Button10").classList.remove("buy10ButtonUnavailable");
	} else {
		document.querySelector("#dim5Button10").classList.add("buy10ButtonUnavailable");
		document.querySelector("#dim5Button10").classList.remove("buy10ButtonAvailable");
	}
//Sixth Dimension
  	document.querySelector("#dim6Multiplier").innerHTML = convert(dimension6.multiplier) + "X";
	document.querySelector("#dim6Amount").innerHTML = convert(dimension6.amount);
	document.querySelector("#dim6Growth").innerHTML = "+" + convert(dimension7.amount*dimension7.multiplier) + "/s";
	document.querySelector("#dim6Button").innerHTML = "Buy Sixth Dimension: " + convert(dimension6.cost) + " Antimatter";
	document.querySelector("#dim6Button10").innerHTML = "Buy til next 10: " + convert(dimension6.cost*dimension6.next10) + " Antimatter";

	if(antimatter >= dimension6.cost) {
		document.querySelector("#dim6Button").classList.remove("buyButtonUnavailable");
		document.querySelector("#dim6Button").classList.add("buyButtonAvailable");
	} else {
		document.querySelector("#dim6Button").classList.add("buyButtonUnavailable");
		document.querySelector("#dim6Button").classList.remove("buyButtonAvailable");
	}

	if(antimatter >= dimension6.cost*dimension6.next10) {
		document.querySelector("#dim6Button10").classList.add("buy10ButtonAvailable");
		document.querySelector("#dim6Button10").classList.remove("buy10ButtonUnavailable");
	} else {
		document.querySelector("#dim6Button10").classList.add("buy10ButtonUnavailable");
		document.querySelector("#dim6Button10").classList.remove("buy10ButtonAvailable");
	}
//Seventh Dimension
	document.querySelector("#dim7Multiplier").innerHTML = convert(dimension7.multiplier) + "X";
	document.querySelector("#dim7Amount").innerHTML = convert(dimension7.amount);
	document.querySelector("#dim7Growth").innerHTML = "+" + convert(dimension8.amount*dimension8.multiplier) + "/s";
	document.querySelector("#dim7Button").innerHTML = "Buy Seventh Dimension: " + convert(dimension7.cost) + " Antimatter";
	document.querySelector("#dim7Button10").innerHTML = "Buy til next 10: " + convert(dimension7.cost*dimension7.next10) + " Antimatter";

	if(antimatter >= dimension7.cost) {
		document.querySelector("#dim7Button").classList.remove("buyButtonUnavailable");
		document.querySelector("#dim7Button").classList.add("buyButtonAvailable");
	} else {
		document.querySelector("#dim7Button").classList.add("buyButtonUnavailable");
		document.querySelector("#dim7Button").classList.remove("buyButtonAvailable");
	}

	if(antimatter >= dimension7.cost*dimension7.next10) {
		document.querySelector("#dim7Button10").classList.add("buy10ButtonAvailable");
		document.querySelector("#dim7Button10").classList.remove("buy10ButtonUnavailable");
	} else {
		document.querySelector("#dim7Button10").classList.add("buy10ButtonUnavailable");
		document.querySelector("#dim7Button10").classList.remove("buy10ButtonAvailable");
	}
//Eighth Dimension
    document.querySelector("#dim8Multiplier").innerHTML = convert(dimension8.multiplier) + "X";
	document.querySelector("#dim8Amount").innerHTML = convert(dimension8.amount);
	document.querySelector("#dim8Growth").innerHTML = "+0/s";
	document.querySelector("#dim8Button").innerHTML = "Buy Eighth Dimension: " + convert(dimension8.cost) + " Antimatter";
	document.querySelector("#dim8Button10").innerHTML = "Buy til next 10: " + convert(dimension8.cost*dimension8.next10) + " Antimatter";

	if(antimatter >= dimension8.cost) {
		document.querySelector("#dim8Button").classList.remove("buyButtonUnavailable");
		document.querySelector("#dim8Button").classList.add("buyButtonAvailable");
	} else {
		document.querySelector("#dim8Button").classList.add("buyButtonUnavailable");
		document.querySelector("#dim8Button").classList.remove("buyButtonAvailable");
	}

	if(antimatter >= dimension8.cost*dimension8.next10) {
		document.querySelector("#dim8Button10").classList.add("buy10ButtonAvailable");
		document.querySelector("#dim8Button10").classList.remove("buy10ButtonUnavailable");
	} else {
		document.querySelector("#dim8Button10").classList.add("buy10ButtonUnavailable");
		document.querySelector("#dim8Button10").classList.remove("buy10ButtonAvailable");
	}

	//console.log(antimatter);
}

function convert(number) {
	if (number >= 1e33) {
		number = Math.round(number/1e31)/100 + "De";
	} else if (number >= 1e30) {
		number = Math.round(number/1e28)/100 + "No";
	} else if (number >= 1e27) {
		number = Math.round(number/1e25)/100 + "Oc";
	} else if (number >= 1e24) {
		number = Math.round(number/1e22)/100 + "Sp"
	} else if (number >= 1e21) {
		number = Math.round(number/1e19)/100 + "Sx";
	} else if (number >= 1e18) {
		number = Math.round(number/1e16)/100 + "Qu";
	} else if (number >= 1e15) {
		number = Math.round(number/1e13)/100 + "Qa";
	} else if (number >= 1e12) {
		number = Math.round(number/1e10)/100 + "T";
	} else if (number >= 1e9) {
		number = Math.round(number/1e7)/100 + "B";
	} else if (number >= 1e6) {
		number = Math.round(number/1e4)/100 + "M";
	} else if(number >= 1e3) {
		number = Math.round(number/1e1)/100 +"K"
	} else if(number < 1e3) {
		number = Math.round(number);
	}
	return number
}

window.setInterval(update, 100);