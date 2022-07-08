
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWYZ0123456789!@";
let novaSenha ="";

sizePassword.innerHTML =sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML=this.value;
}

function gerarSenha(){
    let pass ="";

    for(let i=0,tamanho =charset.length; i< sliderElement.value; i++ )
    {
        pass += charset.charAt(Math.floor(Math.random()*tamanho))
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}
function copyPassword(){
    alert("senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}
