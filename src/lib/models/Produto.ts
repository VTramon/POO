

export class Produto {
    id: number
    tipo: string
    nome: string
    preco: number
    descricao: string

    constructor(id: number, tipo: string,
        nome: string,
        preco: number,
        descricao: string
    ) {
        this.id = id
        this.tipo = tipo
        this.nome = nome
        this.preco = preco
        this.descricao = descricao
    }
}