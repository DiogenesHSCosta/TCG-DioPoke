import CompararDao from "../DAO/CompararDAO.js"
import CompararModel from "../models/CompararModel.js"

const CompararController = (app, db) =>{
    const compararDao = new CompararDao(db)

    app.get("/Comparar/:id1/:id2", async(request, response) =>{
        try {
            const id1 = request.params.id1
            const id2 = request.params.id2
            const retorno = await compararDao.buscarCartas(id1, id2)
            response.send(retorno)
            const j1 = retorno.slice(0, 1)
             const j2 = retorno.slice(1,2)

             const j2m = j2.find((elemento) =>{
                return elemento.id = 3
             })
             
             var convertida = j2.map( (element) =>{
                return Object.keys(element).map((key) =>{
                    return element[key]
                })
            })
            console.log(convertida[0])
        } catch (erro) {
            console.log(erro)
        }
    })
}

export default CompararController