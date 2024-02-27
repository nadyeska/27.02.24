//a tag abaixo é ultilizada para sortear os nomes
const sortear = () =>{

// a tag abaixo é ultilizada para para selecionar os nomes
    let nomes = ["ANA CLARA","BERNARDO","CALEBE","EDUARDA","FELIPE","GABRIEL","GBRIELLY","GIOVANI","GUILHERME","ISABELLA","ISADORA","JHENIFFER","JOAO PEDRO","LAURA GABRIELLA"
,"LORRAINY VITORIA","MARIANA","MIGUEL","NADYESKA","SABRINA","VITORIA EMYLLI"];
 

// a tag abaixo é ultilizada para selecionar um elemento do html
let h1Nome = document.getElementById("nome");


//a tag abaixo é para achar o numero
let achouNumero = false;

// a tag abaixo é para sortear numero
let numeroSorteado;

//código gera números aleatórios até encontrar um que seja menor do que o comprimento do "nomes", atribuindo "true" à variável achouNumero quando um número válido é encontrado.
while (achouNumero == false) {
   numeroSorteado = Math.floor(Math.random() * 100);
   if (numeroSorteado < nomes.length) {
       achouNumero = true;
   }
}

//tag abaixo é usada para iniciar a estrutura de seleção. Ela indica que múltiplas condições serão testadas.
switch (numeroSorteado) {
     case 0:
           h1Nome.innerText = nomes[numeroSorteado];
           break;
     case 1:
           h1Nome.innerText = nomes[numeroSorteado];
           break; 
     case 2:
           h1Nome.innerText = nomes[numeroSorteado];
           break;
     case 3:
           h1Nome.innerText = nomes[numeroSortead];
           break; 
     case 4:
           h1Nome.innerText = nomes[numeroSorteado];
           break;
     case 5:
           h1Nome.innerText = nomes[numeroSorteado];
           break;
     case 6:
           h1Nome.innerText = nomes[numeroSorteado];
           break;  
     case 7:
           h1Nome.innerText = nomes[numeroSorteado];
           break;
     case 8:
           h1Nome.innerText = nomes[numeroSortead];
           break;
     case 9:
           h1Nome.innerText = nomes[numeroSorteado];
           break; 
     case 10:
           h1Nome.innerText = nomes[numeroSorteado];
           break; 
     case 11:
           h1Nome.innerText = nomes[numeroSorteado];
           break;
     case 12:
           h1Nome.innerText = nomes[numeroSorteado];
           break;
     case 13:
           h1Nome.innerText = nomes[numeroSorteado];
           break;
     case 14:
           h1Nome.innerText = nomes[numeroSorteado];
           break; 
     case 15:
           h1Nome.innerText = nomes[numeroSorteado];
           break;
     case 16:
           h1Nome.innerText = nomes[numeroSorteado];
           break;
     case 17:
           h1Nome.innerText = nomes[numeroSorteado];
           break;
     case 18:
           h1Nome.innerText = nomes[numeroSorteado];
           break;
     case 18:
           h1Nome.innerText = nomes[numeroSorteado];
           break;
     case 19:
           h1Nome.innerText = nomes[numeroSorteado];

    //tag abaixoé usada para sair do switch após a execução do bloco de código associado a um case.
           break;

    // a tag abaixo, se nenhum dos casos case corresponder ao valor de numeroSorteado, o bloco de código associado ao default será executado. 
    default:
           h1Nome.innerText = "Ops! Nome não consta na lista.";
           break;
   }
   h1Nome.innerText += "O número sorteado foi :" + numeroSorteado;
}