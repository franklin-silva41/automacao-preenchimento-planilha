const app = require('../automacao-preenchimento-planilha/app')
const arrayJson = require('../automacao-preenchimento-planilha/casosTeste.json')

async function processo(req, res) {
    try {


        let listaStatus = []
        for (const key in arrayJson) {

            const lista = await app.postCases(key).then((value) => {
                listaStatus.push(value)
            })

        }

        const adicionando = await app.excelOp(listaStatus)

    } catch (err) {

    }

}
module.exports = {
    processo
}



