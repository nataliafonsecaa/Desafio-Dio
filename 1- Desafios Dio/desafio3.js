class Heroi {
	constructor(nome, idade, tipo) {
	  this.nome = nome;
	  this.idade = idade;
	  this.tipo = tipo;
	}
  
	atacar() {
	  const ataques = {
		mago: 'magia',
		guerreiro: 'espada',
		monge: 'artes marciais',
		ninja: 'shuriken',
	  };
  
	  const ataque = ataques[this.tipo] || 'realizou um ataque';
	  console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
	}
  }
  

  const heroi1 = new Heroi('Aragorn', 30, 'guerreiro');
 
  
  heroi1.atacar();
