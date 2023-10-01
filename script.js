document.addEventListener("DOMContentLoaded", (event) => {
    loadFact()
});

async function loadFact(){
    const url = 'https://catfact.ninja/fact';
const options = {
	method: 'GET',
};

try {
	const response = await fetch(url, options);
	const result = await response.json();

    var miElemento = document.getElementById("fact");
    miElemento.innerHTML = result.fact;
    
} catch (error) {
	console.error(error);
}
}