function somar(){
    let num1 = Number(window.prompt("digite aqui o primeiro numero"));
    let num2 = Number(window.prompt("digite o segundo numero"));

    let resultado = num1 + num2;
    alert("o resultado é" + resultado + ".")

}

function subtrair(){
    let num1 = Number(window.prompt("digite aqui o primeiro numero"));
    let num2 = Number(window.prompt("digite aqui o segundo numero"));

    let resultado = num1 - num2;

    alert("o resultado é" + resultado + ".");
}

function multiplicar(){
    let num1 = Number(window.prompt("digite aqui o primeiro numero: "));
    let num2 = Number(window.prompt("digite aqui o segundo numero: "));

    let resultado = num1 * num2;

    alert("o resultado é " + resultado + ".")
}

function dividir(){
    let num1 = Number(window.prompt("digite aqui o primeiro numero: "));
    let num2 = Number(window.prompt("digite aqui o segundo numero:"));

    let resultado = num1 / num2;

    alert("o resultado é " + resultado + ".")
}