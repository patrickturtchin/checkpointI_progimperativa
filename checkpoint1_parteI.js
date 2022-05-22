// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o 
// pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de 
// comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo 
// informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".




function selectPrato ( opcao ) {

    if ( opcao == 1 || opcao == 2 || opcao == 3 || opcao == 4 || opcao == 5 ) {
        return opcao
    } else {
        return false
    }
}




function tempoPrato ( opcao ) {

    if ( opcao == 1 ) {
        return 10
    } else if ( opcao == 2 || opcao == 5){
        return 8
    } else if ( opcao == 3 ) {
        return 15
    } else if ( opcao == 4 ) {
        return 12
    } else {
        return false
    }

}


function microondas ( prato , tempo ) {



    if ( ( selectPrato ( prato ) ) && (  tempo == tempoPrato ( prato ) ) )  {
        return "Prato pronto, bom apetite!!!"  
    } else if ( ( selectPrato ( prato ) ) && ( tempo >= 3 * tempoPrato ( prato ) )) {
        return "Kabum"; 
    } else if ( ( selectPrato ( prato ) ) && ( tempo >= 2 * tempoPrato ( prato ) )) {
        return "Comida queimou"; 
    } else if ( ( selectPrato ( prato ) ) && ( tempo > tempoPrato ( prato ) )) {
        return "Prato pronto (pode ter queimado um pouco), bom apetite!!!" 
    } else if ( ( selectPrato ( prato ) ) && ( tempo == 0) ) {
        return "informe o tempo, não vai funcionar assim"
    } else if ( ( selectPrato ( prato ) ) && ( tempo < tempoPrato ( prato ))) {
        return "tempo insuficiente"; 
    } else if ( !( selectPrato ( prato ) ) && ( tempo == 0) ) {
        return "prato inexistente. informe o tempo, não vai funcionar assim"    
    } else {
        return "prato inexistente. vai funcionar, mas pode queimar (não sabemos o que você quer preparar)"
    }
}

console.log ( microondas ( 5 , 2))
