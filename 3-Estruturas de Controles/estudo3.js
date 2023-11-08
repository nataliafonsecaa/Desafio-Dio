//laços de repetição
// for/while/do-while

// for é utilizado quando o usuario tem que fazer alguma verificação ou uma coisa continuamente até que alguma coisa seja verdade

// for (let contador = 0; contador < 4; contador++){
// 	console.log(contador);
// 	console.log("aumentando o contador...");
// }


let pontosVida = 0

for (let i = 1; i <= 11 ;  i++){
	pontosVida += 1
	console.log("tomou poção mágica... " + i);
}

console.log(pontosVida + " Totais ");

console.log("===WHILE==="); 

let contador = 0
while (contador <3 ) {
	console.log("olá");
	contador++
}
console.log("---------do while-------------");
do {
	console.log("tchau");
	contador++
} while (contador < 3 )