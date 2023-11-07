//Operadores de Comparação ou Relacionais //
console.log("Operadores de Igual e Diferente");

// = é atribução
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo
// !== perguta se é diferente [?]



// gaurdar o valor em uma variável de resultado TRUE?FALSE
let marca = "Apple"
let resultado = marca !== "Sansung"
console.log(resultado)

// let cpfBloq = "123.445.222-45"
// let cpfUser ="222.111.222-09"
// let ehcpfBloq =  cpfUser === cpfBloq
// console.log("O usuário está barrado para embarque ? " + ehcpfBloq );

let cpfPermitido = "222.555.333-01"
let cpfUser = "222.555.333-01"
let ehBloq = cpfUser !== cpfPermitido
console.log("é um usuario invalido? " + ehBloq);


// Operadores Maior / Menor

// >= é usado para comparar, por exemplo: o sistema pergunta se o usuario é maior ou igual a 18 anos (idadeusuario >= idadeMinima =  true)

// let idadeMinima = 18
// let idadeUser = 18 
// let idadeValida = idadeUser >= idadeMinima

// console.log(idadeValida);

let idadeCorte = 50
let idadeUser = 50
let resultehTerceiraIdade = idadeCorte < idadeUser
console.log("o resultado é " + resultehTerceiraIdade);


let texto =  "natalia"
console.log(texto === "natalia"); // quando for comparar texto tomar cuidado na hora da digitaçãoo, sempre verificar se está escrito igual ao que foi declarado na variável. 
