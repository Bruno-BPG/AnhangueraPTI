let Usuário = document.querySelector(".Usuário")
let Senha = document.querySelector(".Senha")
let btnlogin = document.getElementById("login-button")
btnlogin.addEventListener("click" , resultados)
function resultados (value){
value.preventDefault()
let dadosDaPessoa = {
    Usuário: Usuário.value,
    Senha: Senha.value,
}
if(Usuário.value == ""){
    alert("digite seu Usuário")
    return "login falhou"
}
if(Senha.value == ""){
    alert("digite sua Senha")
    return "falhou"
}
if(Usuário.value !== "" && Senha.value !== ""){
    alert("os dois campos foram prenchidos com sucesso")
    return "login"
}}
