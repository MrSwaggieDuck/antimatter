//Load Stats
if(localStorage.hasOwnProperty("antimatter")) {
	var antimatter = Number(localStorage.getItem("antimatter"));
	var skillpoints = Number(localStorage.getItem("skillpoints"));
	if (localStorage.getItem("notation") == "scientific") {
		document.querySelector("#scientificRadio").checked = true;
	} else if (localStorage.getItem("notation") == "standard") {
		document.querySelector("#standardRadio").checked = true;
	}
	var prestige = {
		cost:Number(localStorage.getItem("prestigeCost")),
		multiplier:Number(localStorage.getItem("prestigeMultiplier"))
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
	var skillpoints = 0;
	var notation = "standard";
	var prestige = {
		cost:10,
		multiplier:1
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

var skill21Multiplier = 1;
var skill22Multiplier = 1;

//Buy Functions
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
	antimatter += (dimension1.amount*dimension1.multiplier*skill21Multiplier) / 10;
	dimension1.amount += (dimension2.amount*dimension2.multiplier*skill22Multiplier) / 10;
	dimension2.amount += (dimension3.amount*dimension2.multiplier) / 10;
	dimension3.amount += (dimension4.amount*dimension4.multiplier) / 10;
	dimension4.amount += (dimension5.amount*dimension5.multiplier) / 10;
	dimension5.amount += (dimension6.amount*dimension6.multiplier) / 10;
	dimension6.amount += (dimension7.amount*dimension7.multiplier) / 10;
	dimension7.amount += (dimension8.amount*dimension8.multiplier) / 10;

	document.querySelector("#antimatterAmount").innerHTML = convert(antimatter) + " Antimatter";
	document.querySelector("#prestigeCostText").innerHTML = "Requires " + prestige.cost + " Eighth Dimensions";
	document.querySelector("#antimatterPerSec").innerHTML = "+" + convert(dimension1.amount*dimension1.multiplier*skill12Multiplier*skill21Multiplier) + " Antimatter per sec";
//Skills
	if(JSON.parse(localStorage.getItem("skill21bought")) == true) {
		skill21Multiplier = Math.log10(antimatter);
	} else {
		skill12Multiplier = 1;
	}
	if(JSON.parse(localStorage.getItem("skill22bought")) == true) {
		skill22Multiplier = Math.log10(antimatter);
	} else {
		skill22Multiplier = 1;
	}
//Notation
	if(document.querySelector("#standardRadio").checked) {
		notation = "standard"
	} else if(document.querySelector("#scientificRadio").checked) {
		notation = "scientific"
	}
//Prestige
	if(dimension8.amount >= prestige.cost) {
		document.querySelector("#prestigeButton").classList.add("buttonAvailable");
		document.querySelector("#prestigeButton").classList.remove("buttonUnavailable")
	} else {
		document.querySelector("#prestigeButton").classList.remove("buttonAvailable");
		document.querySelector("#prestigeButton").classList.add("buttonUnavailable")
	}
//First Dimension
	document.querySelector("#dim1Multiplier").innerHTML = convert(dimension1.multiplier*skill21Multiplier) + "X";
	document.querySelector("#dim1Amount").innerHTML = convert(dimension1.amount);
	document.querySelector("#dim1Growth").innerHTML = "+" + convert(dimension2.amount*dimension2.multiplier*skill12Multiplier*skill22Multiplier) + "/s";
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
	document.querySelector("#dim2Multiplier").innerHTML = convert(dimension2.multiplier*skill22Multiplier) + "X";
	document.querySelector("#dim2Amount").innerHTML = convert(dimension2.amount);
	document.querySelector("#dim2Growth").innerHTML = "+" + convert(dimension3.amount*dimension3.multiplier*skill12Multiplier) + "/s"
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
	document.querySelector("#dim3Multiplier").innerHTML = convert(dimension3.multiplier) + "X";
	document.querySelector("#dim3Amount").innerHTML = convert(dimension3.amount);
	document.querySelector("#dim3Growth").innerHTML = "+" + convert(dimension4.amount*dimension4.multiplier*skill12Multiplier) + "/s";
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
	document.querySelector("#dim4Multiplier").innerHTML = convert(dimension4.multiplier) + "X";
	document.querySelector("#dim4Amount").innerHTML = convert(dimension4.amount);
	document.querySelector("#dim4Growth").innerHTML = "+" + convert(dimension5.amount*dimension5.multiplier*skill12Multiplier) + "/s";
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
  	document.querySelector("#dim5Multiplier").innerHTML = convert(dimension5.multiplier) + "X";
	document.querySelector("#dim5Amount").innerHTML = convert(dimension5.amount);
	document.querySelector("#dim5Growth").innerHTML = "+" + convert(dimension6.amount*dimension6.multiplier*skill12Multiplier) + "/s";
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
  	document.querySelector("#dim6Multiplier").innerHTML = convert(dimension6.multiplier) + "X";
	document.querySelector("#dim6Amount").innerHTML = convert(dimension6.amount);
	document.querySelector("#dim6Growth").innerHTML = "+" + convert(dimension7.amount*dimension7.multiplier*skill12Multiplier) + "/s";
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
	document.querySelector("#dim7Multiplier").innerHTML = convert(dimension7.multiplier) + "X";
	document.querySelector("#dim7Amount").innerHTML = convert(dimension7.amount);
	document.querySelector("#dim7Growth").innerHTML = "+" + convert(dimension8.amount*dimension8.multiplier*skill12Multiplier) + "/s";
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
    document.querySelector("#dim8Multiplier").innerHTML = convert(dimension8.multiplier) + "X";
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
		if (number >= 1e93) {
			number = Math.round(number/1e91)/100 + " Trig";
		} else if (number >= 1e90) {
			number = Math.round(number/1e88)/100 + " NoVi"; 
		} else if (number >= 1e87) {
			number = Math.round(number/1e85)/100 + " OcVi";
		} else if (number >= 1e84) {
			number = Math.round(number/1e82)/100 + " SpVi"; 
		} else if (number >= 1e81) {
			number = Math.round(number/1e79)/100 + " SxVi";
		} else if (number >= 1e78) {
			number = Math.round(number/1e76)/100 + " QuVi";
		} else if (number >= 1e75) {
			number = Math.round(number/1e73)/100 + " QaVi";
		} else if (number >= 1e72) {
			number = Math.round(number/1e70)/100 + " TrVi";
		} else if (number >= 1e69) {
			number = Math.round(number/1e67)/100 + " DuVi";
		} else if (number >= 1e66) {
			number = Math.round(number/1e64)/100 + " UnVi";
		} else if (number >= 1e63) {
			number = Math.round(number/1e61)/100 + " Vi";
		} else if (number >= 1e60) {
			number = Math.round(number/1e58)/100 + " NoDe";
		} else if (number >= 1e57) {
			number = Math.round(number/1e55)/100 + " OcDe";
		} else if (number >= 1e54) {
			number = Math.round(number/1e52)/100 + " SpDe";
		} else if (number >= 1e51) {
			number = Math.round(number/1e49)/100 + " SxDe";
		} else if (number >= 1e48) {
			number = Math.round(number/1e46)/100 + " QuDe";
		} else if (number >= 1e45) {
			number = Math.round(number/1e43)/100 + " QaDe";
		} else if (number >= 1e42) {
			number = Math.round(number/1e40)/100 + " TrDe";
		} else if (number >= 1e39) {
			number = Math.round(number/1e37)/100 + " DuDe";
		} else if (number >= 1e36) {
			number = Math.round(number/1e34)/100 + " UnDe";
		} else if (number >= 1e33) {
			number = Math.round(number/1e31)/100 + " De";
		} else if (number >= 1e30) {
			number = Math.round(number/1e28)/100 + " No";
		} else if (number >= 1e27) {
			number = Math.round(number/1e25)/100 + " Oc";
		} else if (number >= 1e24) {
			number = Math.round(number/1e22)/100 + " Sp"
		} else if (number >= 1e21) {
			number = Math.round(number/1e19)/100 + " Sx";
		} else if (number >= 1e18) {
			number = Math.round(number/1e16)/100 + " Qu";
		} else if (number >= 1e15) {
			number = Math.round(number/1e13)/100 + " Qa";
		} else if (number >= 1e12) {
			number = Math.round(number/1e10)/100 + " T";
		} else if (number >= 1e9) {
			number = Math.round(number/1e7)/100 + " B";
		} else if (number >= 1e6) {
			number = Math.round(number/1e4)/100 + " M";
		} else if(number >= 1e3) {
			number = Math.round(number/1e1)/100 +" K";
		} else if(number < 1e3) {
			number = Math.round(number);
		}
	} else if (notation = "scientific" || number > 1e95) {
		if (number >= 1000) {	
			number = number.toExponential(2);
		} else if(number < 1000) {
			number = Math.round(number);
		}
	}
	return number;
}

function save() {
	localStorage.setItem("antimatter", antimatter);
	localStorage.setItem("notation", notation);
	localStorage.setItem("prestigeCost", prestige.cost);
	localStorage.setItem("prestigeMultiplier", prestige.multiplier);
	localStorage.setItem("skillpoints", skillpoints);

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

	localStorage.setItem("skill12bought", false);
	localStorage.setItem("skill21bought", false);
	localStorage.setItem("skill22bought", false);
}

function prestigeF() {
	if(dimension8.amount >= prestige.cost) {
		prestige.cost += 10;
		prestige.multiplier *= 2;
		antimatter = 10;
		dimension1 = {
			cost:10,
			amount:0,
			multiplier:1*prestige.multiplier,
			next10:10,
		};
		dimension2 = {
			cost:1000,
			amount:0,
			multiplier:1*prestige.multiplier,
			next10:10,
		};
		dimension3 = {
			cost:100000,
			amount:0,
			multiplier:1*prestige.multiplier,
			next10:10,
		};
		dimension4 = {
			cost:10000000,
			amount:0,
			multiplier:1*prestige.multiplier,
			next10:10,
		};
		dimension5 = {
			cost:1000000000,
			amount:0,
			multiplier:1*prestige.multiplier,
			   next10:10
		};
		dimension6 = {
			cost:100000000000,
			amount:0,
			multiplier:1*prestige.multiplier,
			next10:10
		};
		dimension7 = {
			cost:10000000000000,
			amount:0,
			multiplier:1*prestige.multiplier,
			next10:10,
		};
		dimension8 = {
			cost:1000000000000000,
			amount:0,
			multiplier:1*prestige.multiplier,
			next10:10,
		};
	}
}

if(JSON.parse(localStorage.getItem("skill12bought")) == true) {
 	window.setInterval(update, 50);
 	var skill12Multiplier = 2;
} else {
	window.setInterval(update, 100);
	var skill12Multiplier = 1;
}
