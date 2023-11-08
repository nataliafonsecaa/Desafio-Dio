//Condicionais (if, else if, else)

console.log("----CONDICIONAIS -IF----");
 

let temOvos = true
let itensComprados = " "

if (temOvos) {
	itensComprados = "leite"

}
console.log("item comprado: " + itensComprados);

console.log("----CONDICIONAIS else----");

let tenho = false
let comprados = ""

if (tenho){
	comprados = "leite"
}
else{
	console.log("passou na sessão de congelados..." )
	comprados ="Lasanha"
}
console.log("itens Comprados: " + comprados);


console.log("-----CONDICIONAIS else if-----");

let nivelFome = 3

if (nivelFome === 1) {
	console.log("Pouca Fome");
}else if (nivelFome ===2) {
	console.log("Muita Fome");
} else {
	console.log("Você está FAMINTO ");
}
