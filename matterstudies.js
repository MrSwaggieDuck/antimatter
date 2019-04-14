var matter = 0;
var studie12 = {
	cost:7,
	bought:false,
};
var studie21 = {
	cost:11,
	bought:false,
}
var studie22 = {
	cost:14,
	bought:false,
}
var studie23 = {
	cost:5,
	bought:false,
}
var studie31 = {
	cost:17,
	bought:false,
}
var studie32 = {
	cost:21,
	bought:false,
}
var studie33 = {
	cost:10,
	bought:false,
}
var studie41 = {
	cost:26,
	bought:false,
}
var studie42 = {
	cost:32,
	bought:false,
}
var studie43 = {
	cost:20,
	bought:false,
}
var studie51 = {
	cost:38,
	bought:false,
}
var studie52 = {
	cost:45,
	bought:false,
}
var studie53 = {
	cost:40,
	bought:false,
}
var studie62 = {
	cost:100,
	bought:false,
}
var studie71 = {
	cost:500,
	bought:false,
}
var studie72 = {
	cost:700,
	bought:false,
}
var studie73 = {
	cost:600,
	bought:false,
}
var studie81 = {
	cost:900,
	bought:false,
}
var studie82 = {
	cost:1000,
	bought:false,
}
var studie83 = {
	cost:800,
	bought:false,
}
var matter = 0;
var antimatter = Number(localStorage.getItem("antimatter"));
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


if (JSON.parse(localStorage.getItem("studie12bought")) == true || JSON.parse(localStorage.getItem("studie12bought")) == false) {
	matter = JSON.parse(localStorage.getItem("matter"));
	studie12.bought = JSON.parse(localStorage.getItem("studie12bought"));
	studie21.bought = JSON.parse(localStorage.getItem("studie21bought"));
	studie22.bought = JSON.parse(localStorage.getItem("studie22bought"));
	studie23.bought = JSON.parse(localStorage.getItem("studie23bought"));
	studie31.bought = JSON.parse(localStorage.getItem("studie31bought"));
	studie32.bought = JSON.parse(localStorage.getItem("studie32bought"));
	studie33.bought = JSON.parse(localStorage.getItem("studie33bought"));
	studie41.bought = JSON.parse(localStorage.getItem("studie41bought"));
	studie42.bought = JSON.parse(localStorage.getItem("studie42bought"));
	studie43.bought = JSON.parse(localStorage.getItem("studie43bought"));
	studie51.bought = JSON.parse(localStorage.getItem("studie51bought"));
	studie52.bought = JSON.parse(localStorage.getItem("studie52bought"));
	studie53.bought = JSON.parse(localStorage.getItem("studie53bought"));
	studie62.bought = JSON.parse(localStorage.getItem("studie62bought"));
	studie71.bought = JSON.parse(localStorage.getItem("studie71bought"));
	studie72.bought = JSON.parse(localStorage.getItem("studie72bought"));
	studie73.bought = JSON.parse(localStorage.getItem("studie73bought"));
	studie81.bought = JSON.parse(localStorage.getItem("studie81bought"));
	studie82.bought = JSON.parse(localStorage.getItem("studie82bought"));
	studie83.bought = JSON.parse(localStorage.getItem("studie83bought"));
}

if(JSON.parse(localStorage.getItem("studie21bought")) == true) {
	studie21Multiplier = Math.log10(antimatter+1);
} else {
	studie21Multiplier = 1;
}
if(JSON.parse(localStorage.getItem("studie22bought")) == true) {
	studie22Multiplier = Math.log10(antimatter+1)/2;
} else {
	studie22Multiplier = 1;
}
if(JSON.parse(localStorage.getItem("studie31bought")) == true) {
	studie31Multiplier = Math.log10(antimatter+1)/3;
} else {
	studie31Multiplier = 1;
}
if(JSON.parse(localStorage.getItem("studie32bought")) == true) {
	studie32Multiplier = Math.log10(antimatter+1)/4;
} else {
	studie32Multiplier = 1;
}
if(JSON.parse(localStorage.getItem("studie41bought")) == true) {
	studie41Multiplier = Math.log10(antimatter+1)/5;
} else {
	studie41Multiplier = 1;
}
if(JSON.parse(localStorage.getItem("studie42bought")) == true) {
	studie42Multiplier = Math.log10(antimatter+1)/6;
} else {
	studie42Multiplier = 1;
}
if(JSON.parse(localStorage.getItem("studie51bought")) == true) {
	studie51Multiplier = Math.log10(antimatter+1)/7;
} else {
	studie51Multiplier = 1;
}
if(JSON.parse(localStorage.getItem("studie52bought")) == true) {
	studie52Multiplier = Math.log10(antimatter+1)/8;
} else {
	studie52Multiplier = 1;
}
 
if(JSON.parse(localStorage.getItem("studie62bought")) == true) {
	document.querySelector("#autobuyersNav").onclick = function() {window.location.href="autobuyers.htm"};
}

function buyStudie(studie) {
	if (studie == 12 && matter >= studie12.cost && studie12.bought == false) {
		matter -= studie12.cost;
		studie12.bought = true;
	} else if (studie == 21 && matter >= studie21.cost && studie21.bought == false && studie12.bought == true) {
		matter -= studie21.cost;
		studie21.bought = true;
	} else if (studie == 22 && matter >= studie22.cost && studie22.bought == false && studie12.bought == true) {
		matter -= studie22.cost;
		studie22.bought = true;
	} else if (studie == 23 && matter >= studie23.cost && studie23.bought == false && studie12.bought == true) {
		matter -= studie23.cost;
		studie23.bought = true;
	} else if (studie == 31 && matter >= studie31.cost && studie31.bought == false && studie21.bought == true) {
		matter -= studie31.cost;
		studie31.bought = true;
	} else if (studie == 32 && matter >= studie32.cost && studie32.bought == false && studie22.bought == true) {		
		matter -= studie32.cost;
		studie32.bought = true;		
	} else if (studie == 33 && matter >= studie33.cost && studie33.bought == false && studie23.bought == true) {
		matter -= studie33.cost;
		studie33.bought = true;
	} else if (studie == 41 && matter >= studie41.cost && studie41.bought == false && studie31.bought == true) {
		matter -= studie41.cost;
		studie41.bought = true;
	} else if (studie == 42 && matter >= studie42.cost && studie42.bought == false && studie32.bought == true) {
		matter -= studie42.cost;
		studie42.bought = true;
	} else if (studie == 43 && matter >= studie43.cost && studie43.bought == false && studie33.bought == true) {
		matter -= studie43.cost;
		studie43.bought = true;
	} else if (studie == 51 && matter >= studie51.cost && studie51.bought == false && studie41.bought == true) {
		matter -= studie51.cost;
		studie51.bought = true;
	} else if (studie == 52 && matter >= studie52.cost && studie52.bought == false && studie42.bought == true) {
		matter -= studie52.cost;
		studie52.bought = true;
	} else if (studie == 53 && matter >= studie53.cost && studie53.bought == false && studie43.bought == true) {
		matter -= studie53.cost;
		studie53.bought = true;
	} else if (studie == 62 && matter >= studie62.cost && studie62.bought == false && studie51.bought == true && studie52.bought == true && 			studie53.bought == true) {
		matter -= studie62.cost;
		studie62.bought = true;
		document.querySelector("#autobuyersNav").onclick = function() {window.location.href="autobuyers.htm"};
	} else if (studie == 71 && matter >= studie71.cost && studie71.bought == false && studie62.bought == true) {
		matter -= studie71.cost;
		studie71.bought = true;
	} else if (studie == 72 && matter >= studie72.cost && studie72.bought == false && studie62.bought == true) {
		matter -= studie72.cost;
		studie72.bought = true;
	} else if (studie == 73 && matter >= studie73.cost && studie73.bought == false && studie62.bought == true) {
		matter -= studie73.cost;
		studie73.bought = true;
	} else if (studie == 81 && matter >= studie81.cost && studie81.bought == false && studie71.bought == true) {
		matter -= studie81.cost;
		studie81.bought = true;
	} else if (studie == 82 && matter >= studie82.cost && studie82.bought == false && studie72.bought == true) {
		matter -= studie82.cost;
		studie82.bought = true;
	} else if (studie == 83 && matter >= studie83.cost && studie83.bought == false && studie73.bought == true) {
		matter -= studie83.cost;
		studie83.bought = true;
	}
}

function update() {
	document.querySelector("#matterCounter").innerHTML = "You have " + Math.floor(matter) + " Matter";
	if (studie12.bought == true) {
		document.querySelector("#studie12Button").classList.add("studieButtonBought");
	} else if (matter >= studie12.cost) {
		document.querySelector("#studie12Button").classList.add("studieButtonAvailable");
	} else if (matter < studie12.cost) {
		document.querySelector("#studie12Button").classList.add("studieButtonUnavailable");
	}
	if (studie21.bought == true) {
		document.querySelector("#studie21Button").classList.add("studieButtonBought");
	} else if (matter >= studie21.cost && studie12.bought == true) {
		document.querySelector("#studie21Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie21Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie21.cost) {
		document.querySelector("#studie21Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie21Button").classList.remove("studieButtonAvailable");
	}
	if (studie22.bought == true) {
		document.querySelector("#studie22Button").classList.add("studieButtonBought");
	} else if (matter >= studie22.cost && studie12.bought == true) {
		document.querySelector("#studie22Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie22Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie22.cost) {
		document.querySelector("#studie22Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie22Button").classList.remove("studieButtonAvailable");
	}
	if (studie23.bought == true) {
		document.querySelector("#studie23Button").classList.add("studieButtonBought");
	} else if (matter >= studie23.cost && studie12.bought == true) {
		document.querySelector("#studie23Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie23Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie23.cost) {
		document.querySelector("#studie23Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie23Button").classList.remove("studieButtonAvailable");
	}
	if (studie31.bought == true) {
		document.querySelector("#studie31Button").classList.add("studieButtonBought");
	} else if (matter >= studie31.cost && studie21.bought == true) {
		document.querySelector("#studie31Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie31Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie31.cost) {
		document.querySelector("#studie31Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie31Button").classList.remove("studieButtonAvailable");
	}
	if (studie32.bought == true) {
		document.querySelector("#studie32Button").classList.add("studieButtonBought");
	} else if (matter >= studie32.cost && studie22.bought == true) {
		document.querySelector("#studie32Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie32Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie32.cost) {
		document.querySelector("#studie32Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie32Button").classList.remove("studieButtonAvailable");
	}
	if (studie33.bought == true) {
		document.querySelector("#studie33Button").classList.add("studieButtonBought");
	} else if (matter >= studie33.cost && studie23.bought == true) {
		document.querySelector("#studie33Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie33Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie33.cost) {
		document.querySelector("#studie33Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie33Button").classList.remove("studieButtonAvailable");
	}
	if (studie41.bought == true) {
		document.querySelector("#studie41Button").classList.add("studieButtonBought");
	} else if (matter >= studie41.cost && studie31.bought == true) {
		document.querySelector("#studie41Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie41Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie41.cost) {
		document.querySelector("#studie41Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie41Button").classList.remove("studieButtonAvailable");
	}
	if (studie42.bought == true) {
		document.querySelector("#studie42Button").classList.add("studieButtonBought");
	} else if (matter >= studie42.cost && studie32.bought == true) {
		document.querySelector("#studie42Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie42Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie42.cost) {
		document.querySelector("#studie42Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie42Button").classList.remove("studieButtonAvailable");
	}
	if (studie43.bought == true) {
		document.querySelector("#studie43Button").classList.add("studieButtonBought");
	} else if (matter >= studie43.cost && studie33.bought == true) {
		document.querySelector("#studie43Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie43Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie43.cost) {
		document.querySelector("#studie43Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie43Button").classList.remove("studieButtonAvailable");
	}
	if (studie51.bought == true) {
		document.querySelector("#studie51Button").classList.add("studieButtonBought");
	} else if (matter >= studie51.cost && studie41.bought == true) {
		document.querySelector("#studie51Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie51Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie51.cost) {
		document.querySelector("#studie51Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie51Button").classList.remove("studieButtonAvailable");
	}
	if (studie52.bought == true) {
		document.querySelector("#studie52Button").classList.add("studieButtonBought");
	} else if (matter >= studie52.cost && studie42.bought == true) {
		document.querySelector("#studie52Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie52Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie52.cost) {
		document.querySelector("#studie52Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie52Button").classList.remove("studieButtonAvailable");
	}
	if (studie53.bought == true) {
		document.querySelector("#studie53Button").classList.add("studieButtonBought");
	} else if (matter >= studie53.cost && studie43.bought == true) {
		document.querySelector("#studie53Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie53Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie53.cost) {
		document.querySelector("#studie53Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie53Button").classList.remove("studieButtonAvailable");
	}
	if (studie62.bought == true) {
		document.querySelector("#studie62Button").classList.add("studieButtonBought");
	} else if (matter >= studie62.cost && studie51.bought == true && studie52.bought == true && studie53.bought == true) {
		document.querySelector("#studie62Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie62Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie62.cost) {
		document.querySelector("#studie62Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie62Button").classList.remove("studieButtonAvailable");
	}
	if (studie71.bought == true) {
		document.querySelector("#studie71Button").classList.add("studieButtonBought");
	} else if (matter >= studie71.cost && studie62.bought == true) {
		document.querySelector("#studie71Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie71Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie71.cost) {
		document.querySelector("#studie71Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie71Button").classList.remove("studieButtonAvailable");
	}
	if (studie72.bought == true) {
		document.querySelector("#studie72Button").classList.add("studieButtonBought");
	} else if (matter >= studie72.cost && studie62.bought == true) {
		document.querySelector("#studie72Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie72Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie72.cost) {
		document.querySelector("#studie72Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie72Button").classList.remove("studieButtonAvailable");
	}
	if (studie73.bought == true) {
		document.querySelector("#studie73Button").classList.add("studieButtonBought");
	} else if (matter >= studie73.cost && studie62.bought == true) {
		document.querySelector("#studie73Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie73Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie73.cost) {
		document.querySelector("#studie73Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie73Button").classList.remove("studieButtonAvailable");
	}
	if (studie81.bought == true) {
		document.querySelector("#studie81Button").classList.add("studieButtonBought");
	} else if (matter >= studie81.cost && studie71.bought == true) {
		document.querySelector("#studie81Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie81Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie81.cost) {
		document.querySelector("#studie81Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie81Button").classList.remove("studieButtonAvailable");
	}
	if (studie82.bought == true) {
		document.querySelector("#studie82Button").classList.add("studieButtonBought");
	} else if (matter >= studie82.cost && studie72.bought == true) {
		document.querySelector("#studie82Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie82Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie82.cost) {
		document.querySelector("#studie82Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie82Button").classList.remove("studieButtonAvailable");
	}
	if (studie83.bought == true) {
		document.querySelector("#studie83Button").classList.add("studieButtonBought");
	} else if (matter >= studie83.cost && studie73.bought == true) {
		document.querySelector("#studie83Button").classList.add("studieButtonAvailable");
		document.querySelector("#studie83Button").classList.remove("studieButtonUnavailable");
	} else if (matter < studie83.cost) {
		document.querySelector("#studie83Button").classList.add("studieButtonUnavailable");
		document.querySelector("#studie83Button").classList.remove("studieButtonAvailable");
	}
	document.querySelector("#studie21Current").innerHTML = "Currently: " + (Math.round(Math.log10(Number(localStorage.getItem("antimatter")))*10)/10) + "x";
	document.querySelector("#studie22Current").innerHTML = "Currently: " + (Math.round(Math.log10(Number(localStorage.getItem("antimatter")))/2*10)/10) + "x";
	document.querySelector("#studie31Current").innerHTML = "Currently: " + (Math.round(Math.log10(Number(localStorage.getItem("antimatter")))/3*10)/10) + "x";
	document.querySelector("#studie32Current").innerHTML = "Currently: " + (Math.round(Math.log10(Number(localStorage.getItem("antimatter")))/4*10)/10) + "x";
	document.querySelector("#studie41Current").innerHTML = "Currently: " + (Math.round(Math.log10(Number(localStorage.getItem("antimatter")))/5*10)/10) + "x";
	document.querySelector("#studie42Current").innerHTML = "Currently: " + (Math.round(Math.log10(Number(localStorage.getItem("antimatter")))/6*10)/10) + "x";
	document.querySelector("#studie51Current").innerHTML = "Currently: " + (Math.round(Math.log10(Number(localStorage.getItem("antimatter")))/7*10)/10) + "x";
	document.querySelector("#studie52Current").innerHTML = "Currently: " + (Math.round(Math.log10(Number(localStorage.getItem("antimatter")))/8*10)/10) + "x";
	document.querySelector("#studie71Current").innerHTML = "Currently: " + (Math.round(Math.pow((Number(localStorage.getItem("timespent"))), 0.5)*10)/10) + "x";
	
	save();
}

function save() {
	localStorage.setItem("matter", matter)

	localStorage.setItem("studie12bought", studie12.bought);
	localStorage.setItem("studie21bought", studie21.bought);
	localStorage.setItem("studie22bought", studie22.bought);
	localStorage.setItem("studie23bought", studie23.bought)
	localStorage.setItem("studie31bought", studie31.bought);
	localStorage.setItem("studie32bought", studie32.bought);
	localStorage.setItem("studie33bought", studie33.bought);
	localStorage.setItem("studie41bought", studie41.bought);
	localStorage.setItem("studie42bought", studie42.bought);
	localStorage.setItem("studie43bought", studie43.bought);
	localStorage.setItem("studie51bought", studie51.bought);
	localStorage.setItem("studie52bought", studie52.bought);
	localStorage.setItem("studie53bought", studie53.bought);
	localStorage.setItem("studie62bought", studie62.bought);
	localStorage.setItem("studie71bought", studie71.bought);
	localStorage.setItem("studie72bought", studie72.bought);
	localStorage.setItem("studie73bought", studie73.bought);
	localStorage.setItem("studie81bought", studie81.bought);
	localStorage.setItem("studie82bought", studie82.bought);
	localStorage.setItem("studie83bought", studie83.bought);

	localStorage.setItem("antimatter", antimatter);
	localStorage.setItem("dimensionBoostCost", dimensionBoost.cost);
	localStorage.setItem("dimensionBoostMultiplier", dimensionBoost.multiplier);
	localStorage.setItem("dimensionBoostAmount", dimensionBoost.amount);

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

window.setInterval(update, 100);