function soma(){

    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);

    let soma_numero = numero_um + numero_dois;
    
    document.getElementById('resultado').textContent = 'resultado: ' + soma_numero;
    
}

function subtrai(){

    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);

    let soma_numero = numero_um - numero_dois;
    
    document.getElementById('resultado').textContent = 'resultado: ' + soma_numero;
    
}
function multiplica(){

    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);

    let soma_numero = numero_um * numero_dois;
    
    document.getElementById('resultado').textContent = 'resultado: ' + soma_numero;
    
}


function divide(){

    let numero_um = parseFloat(document.getElementById('primeiro_numero').value);
    let numero_dois = parseFloat(document.getElementById('segundo_numero').value);

if(numero_dois == 0){
alert("esse numero não pode ser dividido");
return;
}

    let soma_numero = numero_um / numero_dois;
    
    document.getElementById('resultado').textContent = 'resultado: ' + soma_numero;

}

function compara(){

    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);
    if(numero_um > numero_dois){
        document.getElementById('resultado').textContent = "o maior é " + numero_um
        return;
    }else if (numero_um<numero_dois){
        document.getElementById('resultado').textContent = "o maior é "  + numero_dois
        return;
 }else{
        document.getElementById('resultado').textContent = "são iguais"
    }
    

    
}

