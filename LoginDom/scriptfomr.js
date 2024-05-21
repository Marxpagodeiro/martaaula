form= document.querySelector(".form")
const usuario_alert = document.getElementById("alertaus")
const senha_alert= document.getElementById("alertas")
usuario_alert.style.display = "none";
senha_alert.style.display = "none";

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validaEntrada();
})
const usuario = document.getElementsById("usuario");
usuario=usuario.toLowerCase();
const senha= document.getElementsById("senha");
senha=senha.toLowerCase();

function Login() {
    usuarioValor = usuario.value.trim();
    senhaValor = senha.value.trim()
    if(usuarioValor === "" ){ 
        usuario_alert.style.display = "";
    } else { 
        usuario_alert.style.display = "none";
    }
    if(senhaValor === "" ){ 
        senha_alert.style.display = "";
    } else { 
        senha_alert.style.display = "none";
    }
         
    
  }