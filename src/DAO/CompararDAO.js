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
    DescobrirPlacar(){
        const SQL="SELECT * FROM Score"
        return new Promise((res, rej) =>{
            this.db.all(SQL, (erro, linhas)=>{
                if(!erro){
                    res(linhas)
                }
                else{
                    rej(erro)
                }
            })
        })
        
    }
    AtualizarPlacar(comparar, descobrir){

        const conversaoPlacar = descobrir.map( (element) =>{
            return Object.keys(element).map((key) =>{
                return element[key]
            })
        })
        const placar = conversaoPlacar[0]

        if(comparar[6] == "Jogador 1"){
            placar[0] +=1
        } 
        else if(comparar[6] == "Jogador 2"){
            placar[1] +=1
        }
        
        const SQL=`Update Score SET PontosJogador1 = ?, PontosJogador2 = ? WHERE rowid = 1`
        new Promise((res, rej) =>{
             this.db.all(SQL, [placar[0], placar[1]], (erro) =>{
                if(!erro){
                    res(placar)
                }
                else{
                    rej(erro)
                }
             })
        })
    }
    cadastrarRodada(comparar){
        const SQL = `INSERT INTO RoundHistory(Hp, Attack, Defense, SpecialAttack, SpecialDefense, Speed, Vencedor)
        values(?, ?, ?, ?, ?, ?, ?)`

        new Promise((res, rej) =>{
            this.db.all(SQL,
                [
                    comparar[0],
                    comparar[1],
                    comparar[2],
                    comparar[3],
                    comparar[4],
                    comparar[5],
                    comparar[6]
                ], (erro)=>{
                if(!erro){
                    res("Rodada Cadastrada")
                }
                else{
                    rej(erro)
                }
            })
            
        })
    }

    
}
export default CompararDao