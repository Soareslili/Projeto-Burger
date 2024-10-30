const list = document.querySelector('ul')
const btnProduct = document.querySelector('.mostra-product')
const btnMap = document.querySelector('.Map-product')
const BtnSomar = document.querySelector('.soma-total')
const filterAll = document.querySelector('.filtra-all')

function formatoValor(valor) {
    const novoValor = valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL' });

        return novoValor
}


function mostraproduct(productArray) {
    let myLi = ''

    productArray.forEach(product => {
        myLi += `
               <li>
                   <img src=${product.src}>
                   <p> ${product.name}</p>
                   <p> R$ ${formatoValor(product.price)}</p>
               </li>
       `
    })
    list.innerHTML = myLi
}

function Mapproduct() {
    const novosPrecos = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,

    }))
    mostraproduct(novosPrecos)

}

function somatotal() {
    const totalValor = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `          
        <li>
                   
            <p> O valor total dos itens é R$ ${formatoValor(totalValor)}</p>
                   
        </li>
    `
}

function filtraall() {
    const filtraVegano = menuOptions.filter(product => product.vegan)
    mostraproduct(filtraVegano)
}


btnProduct.addEventListener('click', () => mostraproduct(menuOptions))
btnMap.addEventListener('click', Mapproduct)
BtnSomar.addEventListener('click', somatotal)
filterAll.addEventListener('click', filtraall)
