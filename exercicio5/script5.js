function calcular() {
     num1 = Number(window.prompt("digite aqui o primeiro numero"));
     num2 = Number(window.prompt("digite o segundo numero"));
let num1;
let num2;
let resultado;
let maioroumenor;


resultado = num1 + num2; 

maioroumenor = resultado % 2; 

if( maioroumenor ==0) {
     alert(" o numero " + num1 + " é maior");
} else {
     alert(" o numero " + num2 + "é maior");
     alert(" o numero " + num1 + "é menor")
}
}
