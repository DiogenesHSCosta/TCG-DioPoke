class CompararDao{
    constructor(db){
        this.db = db
    }
    buscarCartas(id_1, id_2){
        const SQL = `SELECT rowid AS id, Nome, Speed, Hp, Attack, Defense, SpecialAttack, SpecialDefense FROM Cards WHERE rowid = ? OR rowid = ?`
        return new Promise((res, rej) =>{
            this.db.all(SQL, [id_1, id_2], (erro, linhas)=>{
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