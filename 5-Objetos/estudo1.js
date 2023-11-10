// ESTRUTURAS DE DADOS JSON (Javascript Object Notation)
// O QUE É JSON: - AGRUPAMENTO DE DADOS ou ESTRUTURA DE DADOS
//maneira de tranferir dados de forma agrupada. 
// Objetos (json):  simple e composto por chave e valor com o objetivo de transferir dados. 


console.log("===EXEMPLOS SEM JSON===");

let nome ="Natalia"
let age = 28
let products = ["Fone Bluetooh" , "Celular" , "Tablet"]
let productsValues =  [150.00 , 1599.99, 1299.90]

generateInvoice(nome,  products, productsValues, age)

function generateInvoice(nome, products, productsValues, age){
	console.log("O comprador é: " + nome);
	console.log("A idade  é: " + age);
	console.log("- - - - - - - - -");
    console.log("O produto é " + products[0]);
	console.log("O valor é " + productsValues[0]);
}


console.log("===COM JSON===");


let invoice = {
	nome: "catarina",
	age: 25,
	produtos: {
		0: ["fone" ,  150.00],
		1: ["Celular" , 1599.99],
		2: ["Tablet" , 1250.90]
	},
}

generateInvoice(invoice)

function generateInvoice(invoice){
	console.log(' comprador ${invoice.nome}');
	console.log('idade  é: ${invoice.age} ');
	console.log("- - - - - - - - -");
    console.log('produto &{invoice.produto}');
}
