// //Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)


console.log("----Calculadora de partidas Rankeadas----");

let NomeJogador = "Kiki";

let resultadoRankeadas = calcularRank(100, 10);

function calcularRank(vitorias, derrotas) {
  let saldoRankeadas = vitorias - derrotas;
  let resultado;

  if (vitorias < 10) {
    resultado = "Ferro";
  } else if (vitorias >= 10 && vitorias <= 20) {
    resultado = "Bronze";
  } else if (vitorias > 20 && vitorias <= 50) {
    resultado = "Prata";
  } else if (vitorias > 50 && vitorias <= 80) {
    resultado = "Ouro";
  } else if (vitorias > 80 && vitorias <= 90) {
    resultado = "Diamante";
  } else if (vitorias > 90 && vitorias <= 100) {
    resultado = "Lendário";
  } else {
    resultado = "Imortal";
  }

  return {
    saldoRankeadas: saldoRankeadas,
    resultado: resultado
  };
}

console.log("O jogador " + NomeJogador, "tem o saldo de " + resultadoRankeadas.saldoRankeadas, "está no nível " + resultadoRankeadas.resultado);



