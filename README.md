# API - Testes automatizados e preenchimento automatico de planilha.

### Descrição

API com objetivo de automação de teste de JSONs e preenchimento automático de planilha, onde conforme a API testa JSON a JSON devolve o status da mesma, assim preenchendo a planilha automaticamente com o número do status (ex. 201 Created).

### Recursos

API desenvolvida 100% em NODEJS e JavaScript.

### Começando

1 - Clone o repositório em sua maquina com o comando: `git clone https://github.com/franklin-silva41/automacao-preenchimento-planilha.git` <br>
2 - Na sua IDE, utilizaremos como exemplo o [Visual Studio Code](https://code.visualstudio.com/) <br>
3 - Instale o [NODEJS](https://nodejs.org/en/) em sua máquina <br>
4 - Com sua IDE aberta, abra o terminal e digite o seguinte comando: `npm i`, esse comando instalará todas as bibliotecas necessárias para rodar a API <br>

#### Configurando a rota para testar API externa

1 - Dentro do arquivo <b>app.js</b> > na funcion <b>postCases</b> mude a rota da API a ser testada (Ex. 'http://localhost:8080/sptech/colaborador') <br>
2 - Dentro do arquivo <b>app.js</b> > na funcion <b>excelOp</b> mude a rota da pasta a ser alterada no let <b>arquivoExcel</b> mude também na linha seguinte do codigo <br>
3 - Dentro do arquivo <b>app.js</b> > na funcion <b>excelOp</b> dentro do laço de repetição `for` defina o nome da planilha, coluna e linha a ser inserido o status do JSON <br>
3 - Dentro do arquivo <b>main.js</b> > na const <b>arrayJson</b> mude a rota do arquivo JSON a ser testado <br>

#### Rodando a API 

1 - Após todas as configurações iniciais digite no seu terminal o comando: ´npm start´

Pronto, sua pasta (planilha) provavelmente já foi preenchida com o status do seus JSON.

### Suporte 

Qualquer dúvidas ou problemas entre em contato com:

Franklin Silva: franklin.oliveira@bandtec.com.br
Matheus Matos: matheus.matos@bandtec.com.br
