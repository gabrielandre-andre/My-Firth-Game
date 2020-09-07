const readline = require('readline-sync')

function start(){
    const content = {}

    content.pesquisarTermo = PerguntarPeloTermoDeBusca()
    content.prefixo = PrefixoDaBusca()

    function PerguntarPeloTermoDeBusca(){
        return readline.question('Qual o termo de busca? ')
    }

    function PrefixoDaBusca(){
        const prefixes = ['Quem é','Oque é','A história do']
        const selectedPrefixIndex = readline.keyInSelect(prefixes,'Selecione Uma opção: ')

        const SelectedOption = prefixes[selectedPrefixIndex]

        return SelectedOption
    }

    console.log(content)
}

start()