/* 
1- Definir una variable comptador de tasques.
2- Controlar que el formulari estigui informat. En cas contrari, es mostra una alerta.
3- S'ha de crear un element 'div' amb el mètode 'createElement'.
4- Afegir al div create la classe css: tasca-parell o tasca-imparell, segons el valor del comptador. S'ha de fer servir el condicional ternari.
5- S'ha de crear un element 'h3', amb el mètode 'createElement', el text sempre serà el mateix: 'Tasca X', on x serà el número del comptador.
6- S'ha de crear un element 'p', amb el mètode 'createElement', mostrarà la informació introduida a l'input per l'usuari.
7- Afegir els elements 'h3' i 'p' a l'element div a partir del mètode 'appendChild'.
8- Afegir l'element div dins del contenidor 'tasques-contanier' a partir del mètode 'insertAdjacentElement'.
*/

const botons = document.querySelectorAll("button");

let comptadorTasques = 0;
let tasquesContainer = document.querySelector(".tasques-contanier");
let butoAfegir = botons[0];
let butoBorrar = botons[1];
let pInput = document.getElementById("novaTasca");

butoAfegir.addEventListener('click', function() {
    let text = pInput.value;

    if (text === "") {
        alert("No has escrit la nova tasca")
    } else {
        comptadorTasques += 1;

        let dev = document.createElement("div");
        tasquesContainer.appendChild(dev);
        comptadorTasques % 2 == 0 ? dev.classList.add("tasca-parell") : dev.classList.add("tasca-imparell");

        let h3 = document.createElement("h3");
        h3.textContent = "Tasca " + comptadorTasques;
        dev.appendChild(h3);

        let p = document.createElement("p");
        p.textContent = text;
        dev.appendChild(p)
    }
});

butoBorrar.addEventListener('click', function() {
    let tasquesEsborrar = document.querySelector(".tasques-contanier");
    tasquesEsborrar.innerHTML = "";
    comptadorTasques = 0;
});