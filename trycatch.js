
// a tag abaixo declara uma constante de "somente leitura", ou seja, uma vez que o valor é atribuído, ele não pode ser alterado.
const variavel1 = "valor somente leitura";

//a tag abaixo é declração da variavél
var variavel2 = "valor editável";

//a tag abaixo é um bloco de codigo que gera uma exceção
try {
    variavel1 = "valor não permitido";
    console.log("A variavel1 foi altrada para: ", variavel1);
// a tag abaixo é onde você pode lidar com o erro de uma maneira mais controlada,  como exibindo uma mensagem de erro.
} catch (e) {
    console.error("Ops! Ocorreu o erro", e);
}

//a tag abaixo é um bloco de codigo que gera uma exceção
try {
    variavel2 = "valor permitido";
    console.log("A variavel foi alterada para:", variavel2);

// a tag abaixo é onde você pode lidar com o erro de uma maneira mais controlada,  como exibindo uma mensagem de erro
} catch (e) {
    console.error("Ops! Ocorreu:", e);
}