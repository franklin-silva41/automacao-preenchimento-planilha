var axios = require('axios');
const Excel = require('exceljs');

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


async function excelOp(IdColuna, valueColumn) {
    console.log(IdColuna,valueColumn)
    let workbook = new Excel.Workbook();

    workbook = await workbook.xlsx.readFile('CT_API_Franklin_Matheus.xlsx'); // Substitua para o arquivo a ser alterado;

    let worksheet = workbook.getWorksheet('Planilha1'); // Substitua o nome da planilha "subplanilha";

    worksheet.getCell('H'+IdColuna).value = valueColumn; // Substitua pela cédula que deseja modeficar e add um valor a ela.

    workbook.xlsx.writeFile('CT_API_Franklin_Matheus.xlsx');

    setTimeout(() => {
        
    }, 1000);
   
}

module.exports = {
    testarRequisicao,
    procurarColab,
    postCases,
    excelOp
}
/* const article = { 
   
};*/