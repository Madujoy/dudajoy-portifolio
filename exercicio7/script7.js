//acessa a parte de texto que vai ser modificada no html 
let mostraHTML = document.getElementById("mostraHTML");

let numero = 0;

function aleatorio (){
    
    numero= parseInt (Math.random() * 101);

    mostraHTML.innerHTML += `<p>pensei no numero ${numero}!</p>`;
}
function zerar(){ 
    
    mostraHTML.innerHTML = null;

}
