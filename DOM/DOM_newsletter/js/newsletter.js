const txtEmail = document.getElementById("txtEmail")
const msgFeedback = document.getElementById("newsletterFeedback")


function cadastrarEmail(){
    let email = txtEmail.value
    console.log("cadastrarEmail")
    newsletterFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso`
}