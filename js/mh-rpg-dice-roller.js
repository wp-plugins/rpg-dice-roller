function mh_rpg_roll_dice() {
	var number_of_dice = document.getElementById("mh_rpg_number_of_dice").value;
	var die_type = document.getElementById("mh_rpg_die_type").value;
	var total = 0;

	for (var i = 0; i < number_of_dice; i++) {
		total += mh_rpg_random_number(1, die_type);
	}

	document.getElementById("mh_rpg_dice_roll").innerHTML = total;
}

function mh_rpg_roll_dice_widget() {
	var number_of_dice = document.getElementById("mh_rpg_number_of_dice_widget").value;
	var die_type = document.getElementById("mh_rpg_die_type_widget").value;
	var total = 0;

	for (var i = 0; i < number_of_dice; i++) {
		total += mh_rpg_random_number(1, die_type);
	}

	document.getElementById("mh_rpg_dice_roll_widget").innerHTML = total;
}

function mh_rpg_random_number(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}