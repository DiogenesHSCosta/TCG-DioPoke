class CompararDao{
    constructor(db){
        this.db = db
    }
    buscarCartasJ1(id_1){
        const SQL = `SELECT rowid AS id, Nome, Hp, Attack, Defense, SpecialAttack, SpecialDefense, Speed FROM Cards WHERE rowid = ?`
        return new Promise((res, rej) =>{
            this.db.all(SQL, id_1, (erro, linhas)=>{
                if(!erro){
                    res(linhas)
                }
                else{
                    rej(erro)
                }
            })
        })
    }
    buscarCartasJ2(id_2){
        const SQL = `SELECT rowid AS id, Nome, Hp, Attack, Defense, SpecialAttack, SpecialDefense, Speed FROM Cards WHERE rowid = ?`
        return new Promise((res, rej) =>{
            this.db.all(SQL, id_2, (erro, linhas)=>{
                if(!erro){
                    res(linhas)
                }
                else{
                    rej(erro)
                }
            })
        })
    }
}
export default CompararDao