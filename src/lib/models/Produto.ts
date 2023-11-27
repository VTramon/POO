

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


    public getId(){
        return this.id
    }
    
    public setId(id:number){
        this.id = id
    }

    
    public getTipo(){
        return this.tipo
    }
    
    public setTipo(tipo:string){
        this.tipo = tipo
    }

    
    public getNome(){
        return this.nome
    }
    
    public setNome(nome:string){
        this.nome = nome
    }

    
    public getPreco(){
        return this.preco
    }
    
    public setPreco(preco:number){
        this.preco = preco
    }

    
    public getDescricao(){
        return this.descricao
    }
    
    public setDescricao(descricao:string){
        this.descricao = descricao
    }

    
}