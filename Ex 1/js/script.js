// function <nome da função> (){
// Colocar o nome da função no elemento EX:<p>Email</p>
// } 

// Se não colocar função funciona, mas ao carregar a página

function login(){
    var email = document.getElementById('frmemail').value;
    var senha = document.getElementById('frmsenha').value;

    console.log(email)
    console.log(senha)

    // "" e '' é quase a mesma crossOriginIsolated, podemos usar ambos

    // var email = document.getElementById("frmemail").value;
    // var senha = document.getElementById("frmsenha").value;

    if(email=="matheus@gmail.com" && senha== "1234"){
         alert("Login realizado com sucesso");
    }

    else{
        alert("E-mail ou senha incorretos, tente novamente!");
    }

    
   
}

function alterarCor(){
    var InputTrocar = document.getElementById("input-trocar").value;
    var Body = document.querySelector('body');
    Body.style.background = InputTrocar;
 }
//  Manipular o DOM
//  Document Object Model