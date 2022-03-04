var axios = require('axios');

const XlsxPopulate = require('xlsx-populate');

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
    // Ex.
    // const article = {
    //     nome: "leda",
    //     semestreAtual: "*",
    //     donopost: "Letícia",
    //     especialidades: {
    //         especialidade: "Vender",
    //         nivelProfissional: "Vendedora",
    //         nivel: "Alto"
    //     }
    // }
    Response = await axios({
        method: 'post',
        url: 'http://localhost:8080/sptech/colaborador',
        data: {
            key
        }

    });

    // console.log(Response)
    status = Response.status
    return status

}


async function excelOp(valueColumn) {

    let arquivoExcel = "./Planilhas/CT_API_Franklin_Matheus.xlsx"
    
    XlsxPopulate.fromFileAsync('./Planilhas/CT_API_Franklin_Matheus.xlsx')

        .then(workbook => {
            
            for (let index = 0; index < valueColumn.length; index++) {

                workbook.sheet("Planilha1").cell(`H${index + 3}`).value(valueColumn[index]);

            } return workbook.toFileAsync(arquivoExcel);
            
        });

        console.log(`Foram adicionados ${valueColumn.length} novos status na planilha: ${arquivoExcel}\n`)
}


module.exports = {
    testarRequisicao,
    procurarColab,
    postCases,
    excelOp
}
