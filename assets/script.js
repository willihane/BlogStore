//  *Validação de formulário e Mapa com zoom*

 // Declaração de variaveis: 
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let mapa = document.querySelector("#mapa")

let emailOk = false
let assuntoOk = false

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (email.value.match(regex))  {
    txtEmail.innerHTML = "E-mail válido"
    txtEmail.style.color = "Green"
    emailOk = true

} else {
    txtEmail.innerHTML = "E-mail inválido"
    txtEmail.style.color = "Red"
    emailOk = false
            }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 500) {
        txtAssunto.innerHTML = "Digite no máximo 500 caracteres."
        txtAssunto.style.color = "Red" 
        txtAssunto.style.display = "block"
        assuntoOk = false
    
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }

}

function enviar() {
    if(emailOk == true && assuntoOk == true) {
        alert ("Formulário enviado com sucesso!")
    } else {
        alert ("Por favor, preencha o formulário corretamente antes de enviar!")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal () {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}

