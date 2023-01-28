class Atleta {
  constructor(nome, idade, peso, altura, notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }
  obtemNomeAtleta(){
    return `Nome: ${this.nome}`
  }

  obtemIdadeAtleta(){
    return `Idade: ${this.idade}`
  }

  obtemPesoAtleta(){
    return `Peso: ${this.peso}`
  }

  obtemNotasAtleta(){
    return `Notas: ${this.notas}`
  }

  obtemCategoria(){
     if(this.idade >= 9 && this.idade <=11){
      return `Categoria: Infantil`
    }
     if(this.idade >= 12 && this.idade <=13){
      return `Categoria: Juvenil`
    }
     if(this.idade >= 14 && this.idade <=15){
      return `Categoria: Intermediário`
    }
    if(this.idade >= 16 && this.idade <=30){
      return `Categoria: Adulto`
    }
     if(this.idade > 30){
      return `Categoria: Sem Categoria`
    }
  }

  obtemImc(){
    let imc = this.peso / (this.altura*this.altura)
    return `IMC: ${imc.toFixed(2)}`
  }

  obtemMediaValida(){
    let notasOrganizadas = this.notas.sort(function(a,b){
      return a - b
    })
    
    let notasValidas = notasOrganizadas.slice(1,-1)
    
    let soma = notasValidas.reduce(function(total,atual){
      return total + atual
    },0)

    let media = (soma / notasValidas.length).toFixed(2)

    return `Média: ${media}`
  }

}

// Declara o atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemImc());
console.log(atleta.obtemMediaValida())
