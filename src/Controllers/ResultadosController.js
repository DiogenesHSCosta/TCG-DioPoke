import ResultadoDao from "../DAO/ResultadoDAO.js"

const ResultadosController= (app, db) =>{
    const resultadoDao = new ResultadoDao(db)

    app.get("/Placar", async (request, response) =>{
        try {
            const placar = await resultadoDao.placar()
            response.send(placar)
        } catch (erro) {
            console.log(erro)
        }
    })

    app.get("/Historico", async (request, response) =>{
        try {
            const placar = await resultadoDao.historico()
            response.send(placar)
        } catch (erro) {
            console.log(erro)
        }
    })
    
}
export default ResultadosController