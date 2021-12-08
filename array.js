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

function ordenar(){
    armazenar();
    let aux;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i+1] < numeros[i]){
            aux = numeros[i];
            numeros[i] = numeros[i+1];
            numeros[i+1] = aux;
                if (numeros[i] < numeros[i-1]){
    	            aux = numeros[i-1];
    	            numeros[i-1] = numeros[i];
    	            numeros[i] = aux;
                        if (numeros[i-1] < numeros[i-2]){
                            aux = numeros[i-2];
                            numeros[i-2] = numeros[i-1];
                            numeros[i-1] = aux;
                        }
                }
        }
    }
    console.log(numeros);
    document.getElementById("crescente").innerHTML = numeros;
}
