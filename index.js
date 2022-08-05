//alert(nome,email,senha, senhaconf).value
function validate() {
  const nome = document.getElementById('inome')
  , email = document.getElementById("iemail")
  , senha = document.getElementById("isenha")
  , senhaconf = document.getElementById("isenhaconf")

  if (senha.value != senhaconf.value) {
    senhaconf.setCustomValidity("Senhas diferentes!")
  } else {
    senhaconf.setCustomValidity("")
    }
}

