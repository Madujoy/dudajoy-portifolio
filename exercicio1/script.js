let num1;
let num2;
let resultado;
let parouimpar;
num1 = Number(window.prompt("digite aqui o primeiro numero"));
num2 = Number(window.prompt("digite o segundo numero"));

resultado = num1 + num2; 

parouimpar = resultado % 2; 

if( parouimpar ==0) {
     alert(" o numero " + resultado + " é par");
} else {
     alert(" o numero " + resultado + "é impar");
}

/*if(resultado > 10) {
    alert(" o numero " + resultado + " é maior do que 10 ")
} else {
    alert (" o numero " + resultado + " é menor ou igual a que 10 ");

}*/
    
     
  
