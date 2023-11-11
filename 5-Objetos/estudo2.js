//Classes e Objetos
// Definição de Objeto


class formaBolo{
	constructor(saborMassa, SaborRecheio){
		this.saborMassa = saborMassa
		this.SaborRecheio = SaborRecheio
	}
}

let boloFesta = new formaBolo("massa de chocolate" ,  "recheio de nutella")

console.log(boloFesta);