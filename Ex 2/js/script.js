function somar(){

    var  n1 = document.getElementById("n1").value;
    var  n2 = document.getElementById("n2").value;
    var result = document.getElementById("result");

    var n1 = parseInt(n1)
    var n2 = parseInt(n2)
    result.innerHTML = " " +(n1) +" mais "+(n2)+" é: "+ (n1 + n2); 

    console.log(typeof(n1));
    console.log(typeof(n2));
    console.log(result.value)



    // função prompt devolve string
    // console.log(typeof(n1)); Devolve o tipo da varíavel
    // console.log(typeof(n2));
}

function subtrair(){

    var  n1 = document.getElementById("n1").value;
    var  n2 = document.getElementById("n2").value;
    var result = document.getElementById("result");

    var n1 = parseInt(n1)
    var n2 = parseInt(n2)
    result.innerHTML = " " +(n1) +" menos "+(n2)+" é: "+ (n1 - n2); 
    // var  n1 = parseFloat(prompt("Digite o primeiro número"));
    // var  n2 = parseFloat(prompt("Digite o segundo número"));
    // var result = n1 - n2; 
    console.log(result);

}

function dividir(){
    var  n1 = document.getElementById("n1").value;
    var  n2 = document.getElementById("n2").value;
    var result = document.getElementById("result");

    var n1 = parseInt(n1)
    var n2 = parseInt(n2)

    if(n2!=0){
        result.innerHTML = " "+(n1)+" elevado ao quadrado é: " + n1*n1; 
    }
    result.innerHTML =" " +(n1) +" dividido por "+(n2)+" é: 0"; 
    // var  n1 = parseFloat(prompt("Digite o primeiro número"));
    // var  n2 = parseFloat(prompt("Digite o segundo número"));
    // var resultdiv = n1 /n2; 
    console.log(result);
}

function multiplicar(){
    var  n1 = document.getElementById("n1").value;
    var  n2 = document.getElementById("n2").value;
    var result = document.getElementById("result");

    var n1 = parseInt(n1)
    var n2 = parseInt(n2)
    result.innerHTML = " " +(n1) +" vezes "+(n2)+" é: "+ (n1*n2)
  
    // var  n1 = parseFloat(prompt("Digite o primeiro número"));
    // var  n2 = parseFloat(prompt("Digite o segundo número"));
    // var resultmult = n1 *n2; 
    console.log(result);
    
}

function quadrado(){
    var  n1 = document.getElementById("n1").value;
    var result = document.getElementById("result");

    var n1 = parseInt(n1)
    
    result.innerHTML = " "+(n1)+" elevado ao quadrado é: " + n1*n1; 
    // var  n1 = parseInt(prompt("Digite um número"));
    
    // var resultq = n1*n1; 
    console.log(result);
}

function potencia(){
    var  n1 = document.getElementById("n1").value;
    var  n2 = document.getElementById("n2").value;
    var result = document.getElementById("result");

    var n1 = parseInt(n1);
    var n2 = parseInt(n2);
    result.innerHTML="O resultado de " +(n1) +" elevado a "+(n2)+" é: "+ (Math. pow(n1, n2))
 
    console.log(result);    
}

function raiz(){
    var  n1 = document.getElementById("n1").value;
    var result = document.getElementById("result");

    var n1 = parseInt(n1)
    
    result.innerHTML ="A raiz qudrada de " + (n1)+ " é: " + (Math.sqrt(n1)); 
    // var  n1 = parseInt(prompt("Digite um número"));
    
    // var resultq = n1*n1; 
    console.log(result);
}

