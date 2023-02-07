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
            const id = request.params.id
            const retorno = await cartasDao.selecionarCartas(id)
            response.send(retorno)
            const comparar = retorno
            console.log(comparar)

            // new Promise((res, rej) =>{
            //     db.all("SELECT rowid AS idTemporario FROM Cards WHERE nome = ?", id, (erro, linhas) =>{
            //         if(!erro){
            //             res(linhas)
            //         }
            //         else{
            //             rej(erro)
            //         }})
            //     }).then(console.log)

        } catch (erro) {
            console.log(erro)
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
            const id = request.params.id
            const retorno = await cartasDao.excluirCarta(id)
            response.send(retorno)
        } catch (erro) {
            console.log(erro)
        }
    })

}

export default CardsControllers