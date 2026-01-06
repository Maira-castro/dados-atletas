class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    //calcular a categoria do atleta
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil"
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil"
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário"
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto"
        } else {
            return "Sem categoria"
        }
    }
    //calcular o IMC do atleta
    calculaIMC() {
        return this.peso / (this.altura * this.altura)
    }
    //calcular a média válida do atleta.
    calculaMediaValida() {
        const notasOrdenadas = [...this.notas].sort((a, b) => a - b);
        const notasValidas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);

        const soma = notasValidas.reduce((total, nota) => total + nota, 0);
        return soma / notasValidas.length;
    }
    //retorna o nome do atleta
    obtemNomeAtleta() {
        return this.nome
    }
    //retorna a idade do atleta
    obtemIdadeAtleta() {
        return this.idade
    }
    //retorna o peso do atleta
    obtemPesoAtleta() {
        return this.peso
    }
    //retorna as notas do atleta
    obtemNotasAtleta() {
        return this.notas
    }
    //retorna a altura do atleta
    obtemAlturaAtleta() {
        return this.altura
    }
    //retorna a categoria do atleta
    obtemCategoria() {
        return this.calculaCategoria()
    }
    //retorna o IMC do atleta
    obtemIMC() {
        return this.calculaIMC()
    }
    //retorna a média válida do atleta
    obtemMediaValida() {
        return this.calculaMediaValida()
    }
}

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(`
Nome: ${atleta.obtemNomeAtleta()}
Idade: ${atleta.obtemIdadeAtleta()}
Peso: ${atleta.obtemPesoAtleta()}
Altura: ${atleta.obtemAlturaAtleta()}
Notas: ${atleta.obtemNotasAtleta()}
Categoria: ${atleta.obtemCategoria()}
IMC: ${atleta.obtemIMC()}
Média válida: ${atleta.obtemMediaValida()}`)