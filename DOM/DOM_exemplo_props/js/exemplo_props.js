const txtNome = document.querySelector("#txtNome")
const txtEmail = document.querySelector("#txtEmail")
const labelContrato = document.querySelector("label[for='contrato']")

txtNome.value = "Mateus"
txtNome.disabled = true
console.log(labelContrato.htmlFor)
console.log(txtEmail.maxLength)
console.log(txtEmail.className)

txtEmail.readOnly = true