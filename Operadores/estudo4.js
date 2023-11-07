// Operadores Lógicos - serve para fazer perguntas 
// && (And lógico)- quando se faz uma pergunta composta, ex: quando duas coisas precisam ser verdades para ser realizado.
// || (or lógico)- quando ou uma ou outra coisa precisa ser verdade
// ! (not lógico) - de negação, quando for diferente daquilo que está sendo falado para poder ser verdade

console.log("------OPERADOR LÓGICO AND &&------");

let idade = 18
let vistoVerificado = true
let resulttt = (idade >= 18) && (vistoVerificado === true)
console.log(  "O usuario está liberado? " +  resulttt );


let moedasColetadas = 100
let itemmm = "estrela"
let resultt = (moedasColetadas >= 100) && (itemmm ==="estrela")
console.log("A quantidade de estrela está correta? " + resultt);


console.log("-----OPERADOR LÓGICO OR ||----- "); 
//NOSSO BONECO SÓ PODE SAIR SE TIVER SEM CHUVA OU COM GUARDA CHUVA 

let tempo = "chuva"
let itemm = "Vassoura"
let podeSair = (tempo !== "chuva") || (itemm === "guarda-chuva")
console.log("Nosso personagem pode sair? " + podeSair); 

console.log("-----OPERADOR LÓGICO NOT !-----" );
// NEGA UMA AFIRMAÇÃO, quando quer perguntar se é diferente daquilo que está sendo mostrado

let temmpo = "chuva"
let result = tempo !== "chuva"
console.log("Esse resultado é diferente de chuva? " + result);

let temmmpo = "chuva"
let horario = 8
let resultado = (tempo !== "chuva") && (horario > 6)
console.log("O horario é maior? " + resultado);



