const app = require("./src/app")

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`API está rodando na porta ${PORT}`)
})