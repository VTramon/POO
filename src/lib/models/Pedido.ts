import { ItemPedido } from '@/lib/models/ItemPedido';


export class Pedido {
    id: number
    mesa: number
    list_itens: ItemPedido[]
    data_criacao: Date
    data_conclusao?: Date

    constructor(id: number, mesa: number) {
        this.id = id
        this.mesa = mesa
        this.list_itens = []
        this.data_criacao = new Date()
    }


    /**
     * addItem
     */
    public addItem(item: ItemPedido) {
        this.list_itens?.push(item)
    }
}