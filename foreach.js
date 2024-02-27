//a tag abaixo determina o tempo 
var tempoFilme = 60; // em segundos

// a tag abaixo determina o inicio do tempo
var  inicioFilme = 0; // em segundos

// a tag abaixo continuará a ser executada enquanto o  valor "t" for menor que "tempoFilme"
for (var t = 0; t < tempoFilme; t++) {

    // a tag abaixo é usado para agendar a execução de uma função para ocorrer após um determinado período de tempo.
    setTimeout(function() {

        //a tag abaixo é usado para limpar o console do navegador
        console.clear();

        // a tag abaixo é ultilizada para exibir valores da variáveis
        console.log("Assistindo filme 60 segundos... Ainda faltam [" + (tempoFilme - inicioFilme) + "] segundos");
        inicioFilme++;
    } , t*1000);
}