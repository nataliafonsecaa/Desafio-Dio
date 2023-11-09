// Funçoes com retorno
// O retorno de uma função pode ser guardado em uma variável.
// Função só pode retormar 1 (um) valor ou 1 (um) objeto por vez.
//

 let resultado = soma(5 , 5)

 console.log("o resultado dessa função é: " + resultado);

function soma (numA, numB){
	let somatorio = numA + numB
	return somatorio
}

console.log("------------------------------");

let  userName = getFirstname("Rita Catarina")
console.log("Seja bem vindo " + userName);

function getFirstname (name, splitChar){
	let firstName = name.split (splitChar)[0]
	return firstName
}
