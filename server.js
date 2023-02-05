import app from "./src/main.js";

const port = 3000
app.listen(port, () =>{
    console.log(`API rodando: http://localhost:${port}`)
})