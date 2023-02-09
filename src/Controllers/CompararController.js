import CompararDao from "../DAO/CompararDAO.js"
import CompararModel from "../models/CompararModel.js"

const CompararController = (app, db) =>{
    const compararDao = new CompararDao(db)

    app.get("/Comparar/:id1/:id2", async(request, response) =>{
        try {
            const id1 = request.params.id1
            const id2 = request.params.id2
            const retornoJ1 = await compararDao.buscarCartasJ1(id1)
            const retornoJ2 = await compararDao.buscarCartasJ2(id2)

            const conversaoj1 = retornoJ1.map( (element) =>{
                return Object.keys(element).map((key) =>{
                    return element[key]
                })
            })
            const conversaoj2 = retornoJ2.map( (element) =>{
                return Object.keys(element).map((key) =>{
                    return element[key]
                })
            })
            const conversao =[conversaoj1[0], conversaoj2[0] ]

            let comparar = new CompararModel(conversao)
            const resultado = comparar.jogo() 

            response.send(resultado)     
            console.log(conversao, resultado)
        } catch (erro) {
            console.log(erro)
        }
    })
}

export default CompararController