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


    public getId(){
        return this.id
    }

    public setId(id:number){
        this.id = id
    }
    
    public getProduto(){
        return this.produto
    }

    public setProduto(produto:string){
         this.produto = produto
    }
    
    public getQuantidade(){
        return this.quantidade
    }

    public setQuantidade(quantidade: number){
         this.quantidade = quantidade
    }
    
    public getDetalhes(){
        return this.detalhes
    }

    public setDetalhes(detalhes: string){
         this.detalhes = detalhes
    }
    

}