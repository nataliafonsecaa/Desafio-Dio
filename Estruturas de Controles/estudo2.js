// estrutura de decisão
// switch/casa/break/default

console.log("--- switch --- case --- break --- default ---");

let fruta = "morango"

switch (fruta){
	case "laranja":
		console.log("suco de laranja")
		break

	case "banana":
	case "morango":
		console.log("vitamina")
		break

	case "maça":
		console.log("suco de maçã")
		break

	default:  //uma resposta padrão 
		console.log("suco generico")
		break
}