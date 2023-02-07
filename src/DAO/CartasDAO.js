class CartasDAO{
    constructor(db){
        this.db = db
    }

    selecionarTodasCartas(){
        const SQL = "SELECT rowid AS id, Nome, Speed, Hp, Attack, Defense, SpecialAttack, SpecialDefense FROM Cards"

        return new Promise((res, rej) =>{
            this.db.all(SQL, (erro, linhas) =>{
                if(!erro){
                    res(linhas)
                }
                else{
                    rej(erro)
                }
            })
        })
    }

    selecionarCartas(id){
        const SQL = `SELECT rowid AS id, Nome, Speed, Hp, Attack, Defense, SpecialAttack, SpecialDefense FROM Cards WHERE rowid = ?`
        return new Promise((res, rej) =>{
            this.db.all(SQL, id, (erro, linhas)=>{
                if(!erro){
                    res(linhas)
                }
                else{
                    rej(erro)
                }
            })
        })
    }
    
    criarCarta(request){

        const SQL = `INSERT INTO Cards(Nome, Speed, Hp, Attack, Defense, SpecialAttack, SpecialDefense)
        values(?, ?, ?, ?, ?, ?, ?)`

        return new Promise((res, rej) =>{
            this.db.run(SQL, 
                [
                    request.body.nome,
                    request.body.speed,
                    request.body.hp,
                    request.body.attack,
                    request.body.defense,
                    request.body.specialAttack,
                    request.body.specialDefense

                ],
                (erro) =>{
                    if(!erro){
                        res(`Carta criada`)
                    }
                    else{
                        rej(erro)
                    }
            })
        })
    }

    excluirCarta(id){
        const SQL = `DELETE FROM Cards WHERE rowid = ?`
        return new Promise((res, rej) =>{
            this.db.all(SQL, id, (erro)=>{
                if(!erro){
                    res("Carta deletada com sucesso")
                }
                else{
                    rej(erro)
                }
            })
        })
    }
}

export default CartasDAO