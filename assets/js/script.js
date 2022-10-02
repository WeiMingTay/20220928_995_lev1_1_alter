let age = document.getElementById("alter");
let ausgabe = document.getElementById("output");

function alter1() {
	if (age.value < 18) {
		console.log(false),
			(ausgabe.innerHTML = "Du bist minderjährig!"),
			(ausgabe.style.color = "hotpink");
	} else {
		console.log(true),
			(ausgabe.innerHTML = "Du bist volljährig"),
			(ausgabe.style.color = "green");
	}
}
