
// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

let nomeHeroi = "Catarina"; 
let ExpHeroi = 2000;  

if (ExpHeroi <= 1000) {
	console.log("O herói de nome " + nomeHeroi + " está no nível Ferro");
} else if (ExpHeroi >= 1001 && ExpHeroi <= 2000) { // Corrija as condições
	console.log("O herói de nome " + nomeHeroi + " está no nível Bronze");
} else if (ExpHeroi >= 2001 && ExpHeroi <= 5000) {
	console.log("O herói de nome " + nomeHeroi + " está no nível Prata");
} else if (ExpHeroi >= 5001 && ExpHeroi <= 7000) {
	console.log("O herói de nome " + nomeHeroi + " está no nível Ouro");
} else if (ExpHeroi >= 7001 && ExpHeroi <= 8000) {
	console.log("O herói de nome " + nomeHeroi + " está no nível Platina");
} else if (ExpHeroi >= 8001 && ExpHeroi <= 9000) {
	console.log("O herói de nome " + nomeHeroi + " está no nível Ascendente");
} else if (ExpHeroi >= 9001 && ExpHeroi <= 10000) {
	console.log("O herói de nome " + nomeHeroi + " está no nível Imortal");
} else {
	console.log("O herói de nome " + nomeHeroi + " está no nível Radiante");
}
