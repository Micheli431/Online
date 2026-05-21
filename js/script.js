function verificarSenha() {
    let senha = document.getElementById("senha").value;
    if (senha === "0713") {
        window.location.href = "final_secreto.html";
    } else {
        document.getElementById("error").innerText = "ACESSO NEGADO";
    }
}