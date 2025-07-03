let nota1 = Number (window.prompt ("digite aqui a primeira nota"));
let nota2 = Number (window.prompt ("digite aqui a segunda nota"));
let nota3 = Number (window.prompt ("digite aqui a terceira nota")); 
let pontosfaltando; 

let total= (nota1 + nota2 + nota3)/3;

alura = "alura"

  let resultado = nota1 + nota2 + nota3;
    alert("a média é" + resultado + ".")

if(total >= 60){
    alert("voce atingiu a média" + total)
    alert("aprovado")
} else {
    pontosfaltando = 60 - total 
    alert(nome + "reprovado , faltam" + pontosfaltando + "pontos, estuda ai: ")
}
