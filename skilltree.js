var skillpoints = 0;
	var skill12 = {
		cost:1,
		bought:false,
	};
	var skill21 = {
		cost:2,
		bought:false,
	}
	var skill22 = {
		cost:3,
		bought:false,
}

if (localStorage.hasOwnProperty("skillpoints")) {
	skillpoints = JSON.parse(localStorage.getItem("skillpoints"));
	skill12.bought = JSON.parse(localStorage.getItem("skill12bought"));
	skill21.bought = JSON.parse(localStorage.getItem("skill21bought"));
	skill22.bought = JSON.parse(localStorage.getItem("skill22bought"));
}

function buySkill(skill) {
	if (skill == 12) {
		if(skillpoints >= skill12.cost && skill12.bought == false) {
			skillpoints -= skill12.cost;
			skill12.bought = true;
		}
	}
	if (skill == 21) {
		if(skillpoints >= skill21.cost && skill21.bought == false && skill12.bought == true) {
			skillpoints -= skill21.cost;
			skill21.bought = true;
		}
	}
	if (skill == 22) {
		if(skillpoints >= skill22.cost && skill22.bought == false && skill12.bought == true) {
			skillpoints -= skill22.cost;
			skill22.bought = true;
		}
	}
}

function update() {
	document.querySelector("#skillPointCounter").innerHTML = "You have " + skillpoints + " Skillpoints";
	if(skill12.bought == true) {
		document.querySelector("#skill12Button").classList.add("skillButtonBought");
	} else if (skillpoints >= skill12.cost) {
		document.querySelector("#skill12Button").classList.add("skillButtonAvailable");
	} else if (skillpoints < skill12.cost) {
		document.querySelector("#skill12Button").classList.add("skillButtonUnavailable");
	}
	if(skill21.bought == true) {
		document.querySelector("#skill21Button").classList.add("skillButtonBought");
	} else if (skillpoints >= skill21.cost && skill12.bought == true) {
		document.querySelector("#skill21Button").classList.add("skillButtonAvailable");
		document.querySelector("#skill21Button").classList.remove("skillButtonUnavailable");
	} else if (skillpoints < skill21.cost) {
		document.querySelector("#skill21Button").classList.add("skillButtonUnavailable");
		document.querySelector("#skill21Button").classList.remove("skillButtonAvailable");
	}
	if(skill22.bought == true) {
		document.querySelector("#skill22Button").classList.add("skillButtonBought");
	} else if (skillpoints >= skill22.cost && skill12.bought == true) {
		document.querySelector("#skill22Button").classList.add("skillButtonAvailable");
		document.querySelector("#skill22Button").classList.remove("skillButtonUnavailable");
	} else if (skillpoints < skill22.cost) {
		document.querySelector("#skill22Button").classList.add("skillButtonUnavailable");
		document.querySelector("#skill22Button").classList.remove("skillButtonAvailable");
	}
	save();
}

function save() {
	localStorage.setItem("skillpoints", skillpoints)

	localStorage.setItem("skill12bought", skill12.bought);
	localStorage.setItem("skill21bought", skill21.bought);
	localStorage.setItem("skill22bought", skill22.bought);
}

function reset() {
	localStorage.clear();
	window.location.href = "skilltree.htm";
}

window.setInterval(update, 100);