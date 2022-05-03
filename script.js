let Usuário = document.querySelector(".Usuário")
let Senha = document.querySelector(".Senha")

const pessoasobj = []

let btnlogin = document.getElementById("login-button")
btnlogin.addEventListener("click" , resultados)

function resultados (value){
value.preventDefault()

let dadosDaPessoa = {
    Usuário: Usuário.value,
    Senha: Senha.value,
}

if(Usuário.value == ""){
    gerarModal("digite seu Usuário")
    exibirModal()
    return "login falhou"
}

if(Senha.value == ""){
    gerarModal("digite seu Senha")
    exibirModal()
    return "falhou"
}

if(Usuário.value !== "" && Senha.value !== ""){
    gerarModal("os dois campos foram prenchidos com sucesso")
    exibirModal()
    return "login"
}

}

const divConteinerModal = document.getElementById("divConteinerModal");

function gerarModal(mensagem){
    divConteinerModal.innerHTML = ""
    const novobtn = document.createElement("button")
    novobtn.classList = "botaoDeFechar"
    novobtn.id = "btnFechar"
    novobtn.innerText = "X"
    const novoP = document.createElement("p")
    novoP.classList = "msmDoMoldal"
    novoP.innerText = mensagem

    divConteinerModal.appendChild(novobtn);
    divConteinerModal.appendChild(novoP);
}

function exibirModal() {
    divConteinerModal.classList.remove("esconder");
    divConteinerModal.classList.add("exibir");
    divConteinerModal.addEventListener("click", esconderModal)
}

function esconderModal (){
    divConteinerModal.classList.remove("exibir");
    divConteinerModal.innerHTML = ""
    divConteinerModal.classList.add("esconder");
}