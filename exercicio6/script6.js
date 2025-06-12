//cria a variavel que conta o cliques
let cliques = 0 
//acessa a parte de texto que vai ser modificada no html
let mostraHTML = document.getElementById("mostraHTML"); 

//cria a funçao para contar o clique
function contador (){ 
    //aumenta em 1 o valor da variavel
    cliques ++;
    //altera o valor o html para mostrar a variavel cliques
    mostraHTML.innerHTML = `<p> Numero de cliques: ${cliques} </p>`;
} 
function zerar() {
    cliques =0; 
    mostraHTML.innerHTML = `<p> Numero de cliques: ${cliques} </p>`;
}