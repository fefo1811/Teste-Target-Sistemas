const fs = require('fs')
// Recebendo o dados.json
fs.readFile('./dados.json', 'utf8', (error, data) => {
    if (error) console.log("Erro ao ler JSON")
    // Transformando em objeto
    const dados = JSON.parse(data)
    const valor = dados.filter((value) => value.valor !== 0)

    // Recuperando dados.valor
    const valores = valor.map((value) => value.valor);
    const dias = valor.map((value) => value.dia)

    // Média mensal
    const total = valores.reduce((acc, valor) => acc + valor, 0)
    const mediaMensal = (total / valores.length).toFixed(2)
    console.log(mediaMensal)

    const maiorValor = Math.max(...valores)
    const menorValor = Math.min(...valores)

    const acimaMedia = valores.filter((value) => value > mediaMensal).length;


    console.log(`Média mensal: ${mediaMensal} 
        \nMaior faturamento: ${maiorValor} 
        \nMenor faturamento: ${menorValor}
        \nDias acima da média: ${acimaMedia}
        `)
})