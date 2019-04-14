//Load Stats
if(localStorage.hasOwnProperty("antimatter")) {
	var antimatter = Number(localStorage.getItem("antimatter"));
	var matter = Number(localStorage.getItem("matter"));
	var timeSpent = Number(localStorage.getItem("timespent"));
	if (localStorage.getItem("notation") == "scientific") {
		document.querySelector("#scientificRadio").checked = true;
	} else if (localStorage.getItem("notation") == "standard") {
		document.querySelector("#standardRadio").checked = true;
	}
	var dimensionBoost = {
		cost:Number(localStorage.getItem("dimensionBoostCost")),
		multiplier:Number(localStorage.getItem("dimensionBoostMultiplier")),
		amount:Number(localStorage.getItem("dimensionBoostAmount")),
	};
	var dimension1 = {
		cost:Number(localStorage.getItem("dimension1cost")),
		amount:Number(localStorage.getItem("dimension1amount")),
		multiplier:Number(localStorage.getItem("dimension1multiplier")),
		next10:Number(localStorage.getItem("dimension1next10")),
	};
	var dimension2 = {
		cost:Number(localStorage.getItem("dimension2cost")),
		amount:Number(localStorage.getItem("dimension2amount")),
		multiplier:Number(localStorage.getItem("dimension2multiplier")),
		next10:Number(localStorage.getItem("dimension2next10")),
	};
	var dimension3 = {
		cost:Number(localStorage.getItem("dimension3cost")),
		amount:Number(localStorage.getItem("dimension3amount")),
	multiplier:Number(localStorage.getItem("dimension3multiplier")),
		next10:Number(localStorage.getItem("dimension3next10")),
	};
	var dimension4 = {
		cost:Number(localStorage.getItem("dimension4cost")),
		amount:Number(localStorage.getItem("dimension4amount")),
		multiplier:Number(localStorage.getItem("dimension4multiplier")),
		next10:Number(localStorage.getItem("dimension4next10")),
	};
	var dimension5 = {
		cost:Number(localStorage.getItem("dimension5cost")),
		amount:Number(localStorage.getItem("dimension5amount")),
		multiplier: Number(localStorage.getItem("dimension5multiplier")),
		next10:Number(localStorage.getItem("dimension5next10")),
	};
	var dimension6 = {
		cost:Number(localStorage.getItem("dimension6cost")),
		amount:Number(localStorage.getItem("dimension6amount")),
		multiplier: Number(localStorage.getItem("dimension6multiplier")),
		next10:Number(localStorage.getItem("dimension6next10")),
	};
	var dimension7 = {
		cost:Number(localStorage.getItem("dimension7cost")),
		amount:Number(localStorage.getItem("dimension7amount")),
		multiplier: Number(localStorage.getItem("dimension7multiplier")),
		next10:Number(localStorage.getItem("dimension7next10")),
	};
	var dimension8 = {
		cost:Number(localStorage.getItem("dimension8cost")),
		amount:Number(localStorage.getItem("dimension8amount")),
		multiplier: Number(localStorage.getItem("dimension8multiplier")),
		next10:Number(localStorage.getItem("dimension8next10")),
	};
} else {
	var antimatter = 10;
	var matter = 0;
	var notation = "standard";
	var timeSpent = 0;
	var dimensionBoost = {
		cost:10,
		multiplier:1,
		amount:0,
	}
	var dimension1 = {
		cost:10,
		amount:0,
		multiplier:1,
		next10:10,
	};
	var dimension2 = {
		cost:1000,
		amount:0,
		multiplier:1,
		next10:10,
	};
	var dimension3 = {
		cost:100000,
		amount:0,
		multiplier:1,
		next10:10,
	};
	var dimension4 = {
		cost:10000000,
		amount:0,
		multiplier:1,
		next10:10,
	};
	var dimension5 = {
		cost:1000000000,
		amount:0,
		multiplier: 1,
		   next10:10
	};
	var dimension6 = {
		cost:100000000000,
		amount:0,
		multiplier: 1,
		next10:10
	};
	var dimension7 = {
		cost:10000000000000,
		amount:0,
		multiplier: 1,
		next10:10,
	};
	var dimension8 = {
		cost:1000000000000000,
		amount:0,
		multiplier: 1,
		next10:10,
	};		
}

if(JSON.parse(localStorage.getItem("studie62bought")) == true) {
	document.querySelector("#autobuyersNav").onclick = function() {window.location.href="autobuyers.htm"};
}
if(JSON.parse(localStorage.getItem("studie73bought")) == true) {
	var studie73Multiplier = 2.1;
} else {
	var studie73Multiplier = 2;
}

//Buy Functions
	function buyDimension1() {
		if(antimatter >= dimension1.cost) {
			antimatter -= dimension1.cost;
			dimension1.amount += 1;
			dimension1.next10 -= 1;
			if(dimension1.next10 == 0) {
				dimension1.next10 = 10;
				dimension1.cost *= 100;
				dimension1.multiplier *= studie73Multiplier;
			}	
		}
	}
	function buyDimension1next10() {
		if(antimatter >= dimension1.cost*dimension1.next10) {
			antimatter -= dimension1.cost*dimension1.next10;
			dimension1.amount += dimension1.next10;
			dimension1.next10 = 10;
			dimension1.cost *= 100;
			dimension1.multiplier *= studie73Multiplier;
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
				dimension2.multiplier *= studie73Multiplier;
			}
		}
	}
	function buyDimension2next10() {
		if(antimatter >= dimension2.cost*dimension2.next10) {
			antimatter -= dimension2.cost*dimension2.next10;
			dimension2.amount += dimension2.next10;
			dimension2.next10 = 10;
			dimension2.cost *= 1000;
			dimension2.multiplier *= studie73Multiplier;
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
				dimension3.multiplier *= studie73Multiplier;
			}	
		}
	}
	function buyDimension3next10() {
		if(antimatter >= dimension3.cost*dimension3.next10) {
			antimatter -= dimension3.cost*dimension3.next10;
			dimension3.amount += dimension3.next10;
			dimension3.next10 = 10;
			dimension3.cost *= 10000;
			dimension3.multiplier *= studie73Multiplier;
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
				dimension4.multiplier *= studie73Multiplier;
			}	
		}
	}
	function buyDimension4next10() {
		if(antimatter >= dimension4.cost*dimension4.next10) {
			antimatter -= dimension4.cost*dimension4.next10;
			dimension4.amount += dimension4.next10;
			dimension4.next10 = 10;
			dimension4.cost *= 100000;
			dimension4.multiplier *= studie73Multiplier;
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
				dimension5.multiplier *= studie73Multiplier;
			}	
		}
	}
	function buyDimension5next10() {
		if(antimatter >= dimension5.cost*dimension5.next10) {
			antimatter -= dimension5.cost*dimension5.next10;
			dimension5.amount += dimension5.next10;
			dimension5.next10 = 10;
			dimension5.cost *= 1000000;
			dimension5.multiplier *= studie73Multiplier;
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
				dimension6.multiplier *= studie73Multiplier;
			}	
		}
	}
	function buyDimension6next10() {
		if(antimatter >= dimension6.cost*dimension6.next10) {
			antimatter -= dimension6.cost*dimension6.next10;
			dimension6.amount += dimension6.next10;
			dimension6.next10 = 10;
			dimension6.cost *= 100000;
			dimension6.multiplier *= studie73Multiplier;
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
				dimension7.multiplier *= studie73Multiplier;
			}	
		}
	}
	function buyDimension7next10() {
		if(antimatter >= dimension7.cost*dimension7.next10) {
			antimatter -= dimension7.cost*dimension7.next10;
			dimension7.amount += dimension7.next10;
			dimension7.next10 = 10;
			dimension7.cost *= 100000000;
			dimension7.multiplier *= studie73Multiplier;
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
				dimension8.multiplier *= studie73Multiplier;
			}	
		}
	}
	function buyDimension8next10() {
		if(antimatter >= dimension8.cost*dimension8.next10) {
			antimatter -= dimension8.cost*dimension8.next10;
			dimension8.amount += dimension8.next10;
			dimension8.next10 = 10;
			dimension8.cost *= 1000000000;
			dimension8.multiplier *= studie73Multiplier;
		}
	}
	function buyAll(){
		while(antimatter >= dimension1.cost*dimension1.next10) {
			buyDimension1next10();
		}
		while(antimatter >= dimension2.cost*dimension2.next10) {
			buyDimension2next10();
		}
		while(antimatter >= dimension3.cost*dimension3.next10) {
			buyDimension3next10();
		}
		while(antimatter >= dimension4.cost*dimension4.next10) {
			buyDimension4next10();
		}
		while(antimatter >= dimension5.cost*dimension5.next10) {
			buyDimension5next10();
		}
		while(antimatter >= dimension6.cost*dimension6.next10) {
			buyDimension6next10();
		}
		while(antimatter >= dimension7.cost*dimension7.next10) {
			buyDimension7next10();
		}
		while(antimatter >= dimension8.cost*dimension8.next10) {
			buyDimension8next10();
		}
	}

function update() {
//Studies
	if(JSON.parse(localStorage.getItem("studie21bought")) == true) {
		var studie21Multiplier = Math.log10(antimatter+1);
	} else {
		var studie21Multiplier = 1;
	}
	if(JSON.parse(localStorage.getItem("studie22bought")) == true) {
		var studie22Multiplier = Math.log10(antimatter+1)/2;
	} else {
		var studie22Multiplier = 1;
	}
	if(JSON.parse(localStorage.getItem("studie31bought")) == true) {
		var studie31Multiplier = Math.log10(antimatter+1)/3;
	} else {
		var studie31Multiplier = 1;
	}
	if(JSON.parse(localStorage.getItem("studie32bought")) == true) {
		var studie32Multiplier = Math.log10(antimatter+1)/4;
	} else {
		var studie32Multiplier = 1;
	}
	if(JSON.parse(localStorage.getItem("studie41bought")) == true) {
		var studie41Multiplier = Math.log10(antimatter+1)/5;
	} else {
		var studie41Multiplier = 1;
	}
	if(JSON.parse(localStorage.getItem("studie42bought")) == true) {
		var studie42Multiplier = Math.log10(antimatter+1)/6;
	} else {
		var studie42Multiplier = 1;
	}
	if(JSON.parse(localStorage.getItem("studie51bought")) == true) {
		var studie51Multiplier = Math.log10(antimatter+1)/7;
	} else {
		var studie51Multiplier = 1;
	}
	if(JSON.parse(localStorage.getItem("studie52bought")) == true) {
		var studie52Multiplier = Math.log10(antimatter+1)/8;
	} else {
		var studie52Multiplier = 1;
	}
	if(JSON.parse(localStorage.getItem("studie71bought")) == true) {
		var studie71Multiplier = Math.pow(timeSpent, 0.5);
	} else {
		var studie71Multiplier = 1;
	}
	if(JSON.parse(localStorage.getItem("studie81bought")) == true) {
		studie21Multiplier *= Math.sqrt(Math.log10(dimension1.amount));
		studie22Multiplier *= Math.sqrt(Math.log10(dimension1.amount));
		studie31Multiplier *= Math.sqrt(Math.log10(dimension1.amount));
		studie32Multiplier *= Math.sqrt(Math.log10(dimension1.amount));
		studie41Multiplier *= Math.sqrt(Math.log10(dimension1.amount));
		studie42Multiplier *= Math.sqrt(Math.log10(dimension1.amount));
		studie51Multiplier *= Math.sqrt(Math.log10(dimension1.amount));
		studie52Multiplier *= Math.sqrt(Math.log10(dimension1.amount));
	}
	if(JSON.parse(localStorage.getItem("studie82bought")) == true) {
		var studie82Multiplier = 1+Math.sqrt(Math.sqrt(matter));
	} else {
		var studie82Multiplier = 1;
	}

	timeSpent += 1;
	antimatter += (dimension1.amount*dimension1.multiplier*studie21Multiplier*studie71Multiplier) / 10;
	dimension1.amount += (dimension2.amount*dimension2.multiplier*studie22Multiplier) / 10;
	dimension2.amount += (dimension3.amount*dimension3.multiplier*studie31Multiplier) / 10;
	dimension3.amount += (dimension4.amount*dimension4.multiplier*studie32Multiplier) / 10;
	dimension4.amount += (dimension5.amount*dimension5.multiplier*studie41Multiplier) / 10;
	dimension5.amount += (dimension6.amount*dimension6.multiplier*studie42Multiplier) / 10;
	dimension6.amount += (dimension7.amount*dimension7.multiplier*studie51Multiplier) / 10;
	dimension7.amount += (dimension8.amount*dimension8.multiplier*studie52Multiplier*studie82Multiplier) / 10;

	document.querySelector("#antimatterAmount").innerHTML = convert(antimatter) + " Antimatter";
	document.querySelector("#dimensionBoostText").innerHTML = "Requires " + dimensionBoost.cost + " Eighth Dimensions";
	document.querySelector("#antimatterPerSec").innerHTML = "+" + convert(dimension1.amount*dimension1.multiplier*studie12Multiplier*studie21Multiplier *studie71Multiplier) + " Antimatter per sec";
//Notation
	if(document.querySelector("#standardRadio").checked) {
		notation = "standard"
	} else if(document.querySelector("#scientificRadio").checked) {
		notation = "scientific"
	}
//Prestige
	if(JSON.parse(localStorage.getItem("studie53bought")) == true) {
		document.querySelector("#dimensionBoostButton").innerHTML = "Dimensional Boost for 2.4X on all Dimension";
	} else if (JSON.parse(localStorage.getItem("studie43bought")) == true) {
		document.querySelector("#dimensionBoostButton").innerHTML = "Dimensional Boost for 2.3X on all Dimension";
	} else if(JSON.parse(localStorage.getItem("studie33bought")) == true) {
		document.querySelector("#dimensionBoostButton").innerHTML = "Dimensional Boost for 2.2X on all Dimension";
	} else if(JSON.parse(localStorage.getItem("studie23bought")) == true) {
		document.querySelector("#dimensionBoostButton").innerHTML = "Dimensional Boost for 2.1X on all Dimension";
	} else {
		document.querySelector("#dimensionBoostButton").innerHTML = "Dimensional Boost for 2X on all Dimension";
	}
	document.querySelector("#dimensionBoostText").innerHTML = "Requires " + Math.ceil(dimensionBoost.cost) + " Eighth Dimensions";
	if(dimensionBoost.amount >= 5) {
		document.querySelector("#galaxyButton").innerHTML = "Start a new galaxy for " + Math.floor(Math.pow(1.5, dimensionBoost.amount)) + " Matter";
	} else {
		document.querySelector("#galaxyButton").innerHTML = "Start a new galaxy for 0 Matter";
	}
	if (dimension8.amount >= dimensionBoost.cost) {
		document.querySelector("#dimensionBoostButton").classList.add("buttonAvailable");
		document.querySelector("#dimensionBoostButton").classList.remove("buttonUnavailable")
	} else {
		document.querySelector("#dimensionBoostButton").classList.remove("buttonAvailable");
		document.querySelector("#dimensionBoostButton").classList.add("buttonUnavailable")
	}
	if (dimensionBoost.amount >= 5) {
		document.querySelector("#galaxyButton").classList.add("buttonAvailable");
		document.querySelector("#galaxyButton").classList.remove("buttonUnavailable");
	} else {
		document.querySelector("#galaxyButton").classList.remove("buttonAvailable");
		document.querySelector("#galaxyButton").classList.add("buttonUnavailable");
	}
//First Dimension
	document.querySelector("#dim1Multiplier").innerHTML = convert(dimension1.multiplier*studie21Multiplier*studie71Multiplier) + "X";
	document.querySelector("#dim1Amount").innerHTML = convert(dimension1.amount);
	document.querySelector("#dim1Growth").innerHTML = "+" + convert(dimension2.amount*dimension2.multiplier*studie12Multiplier*studie22Multiplier) + "/s";
	document.querySelector("#dim1Button").innerHTML = "Buy First Dimension: " + convert(dimension1.cost) + " Antimatter";
	document.querySelector("#dim1Button10").innerHTML = "Buy til next 10: " + convert(dimension1.cost*dimension1.next10) + " Antimatter";

	if(antimatter >= dimension1.cost) {
		document.querySelector("#dim1Button").classList.remove("buttonUnavailable");
		document.querySelector("#dim1Button").classList.add("buttonAvailable");
	} else {
		document.querySelector("#dim1Button").classList.add("buttonUnavailable");
		document.querySelector("#dim1Button").classList.remove("buttonAvailable");
	}

	if(antimatter >= dimension1.cost*dimension1.next10) {
		document.querySelector("#dim1Button10").classList.add("buttonAvailable");
		document.querySelector("#dim1Button10").classList.remove("buttonUnavailable");
	} else {
		document.querySelector("#dim1Button10").classList.add("buttonUnavailable");
		document.querySelector("#dim1Button10").classList.remove("buttonAvailable");
	}
//Second Dimension
	document.querySelector("#dim2Multiplier").innerHTML = convert(dimension2.multiplier*studie22Multiplier) + "X";
	document.querySelector("#dim2Amount").innerHTML = convert(dimension2.amount);
	document.querySelector("#dim2Growth").innerHTML = "+" + convert(dimension3.amount*dimension3.multiplier*studie12Multiplier*studie31Multiplier) + "/s"
	document.querySelector("#dim2Button").innerHTML = "Buy Second Dimension: " + convert(dimension2.cost) + " Antimatter";
	document.querySelector("#dim2Button10").innerHTML = "Buy til next 10: " + convert(dimension2.cost*dimension2.next10) + " Antimatter";

	if(antimatter >= dimension2.cost) {
		document.querySelector("#dim2Button").classList.remove("buttonUnavailable");
		document.querySelector("#dim2Button").classList.add("buttonAvailable");
	} else {
		document.querySelector("#dim2Button").classList.add("buttonUnavailable");
		document.querySelector("#dim2Button").classList.remove("buttonAvailable");
	}

	if(antimatter >= dimension2.cost*dimension2.next10) {
		document.querySelector("#dim2Button10").classList.add("buttonAvailable");
		document.querySelector("#dim2Button10").classList.remove("buttonUnavailable");
	} else {
		document.querySelector("#dim2Button10").classList.add("buttonUnavailable");
		document.querySelector("#dim2Button10").classList.remove("buttonAvailable");
	}
//Third Dimension
	document.querySelector("#dim3Multiplier").innerHTML = convert(dimension3.multiplier*studie31Multiplier) + "X";
	document.querySelector("#dim3Amount").innerHTML = convert(dimension3.amount);
	document.querySelector("#dim3Growth").innerHTML = "+" + convert(dimension4.amount*dimension4.multiplier*studie12Multiplier*studie32Multiplier) + "/s";
	document.querySelector("#dim3Button").innerHTML = "Buy Third Dimension: " + convert(dimension3.cost) + " Antimatter";
	document.querySelector("#dim3Button10").innerHTML = "Buy til next 10: " + convert(dimension3.cost*dimension3.next10) + " Antimatter";

	if(antimatter >= dimension3.cost) {
		document.querySelector("#dim3Button").classList.remove("buttonUnavailable");
		document.querySelector("#dim3Button").classList.add("buttonAvailable");
	} else {
		document.querySelector("#dim3Button").classList.add("buttonUnavailable");
		document.querySelector("#dim3Button").classList.remove("buttonAvailable");
	}

	if(antimatter >= dimension3.cost*dimension3.next10) {
		document.querySelector("#dim3Button10").classList.add("buttonAvailable");
		document.querySelector("#dim3Button10").classList.remove("buttonUnavailable");
	} else {
		document.querySelector("#dim3Button10").classList.add("buttonUnavailable");
		document.querySelector("#dim3Button10").classList.remove("buttonAvailable");
	}
//Fourth Dimension
	document.querySelector("#dim4Multiplier").innerHTML = convert(dimension4.multiplier*studie32Multiplier) + "X";
	document.querySelector("#dim4Amount").innerHTML = convert(dimension4.amount);
	document.querySelector("#dim4Growth").innerHTML = "+" + convert(dimension5.amount*dimension5.multiplier*studie12Multiplier*studie41Multiplier) + "/s";
	document.querySelector("#dim4Button").innerHTML = "Buy Fourth Dimension: " + convert(dimension4.cost) + " Antimatter";
	document.querySelector("#dim4Button10").innerHTML = "Buy til next 10: " + convert(dimension4.cost*dimension4.next10) + " Antimatter";

	if(antimatter >= dimension4.cost) {
		document.querySelector("#dim4Button").classList.remove("buttonUnavailable");
		document.querySelector("#dim4Button").classList.add("buttonAvailable");
	} else {
		document.querySelector("#dim4Button").classList.add("buttonUnavailable");
		document.querySelector("#dim4Button").classList.remove("buttonAvailable");
	}

	if(antimatter >= dimension4.cost*dimension4.next10) {
		document.querySelector("#dim4Button10").classList.add("buttonAvailable");
		document.querySelector("#dim4Button10").classList.remove("buttonUnavailable");
	} else {
		document.querySelector("#dim4Button10").classList.add("buttonUnavailable");
		document.querySelector("#dim4Button10").classList.remove("buttonAvailable");
	}
//Fifth Dimension
  	document.querySelector("#dim5Multiplier").innerHTML = convert(dimension5.multiplier*studie41Multiplier) + "X";
	document.querySelector("#dim5Amount").innerHTML = convert(dimension5.amount);
	document.querySelector("#dim5Growth").innerHTML = "+" + convert(dimension6.amount*dimension6.multiplier*studie12Multiplier*studie42Multiplier) + "/s";
	document.querySelector("#dim5Button").innerHTML = "Buy Fifth Dimension: " + convert(dimension5.cost) + " Antimatter";
	document.querySelector("#dim5Button10").innerHTML = "Buy til next 10: " + convert(dimension5.cost*dimension5.next10) + " Antimatter";

	if(antimatter >= dimension5.cost) {
		document.querySelector("#dim5Button").classList.remove("buttonUnavailable");
		document.querySelector("#dim5Button").classList.add("buttonAvailable");
	} else {
		document.querySelector("#dim5Button").classList.add("buttonUnavailable");
		document.querySelector("#dim5Button").classList.remove("buttonAvailable");
	}

	if(antimatter >= dimension5.cost*dimension5.next10) {
		document.querySelector("#dim5Button10").classList.add("buttonAvailable");
		document.querySelector("#dim5Button10").classList.remove("buttonUnavailable");
	} else {
		document.querySelector("#dim5Button10").classList.add("buttonUnavailable");
		document.querySelector("#dim5Button10").classList.remove("buttonAvailable");
	}
//Sixth Dimension
  	document.querySelector("#dim6Multiplier").innerHTML = convert(dimension6.multiplier*studie42Multiplier) + "X";
	document.querySelector("#dim6Amount").innerHTML = convert(dimension6.amount);
	document.querySelector("#dim6Growth").innerHTML = "+" + convert(dimension7.amount*dimension7.multiplier*studie12Multiplier*studie51Multiplier) + "/s";
	document.querySelector("#dim6Button").innerHTML = "Buy Sixth Dimension: " + convert(dimension6.cost) + " Antimatter";
	document.querySelector("#dim6Button10").innerHTML = "Buy til next 10: " + convert(dimension6.cost*dimension6.next10) + " Antimatter";

	if(antimatter >= dimension6.cost) {
		document.querySelector("#dim6Button").classList.remove("buttonUnavailable");
		document.querySelector("#dim6Button").classList.add("buttonAvailable");
	} else {
		document.querySelector("#dim6Button").classList.add("buttonUnavailable");
		document.querySelector("#dim6Button").classList.remove("buttonAvailable");
	}

	if(antimatter >= dimension6.cost*dimension6.next10) {
		document.querySelector("#dim6Button10").classList.add("buttonAvailable");
		document.querySelector("#dim6Button10").classList.remove("buttonUnavailable");
	} else {
		document.querySelector("#dim6Button10").classList.add("buttonUnavailable");
		document.querySelector("#dim6Button10").classList.remove("buttonAvailable");
	}
//Seventh Dimension
	document.querySelector("#dim7Multiplier").innerHTML = convert(dimension7.multiplier*studie51Multiplier) + "X";
	document.querySelector("#dim7Amount").innerHTML = convert(dimension7.amount);
	document.querySelector("#dim7Growth").innerHTML = "+" + convert(dimension8.amount*dimension8.multiplier*studie12Multiplier*studie52Multiplier*studie82Multiplier) + "/s";
	document.querySelector("#dim7Button").innerHTML = "Buy Seventh Dimension: " + convert(dimension7.cost) + " Antimatter";
	document.querySelector("#dim7Button10").innerHTML = "Buy til next 10: " + convert(dimension7.cost*dimension7.next10) + " Antimatter";

	if(antimatter >= dimension7.cost) {
		document.querySelector("#dim7Button").classList.remove("buttonUnavailable");
		document.querySelector("#dim7Button").classList.add("buttonAvailable");
	} else {
		document.querySelector("#dim7Button").classList.add("buttonUnavailable");
		document.querySelector("#dim7Button").classList.remove("buttonAvailable");
	}

	if(antimatter >= dimension7.cost*dimension7.next10) {
		document.querySelector("#dim7Button10").classList.add("buttonAvailable");
		document.querySelector("#dim7Button10").classList.remove("buttonUnavailable");
	} else {
		document.querySelector("#dim7Button10").classList.add("buttonUnavailable");
		document.querySelector("#dim7Button10").classList.remove("buttonAvailable");
	}
//Eighth Dimension
    document.querySelector("#dim8Multiplier").innerHTML = convert(dimension8.multiplier*studie52Multiplier*studie82Multiplier) + "X";
	document.querySelector("#dim8Amount").innerHTML = convert(dimension8.amount);
	document.querySelector("#dim8Growth").innerHTML = "+0/s";
	document.querySelector("#dim8Button").innerHTML = "Buy Eighth Dimension: " + convert(dimension8.cost) + " Antimatter";
	document.querySelector("#dim8Button10").innerHTML = "Buy til next 10: " + convert(dimension8.cost*dimension8.next10) + " Antimatter";

	if(antimatter >= dimension8.cost) {
		document.querySelector("#dim8Button").classList.remove("buttonUnavailable");
		document.querySelector("#dim8Button").classList.add("buttonAvailable");
	} else {
		document.querySelector("#dim8Button").classList.add("buttonUnavailable");
		document.querySelector("#dim8Button").classList.remove("buttonAvailable");
	}

	if(antimatter >= dimension8.cost*dimension8.next10) {
		document.querySelector("#dim8Button10").classList.add("buttonAvailable");
		document.querySelector("#dim8Button10").classList.remove("buttonUnavailable");
	} else {
		document.querySelector("#dim8Button10").classList.add("buttonUnavailable");
		document.querySelector("#dim8Button10").classList.remove("buttonAvailable");
	}
//Save System
	save();
}

function convert(number) {
	if (notation == "standard" && number < 1e95) {
		if (Math.round(number) >= 1e93) {
			number = Math.round(number/1e91)/100 + " Trig";
		} else if (Math.round(number) >= 1e90) {
			number = Math.round(number/1e88)/100 + " NoVi"; 
		} else if (Math.round(number) >= 1e87) {
			number = Math.round(number/1e85)/100 + " OcVi";
		} else if (Math.round(number) >= 1e84) {
			number = Math.round(number/1e82)/100 + " SpVi"; 
		} else if (Math.round(number) >= 1e81) {
			number = Math.round(number/1e79)/100 + " SxVi";
		} else if (Math.round(number) >= 1e78) {
			number = Math.round(number/1e76)/100 + " QuVi";
		} else if (Math.round(number) >= 1e75) {
			number = Math.round(number/1e73)/100 + " QaVi";
		} else if (Math.round(number) >= 1e72) {
			number = Math.round(number/1e70)/100 + " TrVi";
		} else if (Math.round(number) >= 1e69) {
			number = Math.round(number/1e67)/100 + " DuVi";
		} else if (Math.round(number) >= 1e66) {
			number = Math.round(number/1e64)/100 + " UnVi";
		} else if (Math.round(number) >= 1e63) {
			number = Math.round(number/1e61)/100 + " Vi";
		} else if (Math.round(number) >= 1e60) {
			number = Math.round(number/1e58)/100 + " NoDe";
		} else if (Math.round(number) >= 1e57) {
			number = Math.round(number/1e55)/100 + " OcDe";
		} else if (Math.round(number) >= 1e54) {
			number = Math.round(number/1e52)/100 + " SpDe";
		} else if (Math.round(number) >= 1e51) {
			number = Math.round(number/1e49)/100 + " SxDe";
		} else if (Math.round(number) >= 1e48) {
			number = Math.round(number/1e46)/100 + " QuDe";
		} else if (Math.round(number) >= 1e45) {
			number = Math.round(number/1e43)/100 + " QaDe";
		} else if (Math.round(number) >= 1e42) {
			number = Math.round(number/1e40)/100 + " TrDe";
		} else if (Math.round(number) >= 1e39) {
			number = Math.round(number/1e37)/100 + " DuDe";
		} else if (Math.round(number) >= 1e36) {
			number = Math.round(number/1e34)/100 + " UnDe";
		} else if (Math.round(number) >= 1e33) {
			number = Math.round(number/1e31)/100 + " De";
		} else if (Math.round(number) >= 1e30) {
			number = Math.round(number/1e28)/100 + " No";
		} else if (Math.round(number) >= 1e27) {
			number = Math.round(number/1e25)/100 + " Oc";
		} else if (Math.round(number) >= 1e24) {
			number = Math.round(number/1e22)/100 + " Sp"
		} else if (Math.round(number) >= 1e21) {
			number = Math.round(number/1e19)/100 + " Sx";
		} else if (Math.round(number) >= 1e18) {
			number = Math.round(number/1e16)/100 + " Qu";
		} else if (Math.round(number) >= 1e15) {
			number = Math.round(number/1e13)/100 + " Qa";
		} else if (Math.round(number) >= 1e12) {
			number = Math.round(number/1e10)/100 + " T";
		} else if (Math.round(number) >= 1e9) {
			number = Math.round(number/1e7)/100 + " B";
		} else if (Math.round(number) >= 1e6) {
			number = Math.round(number/1e4)/100 + " M"
		} else if (Math.round(number) >= 1e3) {
			number = Math.round(number/1e1)/100 +" K";
		} else if(Math.round(number) < 1e3) {
			number = Math.round(number*10)/10;
		}
	} else if (notation = "scientific" || number > 1e95) {
		if (number >= 1000) {	
			number = number.toExponential(2);
		} else if(number < 1000) {
			number = Math.round(number*10)/10;
		}
	}
	return number;
}

function save() {
	localStorage.setItem("antimatter", antimatter);
	localStorage.setItem("notation", notation);
	localStorage.setItem("dimensionBoostCost", dimensionBoost.cost);
	localStorage.setItem("dimensionBoostMultiplier", dimensionBoost.multiplier);
	localStorage.setItem("dimensionBoostAmount", dimensionBoost.amount);
	localStorage.setItem("matter", matter);
	localStorage.setItem("timespent", timeSpent);

	localStorage.setItem("dimension1cost", dimension1.cost);
	localStorage.setItem("dimension1amount", dimension1.amount);
	localStorage.setItem("dimension1multiplier", dimension1.multiplier);
	localStorage.setItem("dimension1next10", dimension1.next10);

	localStorage.setItem("dimension2cost", dimension2.cost);
	localStorage.setItem("dimension2amount", dimension2.amount);
	localStorage.setItem("dimension2multiplier", dimension2.multiplier);
	localStorage.setItem("dimension2next10", dimension2.next10);

	localStorage.setItem("dimension3cost", dimension3.cost);
	localStorage.setItem("dimension3amount", dimension3.amount);
	localStorage.setItem("dimension3multiplier", dimension3.multiplier);
	localStorage.setItem("dimension3next10", dimension3.next10);

	localStorage.setItem("dimension4cost", dimension4.cost);
	localStorage.setItem("dimension4amount", dimension4.amount);
	localStorage.setItem("dimension4multiplier", dimension4.multiplier);
	localStorage.setItem("dimension4next10", dimension4.next10);

	localStorage.setItem("dimension5cost", dimension5.cost);
	localStorage.setItem("dimension5amount", dimension5.amount);
	localStorage.setItem("dimension5multiplier", dimension5.multiplier);
	localStorage.setItem("dimension5next10", dimension5.next10);

	localStorage.setItem("dimension6cost", dimension6.cost);
	localStorage.setItem("dimension6amount", dimension6.amount);
	localStorage.setItem("dimension6multiplier", dimension6.multiplier);
	localStorage.setItem("dimension6next10", dimension6.next10);

	localStorage.setItem("dimension7cost", dimension7.cost);
	localStorage.setItem("dimension7amount", dimension7.amount);
	localStorage.setItem("dimension7multiplier", dimension7.multiplier);
	localStorage.setItem("dimension7next10", dimension7.next10);

	localStorage.setItem("dimension8cost", dimension8.cost);
	localStorage.setItem("dimension8amount", dimension8.amount);
	localStorage.setItem("dimension8multiplier", dimension8.multiplier);
	localStorage.setItem("dimension8next10", dimension8.next10);
}

function reset() {
	localStorage.clear();
	window.location.href = "index.htm";
}

function dimensionBoostF() {
	if(dimension8.amount >= dimensionBoost.cost) {
		dimensionBoost.amount += 1;
		if(dimensionBoost.amount < 10) {
			dimensionBoost.cost = (dimensionBoost.amount*10)+10;
		} else if(dimensionBoost.amount >= 10) {
			if(JSON.parse(localStorage.getItem("studie72bought")) == true) {
				dimensionBoost.cost *= 1.08;
			} else {
				dimensionBoost.cost *= 1.1;
			}
		}
		if (JSON.parse(localStorage.getItem("studie53bought")) == true) {
			dimensionBoost.multiplier = Math.pow(2.4, dimensionBoost.amount);
		} else if (JSON.parse(localStorage.getItem("studie43bought")) == true) {
			dimensionBoost.multiplier = Math.pow(2.3, dimensionBoost.amount);
		} else if (JSON.parse(localStorage.getItem("studie33bought")) == true) {
			dimensionBoost.multiplier = Math.pow(2.2, dimensionBoost.amount);
		} else if (JSON.parse(localStorage.getItem("studie23bought")) == true) {
			dimensionBoost.multiplier = Math.pow(2.1, dimensionBoost.amount);
		} else {
			dimensionBoost.multiplier = Math.pow(2, dimensionBoost.amount);
		}
		antimatter = 101;
		dimension1 = {
			cost:10,
			amount:0,
			multiplier:1*dimensionBoost.multiplier,
			next10:10,
		};
		dimension2 = {
			cost:1000,
			amount:0,
			multiplier:1*dimensionBoost.multiplier,
			next10:10,
		};
		dimension3 = {
			cost:100000,
			amount:0,
			multiplier:1*dimensionBoost.multiplier,
			next10:10,
		};
		dimension4 = {
			cost:10000000,
			amount:0,
			multiplier:1*dimensionBoost.multiplier,
			next10:10,
		};
		dimension5 = {
			cost:1000000000,
			amount:0,
			multiplier:1*dimensionBoost.multiplier,
			   next10:10
		};
		dimension6 = {
			cost:100000000000,
			amount:0,
			multiplier:1*dimensionBoost.multiplier,
			next10:10
		};
		dimension7 = {
			cost:10000000000000,
			amount:0,
			multiplier:1*dimensionBoost.multiplier,
			next10:10,
		};
		dimension8 = {
			cost:1000000000000000,
			amount:0,
			multiplier:1*dimensionBoost.multiplier,
			next10:10,
		};
		timeSpent = 0;
	}
}

function newGalaxy() {
	if(dimensionBoost.amount >= 5) {
		matter += Math.pow(1.5, dimensionBoost.amount);
		antimatter = 10;
		dimensionBoost = {
			cost:10,
			multiplier:1,
			amount:0,
		}
		dimension1 = {
			cost:10,
			amount:0,
			multiplier:1*dimensionBoost.multiplier,
			next10:10,
		};
		dimension2 = {
			cost:1000,
			amount:0,
			multiplier:1*dimensionBoost.multiplier,
			next10:10,
		};
		dimension3 = {
			cost:100000,
			amount:0,
			multiplier:1*dimensionBoost.multiplier,
			next10:10,
		};
		dimension4 = {
			cost:10000000,
			amount:0,
			multiplier:1*dimensionBoost.multiplier,
			next10:10,
		};
		dimension5 = {
			cost:1000000000,
			amount:0,
			multiplier:1*dimensionBoost.multiplier,
			   next10:10
		};
		dimension6 = {
			cost:100000000000,
			amount:0,
			multiplier:1*dimensionBoost.multiplier,
			next10:10
		};
		dimension7 = {
			cost:10000000000000,
			amount:0,
			multiplier:1*dimensionBoost.multiplier,
			next10:10,
		};
		dimension8 = {
			cost:1000000000000000,
			amount:0,
			multiplier:1*dimensionBoost.multiplier,
			next10:10,
		};
	}
}

window.onkeypress = function(event) {
	console.log(event.keyCode);
	if(event.keyCode == 109 || event.keyCode == 77) {
		while(antimatter >= dimension1.cost*dimension1.next10) {
			buyDimension1next10();
		}
		while(antimatter >= dimension2.cost*dimension2.next10) {
			buyDimension2next10();
		}
		while(antimatter >= dimension3.cost*dimension3.next10) {
			buyDimension3next10();
		}
		while(antimatter >= dimension4.cost*dimension4.next10) {
			buyDimension4next10();
		}
		while(antimatter >= dimension5.cost*dimension5.next10) {
			buyDimension5next10();
		}
		while(antimatter >= dimension6.cost*dimension6.next10) {
			buyDimension6next10();
		}
		while(antimatter >= dimension7.cost*dimension7.next10) {
			buyDimension7next10();
		}
		while(antimatter >= dimension8.cost*dimension8.next10) {
			buyDimension8next10();
		}
	}
}

if(JSON.parse(localStorage.getItem("studie83bought")) == true) {
 	window.setInterval(update, 25);
 	var studie12Multiplier = 4;
} else if(JSON.parse(localStorage.getItem("studie12bought")) == true){
	window.setInterval(update, 50);
	var studie12Multiplier = 2;
} else {
	window.setInterval(update, 100);
	var studie12Multiplier = 1;
}

if(JSON.parse(localStorage.getItem("autobuyer1bought")) == true && JSON.parse(localStorage.getItem("autobuyer1on")) == true) {
	window.setInterval(buyDimension1next10, Number(localStorage.getItem("autobuyer1interval")));
}
if(JSON.parse(localStorage.getItem("autobuyer2bought")) == true && JSON.parse(localStorage.getItem("autobuyer2on")) == true) {
	window.setInterval(buyDimension2next10, Number(localStorage.getItem("autobuyer2interval")));
}
if(JSON.parse(localStorage.getItem("autobuyer3bought")) == true && JSON.parse(localStorage.getItem("autobuyer3on")) == true) {
	window.setInterval(buyDimension3next10, Number(localStorage.getItem("autobuyer3interval")));
}
if(JSON.parse(localStorage.getItem("autobuyer4bought")) == true && JSON.parse(localStorage.getItem("autobuyer4on")) == true) {
	window.setInterval(buyDimension4next10, Number(localStorage.getItem("autobuyer4interval")));
}
if(JSON.parse(localStorage.getItem("autobuyer5bought")) == true && JSON.parse(localStorage.getItem("autobuyer5on")) == true) {
	window.setInterval(buyDimension5next10, Number(localStorage.getItem("autobuyer5interval")));
}
if(JSON.parse(localStorage.getItem("autobuyer6bought")) == true && JSON.parse(localStorage.getItem("autobuyer6on")) == true) {
	window.setInterval(buyDimension6next10, Number(localStorage.getItem("autobuyer6interval")));
}
if(JSON.parse(localStorage.getItem("autobuyer7bought")) == true && JSON.parse(localStorage.getItem("autobuyer7on")) == true) {
	window.setInterval(buyDimension7next10, Number(localStorage.getItem("autobuyer7interval")));
}
if(JSON.parse(localStorage.getItem("autobuyer8bought")) == true && JSON.parse(localStorage.getItem("autobuyer8on")) == true) {
	window.setInterval(buyDimension8next10, Number(localStorage.getItem("autobuyer8interval")));
}
if(JSON.parse(localStorage.getItem("autobuyer9bought")) == true && JSON.parse(localStorage.getItem("autobuyer9on")) == true) {
	window.setInterval(dimensionBoostF, Number(localStorage.getItem("autobuyer9interval")));
}
