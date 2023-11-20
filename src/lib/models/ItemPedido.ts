import internal from "stream"


export class ItemPedido {
    id: number
    produto: string
    quantidade: number
    detalhes: string

    constructor(id: number,
        produto: string,
        quantidade: number,
        detalhes: string) {
        this.id = id
        this.produto = produto
        this.quantidade = quantidade
        this.detalhes = detalhes
    }
}