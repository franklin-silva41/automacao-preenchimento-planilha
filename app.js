var axios = require('axios');
const { response } = require('express');


//app.listen(port, () => console.log(`Example app listening at http://localhost:${port}/sptech/todos`))
function testarRequisicao() {

    axios.get('http://localhost:8080/sptech/todos').then(function (data) {
        console.log(data)
    });

}

function procurarColab() {

    axios.get('http://localhost:8080/sptech/Eduardo/procurarcolab/lider tecnico').then(function (data) {
        console.log(data)
    });

}

async function postCases(key) {
    let status = ""
    const article = {
        nome: "leda",
        semestreAtual: "*",
        donopost: "Letícia",
        especialidades: {
            especialidade: "Vender",
            nivelProfissional: "Vendedora",
            nivel: "Alto"
        }
    }
    Response = await axios({
        method: 'post',
        url: 'http://localhost:8080/sptech/colaborador',
        data: {
            key
        }
            
    });


    status = Response.status
    return status

}

module.exports = {
    testarRequisicao,
    procurarColab,
    postCases
}
/* const article = { 
   
};*/