function contar(){
    let mostraHTML = document.getElementById("mostraHTML");

    let contador = 1;
    
    while (contador <=10){
        mostraHTML.innerHTML += `${contador} &#128570;`;
        contador ++;
    }

    mostraHTML.innerHTML += `${contador} &#128568;`;

} 

