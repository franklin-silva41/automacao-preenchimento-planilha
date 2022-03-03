const Excel = require('exceljs');


async function excelOp(IntColuna, valueColumn) {
    let workbook = new Excel.Workbook();

    workbook = await workbook.xlsx.readFile('CT_API_Franklin_Matheus.xlsx'); // Substitua para o arquivo a ser alterado;

    let worksheet = workbook.getWorksheet('Planilha1'); // Substitua o nome da planilha "subplanilha";

    worksheet.getCell('H'+IntColuna).value = value; // Substitua pela cédula que deseja modeficar e add um valor a ela.

    workbook.xlsx.writeFile('CT_API_Franklin_Matheus.xlsx');
}

excelOp();