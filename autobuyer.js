var matter = Number(localStorage.getItem("matter"));

if(JSON.parse(localStorage.getItem("autobuyer1bought")) == true || JSON.parse(localStorage.getItem("autobuyer1bought")) == false) {
    var autobuyer1 = {
        cost:Number(localStorage.getItem("autobuyer1cost")),
        bought:JSON.parse(localStorage.getItem("autobuyer1bought")),
        interval:Number(localStorage.getItem("autobuyer1interval")),
        on:JSON.parse(localStorage.getItem("autobuyer1on")),
    }
    var autobuyer2 = {
        cost:Number(localStorage.getItem("autobuyer2cost")),
        bought:JSON.parse(localStorage.getItem("autobuyer2bought")),
        interval:Number(localStorage.getItem("autobuyer2interval")),
        on:JSON.parse(localStorage.getItem("autobuyer2on")),
    }
    var autobuyer3 = {
        cost:Number(localStorage.getItem("autobuyer3cost")),
        bought:JSON.parse(localStorage.getItem("autobuyer3bought")),
        interval:Number(localStorage.getItem("autobuyer3interval")),
        on:JSON.parse(localStorage.getItem("autobuyer3on")),
    }
    var autobuyer4 = {
        cost:Number(localStorage.getItem("autobuyer4cost")),
        bought:JSON.parse(localStorage.getItem("autobuyer4bought")),
        interval:Number(localStorage.getItem("autobuyer4interval")),
        on:JSON.parse(localStorage.getItem("autobuyer4on")),
    }
    var autobuyer5 = {
        cost:Number(localStorage.getItem("autobuyer5cost")),
        bought:JSON.parse(localStorage.getItem("autobuyer5bought")),
        interval:Number(localStorage.getItem("autobuyer5interval")),
        on:JSON.parse(localStorage.getItem("autobuyer5on")),
    }
    var autobuyer6 = {
        cost:Number(localStorage.getItem("autobuyer6cost")),
        bought:JSON.parse(localStorage.getItem("autobuyer6bought")),
        interval:Number(localStorage.getItem("autobuyer6interval")),
        on:JSON.parse(localStorage.getItem("autobuyer6on")),
    }
    var autobuyer7 = {
        cost:Number(localStorage.getItem("autobuyer7cost")),
        bought:JSON.parse(localStorage.getItem("autobuyer7bought")),
        interval:Number(localStorage.getItem("autobuyer7interval")),
        on:JSON.parse(localStorage.getItem("autobuyer7on")),
    }
    var autobuyer8 = {
        cost:Number(localStorage.getItem("autobuyer8cost")),
        bought:JSON.parse(localStorage.getItem("autobuyer8bought")),
        interval:Number(localStorage.getItem("autobuyer8interval")),
        on:JSON.parse(localStorage.getItem("autobuyer8on")),
    }
    var autobuyer9 = {
        cost:Number(localStorage.getItem("autobuyer9cost")),
        bought:JSON.parse(localStorage.getItem("autobuyer9bought")),
        interval:Number(localStorage.getItem("autobuyer9interval")),
        on:JSON.parse(localStorage.getItem("autobuyer9on")),
    }
} else {
    var autobuyer1 = {
        cost:5,
        bought:false,
        interval:10000,
        on:false,
    }
    var autobuyer2 = {
        cost:10,
        bought:false,
        interval:10000,
        on:false,
    }
    var autobuyer3 = {
        cost:15,
        bought:false,
        interval:10000,
        on:false,
    }
    var autobuyer4 = {
        cost:20,
        bought:false,
        interval:10000,
        on:false,
    }
    var autobuyer5 = {
        cost:25,
        bought:false,
        interval:10000,
        on:false,
    }
    var autobuyer6 = {
        cost:30,
        bought:false,
        interval:10000,
        on:false,
    }
    var autobuyer7 = {
        cost:35,
        bought:false,
        interval:10000,
        on:false,
    }
    var autobuyer8 = {
        cost:40,
        bought:false,
        interval:10000,
        on:false,
    }
    var autobuyer9 = {
        cost:50,
        bought:false,
        interval:60000,
        on:false,
    }
}

if (JSON.parse(localStorage.getItem("studie12bought")) == true || JSON.parse(localStorage.getItem("studie12bought")) == false) {
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
	if(JSON.parse(localStorage.getItem("studie21bought")) == true) {
        studie21Multiplier = Math.log10(antimatter+1);
    } else {
        studie21Multiplier = 1;
    }
    if(JSON.parse(localStorage.getItem("studie22bought")) == true) {
        studie22Multiplier = Math.log10(antimatter+1);
    } else {
        studie22Multiplier = 1;
    }
    if(JSON.parse(localStorage.getItem("studie31bought")) == true) {
        studie31Multiplier = Math.log10(antimatter+1);
    } else {
        studie31Multiplier = 1;
    }
    if(JSON.parse(localStorage.getItem("studie32bought")) == true) {
        studie32Multiplier = Math.log10(antimatter+1);
    } else {
        studie32Multiplier = 1;
    }
    if(JSON.parse(localStorage.getItem("studie41bought")) == true) {
        studie41Multiplier = Math.log10(antimatter+1);
    } else {
        studie41Multiplier = 1;
    }
    if(JSON.parse(localStorage.getItem("studie42bought")) == true) {
        studie42Multiplier = Math.log10(antimatter+1);
    } else {
        studie42Multiplier = 1;
    }
    if(JSON.parse(localStorage.getItem("studie51bought")) == true) {
        studie51Multiplier = Math.log10(antimatter+1);
    } else {
        studie51Multiplier = 1;
    }
    if(JSON.parse(localStorage.getItem("studie52bought")) == true) {
        studie52Multiplier = Math.log10(antimatter+1);
    } else {
        studie52Multiplier = 1;
    }
}

if(JSON.parse(localStorage.getItem("studie62bought")) == true) {
	document.querySelector("#autobuyersNav").onclick = function() {window.location.href="autobuyers.htm"};
}

function buyAutobuyer(autobuyer) {
    if(autobuyer == 1) {
        if(autobuyer1.bought == false && matter >= autobuyer1.cost) {
            matter -= autobuyer1.cost;
            autobuyer1.cost *= 2;
            autobuyer1.bought = true;
        } else if(autobuyer1.bought == true && matter >= autobuyer1.cost) {
            matter -= autobuyer1.cost;
            autobuyer1.cost *= 2;
            autobuyer1.interval /= 2;
        }
    }
    if(autobuyer == 2) {
        if(autobuyer2.bought == false && matter >= autobuyer2.cost) {
            matter -= autobuyer2.cost;
            autobuyer2.cost *= 2;
            autobuyer2.bought = true;
        } else if(autobuyer2.bought == true && matter >= autobuyer2.cost) {
            matter -= autobuyer2.cost;
            autobuyer2.cost *= 2;
            autobuyer2.interval /= 2;
        }
    }
    if(autobuyer == 3) {
        if(autobuyer3.bought == false && matter >= autobuyer3.cost) {
            matter -= autobuyer3.cost;
            autobuyer3.cost *= 2;
            autobuyer3.bought = true;
        } else if(autobuyer3.bought == true && matter >= autobuyer3.cost) {
            matter -= autobuyer3.cost;
            autobuyer3.cost *= 2;
            autobuyer3.interval /= 2;
        }
    }
    if(autobuyer == 4) {
        if(autobuyer4.bought == false && matter >= autobuyer4.cost) {
            matter -= autobuyer4.cost;
            autobuyer4.cost *= 2;
            autobuyer4.bought = true;
        } else if(autobuyer4.bought == true && matter >= autobuyer4.cost) {
            matter -= autobuyer4.cost;
            autobuyer4.cost *= 2;
            autobuyer4.interval /= 2;
        }
    }
    if(autobuyer == 5) {
        if(autobuyer5.bought == false && matter >= autobuyer5.cost) {
            matter -= autobuyer5.cost;
            autobuyer5.cost *= 2;
            autobuyer5.bought = true;
        } else if(autobuyer5.bought == true && matter >= autobuyer5.cost) {
            matter -= autobuyer5.cost;
            autobuyer5.cost *= 2;
            autobuyer5.interval /= 2;
        }
    }
    if(autobuyer == 6) {
        if(autobuyer6.bought == false && matter >= autobuyer6.cost) {
            matter -= autobuyer6.cost;
            autobuyer6.cost *= 2;
            autobuyer6.bought = true;
        } else if(autobuyer6.bought == true && matter >= autobuyer6.cost) {
            matter -= autobuyer6.cost;
            autobuyer6.cost *= 2;
            autobuyer6.interval /= 2;
        }
    }
    if(autobuyer == 7) {
        if(autobuyer7.bought == false && matter >= autobuyer7.cost) {
            matter -= autobuyer7.cost;
            autobuyer7.cost *= 2;
            autobuyer7.bought = true;
        } else if(autobuyer7.bought == true && matter >= autobuyer7.cost) {
            matter -= autobuyer7.cost;
            autobuyer7.cost *= 2;
            autobuyer7.interval /= 2;
        }
    }
    if(autobuyer == 8) {
        if(autobuyer8.bought == false && matter >= autobuyer8.cost) {
            matter -= autobuyer8.cost;
            autobuyer8.cost *= 2;
            autobuyer8.bought = true;
        } else if(autobuyer8.bought == true && matter >= autobuyer8.cost) {
            matter -= autobuyer8.cost;
            autobuyer8.cost *= 2;
            autobuyer8.interval /= 2;
        }
    }
    if(autobuyer == 9) {
        if(autobuyer9.bought == false && matter >= autobuyer9.cost) {
            matter -= autobuyer9.cost;
            autobuyer9.cost *= 2;
            autobuyer9.bought = true;
        } else if(autobuyer9.bought == true && matter >= autobuyer9.cost) {
            matter -= autobuyer9.cost;
            autobuyer9.cost *= 2;
            autobuyer9.interval /= 2;
        }
    }
}

function update() {
    document.querySelector("#matterCounter").innerHTML = "You have " + matter + " Matter";
    if(matter >= autobuyer1.cost) {
        document.querySelector("#autobuyerButton1").classList.add("buttonAvailable");
        document.querySelector("#autobuyerButton1").classList.remove("buttonUnavailable");
    } else if(matter < autobuyer1.cost) {
        document.querySelector("#autobuyerButton1").classList.remove("buttonAvailable");
        document.querySelector("#autobuyerButton1").classList.add("buttonUnavailable");
    }
    if(autobuyer1.on == true){
        document.querySelector("#autobuyer1Switch").classList.add("buttonAvailable");
        document.querySelector("#autobuyer1Switch").classList.remove("buttonUnavailable");
    } else if(autobuyer1.on == false) {
        document.querySelector("#autobuyer1Switch").classList.remove("buttonAvailable");
        document.querySelector("#autobuyer1Switch").classList.add("buttonUnavailable");
    }
    document.querySelector("#autobuyer1Cost").innerHTML = "Cost: " + autobuyer1.cost + " Matter";
    document.querySelector("#autobuyer1Interval").innerHTML = "Interval: " + autobuyer1.interval/1000 + "s";

    if(matter >= autobuyer2.cost) {
        document.querySelector("#autobuyerButton2").classList.add("buttonAvailable");
        document.querySelector("#autobuyerButton2").classList.remove("buttonUnavailable");
    } else if(matter < autobuyer2.cost) {
        document.querySelector("#autobuyerButton2").classList.remove("buttonAvailable");
        document.querySelector("#autobuyerButton2").classList.add("buttonUnavailable");
    }
    if(autobuyer2.on == true){
        document.querySelector("#autobuyer2Switch").classList.add("buttonAvailable");
        document.querySelector("#autobuyer2Switch").classList.remove("buttonUnavailable");
    } else if(autobuyer2.on == false) {
        document.querySelector("#autobuyer2Switch").classList.remove("buttonAvailable");
        document.querySelector("#autobuyer2Switch").classList.add("buttonUnavailable");
    }
    document.querySelector("#autobuyer2Cost").innerHTML = "Cost: " + autobuyer2.cost + " Matter";
    document.querySelector("#autobuyer2Interval").innerHTML = "Interval: " + autobuyer2.interval/1000 + "s";

    if(matter >= autobuyer3.cost) {
        document.querySelector("#autobuyerButton3").classList.add("buttonAvailable");
        document.querySelector("#autobuyerButton3").classList.remove("buttonUnavailable");
    } else if(matter < autobuyer3.cost) {
        document.querySelector("#autobuyerButton3").classList.remove("buttonAvailable");
        document.querySelector("#autobuyerButton3").classList.add("buttonUnavailable");
    }
    if(autobuyer3.on == true){
        document.querySelector("#autobuyer3Switch").classList.add("buttonAvailable");
        document.querySelector("#autobuyer3Switch").classList.remove("buttonUnavailable");
    } else if(autobuyer3.on == false) {
        document.querySelector("#autobuyer3Switch").classList.remove("buttonAvailable");
        document.querySelector("#autobuyer3Switch").classList.add("buttonUnavailable");
    }
    document.querySelector("#autobuyer3Cost").innerHTML = "Cost: " + autobuyer3.cost + " Matter";
    document.querySelector("#autobuyer3Interval").innerHTML = "Interval: " + autobuyer3.interval/1000 + "s";

    if(matter >= autobuyer4.cost) {
        document.querySelector("#autobuyerButton4").classList.add("buttonAvailable");
        document.querySelector("#autobuyerButton4").classList.remove("buttonUnavailable");
    } else if(matter < autobuyer4.cost) {
        document.querySelector("#autobuyerButton4").classList.remove("buttonAvailable");
        document.querySelector("#autobuyerButton4").classList.add("buttonUnavailable");
    }
    if(autobuyer4.on == true){
        document.querySelector("#autobuyer4Switch").classList.add("buttonAvailable");
        document.querySelector("#autobuyer4Switch").classList.remove("buttonUnavailable");
    } else if(autobuyer4.on == false) {
        document.querySelector("#autobuyer4Switch").classList.remove("buttonAvailable");
        document.querySelector("#autobuyer4Switch").classList.add("buttonUnavailable");
    }
    document.querySelector("#autobuyer4Cost").innerHTML = "Cost: " + autobuyer4.cost + " Matter";
    document.querySelector("#autobuyer4Interval").innerHTML = "Interval: " + autobuyer4.interval/1000 + "s";

    if(matter >= autobuyer5.cost) {
        document.querySelector("#autobuyerButton5").classList.add("buttonAvailable");
        document.querySelector("#autobuyerButton5").classList.remove("buttonUnavailable");
    } else if(matter < autobuyer5.cost) {
        document.querySelector("#autobuyerButton5").classList.remove("buttonAvailable");
        document.querySelector("#autobuyerButton5").classList.add("buttonUnavailable");
    }
    if(autobuyer5.on == true){
        document.querySelector("#autobuyer5Switch").classList.add("buttonAvailable");
        document.querySelector("#autobuyer5Switch").classList.remove("buttonUnavailable");
    } else if(autobuyer5.on == false) {
        document.querySelector("#autobuyer5Switch").classList.remove("buttonAvailable");
        document.querySelector("#autobuyer5Switch").classList.add("buttonUnavailable");
    }
    document.querySelector("#autobuyer5Cost").innerHTML = "Cost: " + autobuyer5.cost + " Matter";
    document.querySelector("#autobuyer5Interval").innerHTML = "Interval: " + autobuyer5.interval/1000 + "s";

    if(matter >= autobuyer6.cost) {
        document.querySelector("#autobuyerButton6").classList.add("buttonAvailable");
        document.querySelector("#autobuyerButton6").classList.remove("buttonUnavailable");
    } else if(matter < autobuyer6.cost) {
        document.querySelector("#autobuyerButton6").classList.remove("buttonAvailable");
        document.querySelector("#autobuyerButton6").classList.add("buttonUnavailable");
    }
    if(autobuyer6.on == true){
        document.querySelector("#autobuyer6Switch").classList.add("buttonAvailable");
        document.querySelector("#autobuyer6Switch").classList.remove("buttonUnavailable");
    } else if(autobuyer6.on == false) {
        document.querySelector("#autobuyer6Switch").classList.remove("buttonAvailable");
        document.querySelector("#autobuyer6Switch").classList.add("buttonUnavailable");
    }
    document.querySelector("#autobuyer6Cost").innerHTML = "Cost: " + autobuyer6.cost + " Matter";
    document.querySelector("#autobuyer6Interval").innerHTML = "Interval: " + autobuyer6.interval/1000 + "s";

    if(matter >= autobuyer7.cost) {
        document.querySelector("#autobuyerButton7").classList.add("buttonAvailable");
        document.querySelector("#autobuyerButton7").classList.remove("buttonUnavailable");
    } else if(matter < autobuyer7.cost) {
        document.querySelector("#autobuyerButton7").classList.remove("buttonAvailable");
        document.querySelector("#autobuyerButton7").classList.add("buttonUnavailable");
    }
    if(autobuyer7.on == true){
        document.querySelector("#autobuyer7Switch").classList.add("buttonAvailable");
        document.querySelector("#autobuyer7Switch").classList.remove("buttonUnavailable");
    } else if(autobuyer7.on == false) {
        document.querySelector("#autobuyer7Switch").classList.remove("buttonAvailable");
        document.querySelector("#autobuyer7Switch").classList.add("buttonUnavailable");
    }
    document.querySelector("#autobuyer7Cost").innerHTML = "Cost: " + autobuyer7.cost + " Matter";
    document.querySelector("#autobuyer7Interval").innerHTML = "Interval: " + autobuyer7.interval/1000 + "s";

    if(matter >= autobuyer8.cost) {
        document.querySelector("#autobuyerButton8").classList.add("buttonAvailable");
        document.querySelector("#autobuyerButton8").classList.remove("buttonUnavailable");
    } else if(matter < autobuyer8.cost) {
        document.querySelector("#autobuyerButton8").classList.remove("buttonAvailable");
        document.querySelector("#autobuyerButton8").classList.add("buttonUnavailable");
    }
    if(autobuyer8.on == true){
        document.querySelector("#autobuyer8Switch").classList.add("buttonAvailable");
        document.querySelector("#autobuyer8Switch").classList.remove("buttonUnavailable");
    } else if(autobuyer8.on == false) {
        document.querySelector("#autobuyer8Switch").classList.remove("buttonAvailable");
        document.querySelector("#autobuyer8Switch").classList.add("buttonUnavailable");
    }
    document.querySelector("#autobuyer8Cost").innerHTML = "Cost: " + autobuyer8.cost + " Matter";
    document.querySelector("#autobuyer8Interval").innerHTML = "Interval: " + autobuyer8.interval/1000 + "s";

    if(matter >= autobuyer9.cost) {
        document.querySelector("#autobuyerButton9").classList.add("buttonAvailable");
        document.querySelector("#autobuyerButton9").classList.remove("buttonUnavailable");
    } else if(matter < autobuyer9.cost) {
        document.querySelector("#autobuyerButton9").classList.remove("buttonAvailable");
        document.querySelector("#autobuyerButton9").classList.add("buttonUnavailable");
    }
    if(autobuyer9.on == true){
        document.querySelector("#autobuyer9Switch").classList.add("buttonAvailable");
        document.querySelector("#autobuyer9Switch").classList.remove("buttonUnavailable");
    } else if(autobuyer9.on == false) {
        document.querySelector("#autobuyer9Switch").classList.remove("buttonAvailable");
        document.querySelector("#autobuyer9Switch").classList.add("buttonUnavailable");
    }
    document.querySelector("#autobuyer9Cost").innerHTML = "Cost: " + autobuyer9.cost + " Matter";
    document.querySelector("#autobuyer9Interval").innerHTML = "Interval: " + autobuyer9.interval/1000 + "s";
    save();
}

function save() {
   localStorage.setItem("matter", matter);
   localStorage.setItem("autobuyer1bought", autobuyer1.bought);
   localStorage.setItem("autobuyer2bought", autobuyer2.bought);
   localStorage.setItem("autobuyer3bought", autobuyer3.bought);
   localStorage.setItem("autobuyer4bought", autobuyer4.bought);
   localStorage.setItem("autobuyer5bought", autobuyer5.bought);
   localStorage.setItem("autobuyer6bought", autobuyer6.bought);
   localStorage.setItem("autobuyer7bought", autobuyer7.bought);
   localStorage.setItem("autobuyer8bought", autobuyer8.bought);
   localStorage.setItem("autobuyer9bought", autobuyer9.bought);

   localStorage.setItem("autobuyer1cost", autobuyer1.cost);
   localStorage.setItem("autobuyer2cost", autobuyer2.cost);
   localStorage.setItem("autobuyer3cost", autobuyer3.cost);
   localStorage.setItem("autobuyer4cost", autobuyer4.cost);
   localStorage.setItem("autobuyer5cost", autobuyer5.cost);
   localStorage.setItem("autobuyer6cost", autobuyer6.cost);
   localStorage.setItem("autobuyer7cost", autobuyer7.cost);
   localStorage.setItem("autobuyer8cost", autobuyer8.cost);
   localStorage.setItem("autobuyer9cost", autobuyer9.cost);

   localStorage.setItem("autobuyer1interval", autobuyer1.interval);
   localStorage.setItem("autobuyer2interval", autobuyer2.interval);
   localStorage.setItem("autobuyer3interval", autobuyer3.interval);
   localStorage.setItem("autobuyer4interval", autobuyer4.interval);
   localStorage.setItem("autobuyer5interval", autobuyer5.interval);
   localStorage.setItem("autobuyer6interval", autobuyer6.interval);
   localStorage.setItem("autobuyer7interval", autobuyer7.interval);
   localStorage.setItem("autobuyer8interval", autobuyer8.interval);
   localStorage.setItem("autobuyer9interval", autobuyer9.interval);

   localStorage.setItem("autobuyer1on", autobuyer1.on);
   localStorage.setItem("autobuyer2on", autobuyer2.on);
   localStorage.setItem("autobuyer3on", autobuyer3.on);
   localStorage.setItem("autobuyer4on", autobuyer4.on);
   localStorage.setItem("autobuyer5on", autobuyer5.on);
   localStorage.setItem("autobuyer6on", autobuyer6.on);
   localStorage.setItem("autobuyer7on", autobuyer7.on);
   localStorage.setItem("autobuyer8on", autobuyer8.on);
   localStorage.setItem("autobuyer9on", autobuyer9.on);

}

function autobuyerSwitch(autobuyer) {
    if(autobuyer == 1 && autobuyer1.bought == true) {
        if(autobuyer1.on == false) {
            autobuyer1.on = true;
        } else if(autobuyer1.on == true) {
            autobuyer1.on = false;
        }
    }
    if(autobuyer == 2 && autobuyer2.bought == true) {
        if(autobuyer2.on == false) {
            autobuyer2.on = true;
        } else if(autobuyer2.on == true) {
            autobuyer2.on = false;
        }
    }
    if(autobuyer == 3 && autobuyer3.bought == true) {
        if(autobuyer3.on == false) {
            autobuyer3.on = true;
        } else if(autobuyer3.on == true) {
            autobuyer3.on = false;
        }
    }
    if(autobuyer == 4 && autobuyer4.bought == true) {
        if(autobuyer4.on == false) {
            autobuyer4.on = true;
        } else if(autobuyer4.on == true) {
            autobuyer4.on = false;
        }
    }
    if(autobuyer == 5 && autobuyer5.bought == true) {
        if(autobuyer5.on == false) {
            autobuyer5.on = true;
        } else if(autobuyer5.on == true) {
            autobuyer5.on = false;
        }
    }
    if(autobuyer == 6 && autobuyer6.bought == true) {
        if(autobuyer6.on == false) {
            autobuyer6.on = true;
        } else if(autobuyer6.on == true) {
            autobuyer6.on = false;
        }
    }
    if(autobuyer == 7 && autobuyer7.bought == true) {
        if(autobuyer7.on == false) {
            autobuyer7.on = true;
        } else if(autobuyer7.on == true) {
            autobuyer7.on = false;
        }
    }
    if(autobuyer == 8 && autobuyer8.bought == true) {
        if(autobuyer8.on == false) {
            autobuyer8.on = true;
        } else if(autobuyer8.on == true) {
            autobuyer8.on = false;
        }
    }
    if(autobuyer == 9 && autobuyer9.bought == true) {
        if(autobuyer9.on == false) {
            autobuyer9.on = true;
        } else if(autobuyer9.on == true) {
            autobuyer9.on = false;
        }
    }

}

window.setInterval(update, 100);
