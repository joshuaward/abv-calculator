const button = document.querySelector('.calculate');

function abvCalculator() {
	let og = parseFloat(document.querySelector('#og').value);
	let fg = parseFloat(document.querySelector('#fg').value);
	let alcohol = document.querySelector('.alcohol_content');

	console.log(og - fg);

	if (og < fg) {
		alcohol.innerHTML = parseFloat(((og - fg) * 131.25) * -1).toFixed(3) + '%';
	} else {
		alcohol.innerHTML = parseFloat((og - fg) * 131.25).toFixed(3) + '%';
	}
}

button.addEventListener('click', abvCalculator);