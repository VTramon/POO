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


    public getId(){
        return this.id
    }

    
    public setId(){
        return this.id
    }


    public getMesa(){
        return this.mesa
    }

    
    public setMesa(mesa: number){
        this.mesa = mesa
    }


    public getList_itens(){
        return this.list_itens
    }

    
    public setList_itens(list_itens:ItemPedido[]){
        this.list_itens = list_itens
    }


    public getData_criacao(){
        return this.data_criacao
    }

    
    public setData_criacao(data_criacao:Date){
        this.data_criacao = data_criacao
    }


    public getData_conclusao(){
        return this.data_conclusao
    }

    
    public setData_conclusao(data_conclusao:Date){
        this.data_conclusao = data_conclusao
    }


}