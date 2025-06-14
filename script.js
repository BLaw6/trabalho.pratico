function mostrarMensagem(){
    document.querySelector("#mensagem").innerHTML = "Lembre-se sempre de que você é importante. Você é amado e traz para este mundo coisas que ninguém é capaz de trazer.";
    setTimeout(() => {
        document.querySelector("#mensagem").innerHTML = "";
    }, 7000);
}