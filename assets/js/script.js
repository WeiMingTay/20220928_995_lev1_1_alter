let age = document.getElementById("alter");
let geburtstag = document.getElementById("geburtstag");
let ausgabe = document.getElementById("output");
let datum = new Date();

function alter1() {
	let inputGeb = new Date(geburtstag.value);
	// Since one year is equal to 31,556,952,000 milliseconds
	let volljaehrig = (datum - inputGeb) / 31556952000;


	if (volljaehrig < 18) {
		(ausgabe.innerHTML = "Du bist minderjährig! Warte noch "+(18 - volljaehrig).toFixed(0)+" Jahre"),
			(ausgabe.style.color = "hotpink");
	} else {
		(ausgabe.innerHTML = "Du bist seit "+(volljaehrig - 18).toFixed(0)+" Jahren volljährig"), (ausgabe.style.color = "green");
	}
}
