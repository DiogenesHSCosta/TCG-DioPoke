class CartasDAO{
    constructor(db){
        this.db = db
    }

    selecionarTodasCartas(){
        const SQL = "SELECT rowid, Nome, Speed, Hp, Attack, Defense, SpecialAttack, SpecialDefense FROM Cards"

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

    selecionarCartas(){

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
                        this.db.run(`A carta de nome ${request.body.nome} de id =`)
                    }
                    else{
                        rej(erro)
                    }
            })
        })
    }

    excluirCarta(){

    }
}

export default CartasDAO