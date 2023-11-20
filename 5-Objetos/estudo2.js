//Classes e Objetos
// Definição de Objeto
// class - estrutura de dados;



class formaBolo{
	constructor(saborMassa, SaborRecheio){
		this.saborMassa = saborMassa
		this.SaborRecheio = SaborRecheio
	}

	escrever(){
		console.log(`Um delicioso bolo de  ${this.saborMassa} com recheiro de ${this.SaborRecheio}`)
	}

}

let boloFesta = new formaBolo("massa de chocolate" ,  "nutella")

boloFesta.escrever()