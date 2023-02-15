class ResultadoDao{
    constructor(db){
        this.db = db
    }

    placar(){
        const SQL =`SELECT * FROM Score`
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
    historico(){
        const SQL =`SELECT * FROM RoundHistory`
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
}
export default ResultadoDao