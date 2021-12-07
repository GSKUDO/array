let first;
let second;
let third;
let fourth;

var numeros = [];
var reorg = [];

function armazenar(){
    first = document.getElementById("primeiro").value;
    second = document.getElementById("segundo").value;
    third = document.getElementById("terceiro").value;
    fourth = document.getElementById("quarto").value;
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(fourth);

    numeros = [ first, second, third, fourth];
    console.log(numeros);
    document.getElementById("armario").innerHTML = numeros;
}

function reorganizar(){
    armazenar();
    reorg = [ numeros[3], numeros[2], numeros[1], numeros[0]];
    console.log(reorg);
    document.getElementById("contrario").innerHTML = reorg;
}

function ordenar() {
    armazenar();
    
}