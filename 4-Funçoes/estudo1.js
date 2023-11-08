//  FUNÇÃO são açoes e deve-se chamar apenas com verbos  
// AÇÃO (FAZER UMA TORRADA) - ENTRADA (PÃO) - SAÍDA (TORRADA FEITA)


// torrar ()

// function torrar() {
// 	console.log("torrando pão");
// 	injetarPao()
// }

// function injetarPao() {
// 	console.log("preparando para injetar pão . . .")
// 	console.log("Finalizado!");
// }

// função que pega todos os dados
main() //função MAIN é uma função que tem responsabilidae de chamar várias outras funçoes

function main(){
	getData()
	checkValues()
	sendToDataBase()
}

function getData(){
	console.log("pegando os dados do usuario...");
	if (1 < 3) {
		console.log("número não encontrado");
		console.log("número não encontrado");
		console.log("número não encontrado");

	}
}

function checkValues(){
	console.log("Validando dados...");
}

function sendToDataBase(){
	console.log("cadastrando dados");
}

/////

function enviarDados(){
	let nomeBanco = "banco-de-dados"
	console.log("salvando dados em : " + nomeBanco)
}

//////

torrar ("pao de forma" ,  "catarina" , "cartão") // <- atribuiu um valor para o parametro e geralmente se passa um parametro qauando uma mesma função tenha resultados diferentes
torrar ("pao integral" , "natalia" , "dinheiro") 

function torrar (pao, nome, pagamento){ 
	console.log("torrada feita com " + pao ,  " e ela é um pedido de: " + nome ,"...pagamendo foi em: " + pagamento )
	
} 

