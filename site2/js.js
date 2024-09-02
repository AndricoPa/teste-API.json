const url = "http://localhost:3000/pecas"

async function pushPecas(){
    const resposta = await fetch(url)
    const dados = await resposta.json()
    console.log(dados);
    const cartoes = document.getElementById("card")
    console.log(cartoes);
    cartoes.innerHTML = dados.map(pecas =>{
        return`
        <div class="card">
        <img src="${pecas.foto}" class="foto">
        <h3>${pecas.nome}</h3>
        <p>antes por r$ <spam id="spam">${pecas.preco}</spam></p>
        <p>agora por r$ ${pecas.precoNew} </p>
        <button class="button">comprar</button>
        </div>
        `
    }).join('')   
}
pushPecas()