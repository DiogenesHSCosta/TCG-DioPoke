
class CompararModel{
    constructor(conversao){
        this.j1 = conversao[0]
        this.j2 = conversao[1]
    }

    comparar(){
        const comparar = []
        
        //Hp index [2]
        //Attack index [3]
        //Defense index [4]
        //SpecialAttack index [5]
        //SpecialDefense index [6]
        //Speed index [7]

        for (let i = 2; i < 8; i++){
            if(this.j1[i] > this.j2[i]){
                comparar.push(1)
            }
            else if(this.j1[i] === this.j2[i]){
                comparar.push(0)
            }
            else{
                comparar.push(2)
            }
        }
        const pontos1 = comparar.filter(pontos => pontos === 1)
        const pontos2 = comparar.filter(pontos => pontos === 2)

        if(pontos1.length > pontos2.length){
            comparar.push("Jogador 1")
        }
        else if(pontos1.length === pontos2.length){
            comparar.push("Empate")
        }
        else{
            comparar.push("Jogador 2")
        }
        return comparar
    }

    jogo(comparar){
        
        const resultado = [
            {
                "Hp": comparar[0],
                "Attack": comparar[1],
                "Defense": comparar[2],
                "SpecialAttack": comparar[3],
                "SpecialDefense": comparar[4],
                "Speed": comparar[5],
                "Vencedor": comparar[6]
            }
        ]

        return resultado
    }
}
export default CompararModel