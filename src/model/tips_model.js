let id = 0;

export class Tips {
    constructor(dicas, data) {
        this.id = id++
        this.dicas = this.validarDica(dicas)
        this.data = data;
    }

    validarDica(dicas) {
        if(typeof dicas === 'string' && dicas.length >= 1) {
            return dicas
        } else {
            throw new Error("Nenhuma dica aqui")
        }
    }
}