function converterPrecoParaReais(precoEmDolar: number, taxaDeCambio: number, iof: number = 6.38, lucro: number = 45): 
{precoEmReais: number, valorComIOF: number, precoComIOF: number, precoVenda: number}{
    const precoEmReais = precoEmDolar * taxaDeCambio;
    const valorIOF = precoEmReais * (iof / 100); // calcula o valor do IOF
    const precoComIOF = precoEmReais + valorIOF; // calcula o preço com IOF

    const precoVenda = precoComIOF * (1 + lucro / 100); // calcula o preço de venda com 45% de lucro do comerciante

    return {precoEmReais, valorComIOF: valorIOF, precoComIOF, precoVenda};
}

// exemplo de dados dos produtos
const produtos = [
    {nome: 'Iphone 12', precoDolar: 699, taxaDeCambio: 5.50},
    {nome: 'Macbook Pro', precoDolar: 1299, taxaDeCambio: 5.50},
    {nome: 'Airpods Pro', precoDolar: 249, taxaDeCambio: 5.50},
    {nome: 'Apple Watch', precoDolar: 399, taxaDeCambio: 5.50},
    {nome: 'Ipad Pro', precoDolar: 799, taxaDeCambio: 5.50},
    {nome: 'Homepod', precoDolar: 299, taxaDeCambio: 5.50},
    {nome: 'Apple TV', precoDolar: 179, taxaDeCambio: 5.50},
    {nome: 'Apple Pencil', precoDolar: 99, taxaDeCambio: 5.50},
];

// converter o preço de cada produto para reais e calcular o preço de venda

produtos.forEach(produto => {
    const {precoEmReais, valorComIOF, precoComIOF, precoVenda} = converterPrecoParaReais(produto.precoDolar, produto.taxaDeCambio);
    console.log(`Produto: ${produto.nome}`);
    console.log(`Preço em reais: R$ ${precoEmReais.toFixed(2)}`); // formata o valor para 2 casas decimais, em python seria {:.2f}
    console.log(`Valor do IOF: R$ ${valorComIOF.toFixed(2)}`);
    console.log(`Preço com IOF: R$ ${precoComIOF.toFixed(2)}`);
    console.log(`Preço de venda: R$ ${precoVenda.toFixed(2)}`);
    console.log('\n');
});