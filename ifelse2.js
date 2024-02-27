//<!--a tag abaixo é ultilizada para verificar o login-->
function verificarLogin(){

    //<!--a tag abaixo é uma declaração da variavél login-->
    let txtLogin = document.getElementById("txtLogin");

    //<!--a tag abaixo é uma declaração da variavél senha-->
    let txtSenha = document.getElementById("txtSenha");

    //<!--a tag a baixo é uma variavél que etá sendo declarada o "teste" é o valor que está sendo atribuído á variavél -->
    let login = "teste";

    //<!--a tag a baixo é uma variavél que etá sendo declarada o "teste" é o valor que está sendo atribuído á variavél-->
    let senha = "teste";

    //<!--a tg abaixo é um bloco de codigos de uma condição especifica-->
    if (txtLogin.value== login && txtSenha.value == senha){
        console.log("Logado com sucesso!");

        //<!-- a tag abaixo a linha de código registrará uma mensagem no console do navegador informando ao usuário que 
        //o login ou a senha estão incorretos e solicitando que ele tente novamente.  -->
    } else {
        console.log("Login ou senha incorretos! Digite e tente novamente.");
    }
}