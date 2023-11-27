

export class Mesa {
    id: number
    nome: string

    constructor(id: number,
        nome: string,
    ) {
        this.id = id
        this.nome = nome
    }


    public getId(){
        return this.id
    }
    
    public getNome(){
        return this.nome
    }
}