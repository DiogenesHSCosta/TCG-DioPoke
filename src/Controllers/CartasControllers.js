import CartasDAO from "../DAO/CartasDAO.js"


const CardsControllers = (app, db)=>{
    const cartasDao = new CartasDAO(db)

    //listar todas as cartas
    app.get("/Cartas", async (request, response) =>{
        try {
            const retorno = await cartasDao.selecionarTodasCartas()
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })

    //Listar uma carta
    app.get("/Cartas/:id", async (request, response) =>{
        try {
            
        } catch (erro) {
            
        }
    })

    app.post("/Cartas", async (request, response) =>{
        try {
            const retorno = await cartasDao.criarCarta(request)
            response.send(retorno)
        } 
        catch (erro) {
            console.log(erro)
        }
    })

    app.delete("/Cartas/:id", async (request, response) =>{
        try {
            
        } catch (erro) {
            
        }
    })

}

export default CardsControllers