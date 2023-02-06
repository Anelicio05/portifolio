import {cards} from "./valorCard.js"
const b = document.querySelectorAll("#lista li")

b.forEach(element => {
    element.addEventListener("click", scrollId)
})

window.addEventListener("scroll", scrollcolor)

function scrollId(e) {
    const id = e.target.alt
    const to = document.querySelector(`#${id}`).offsetTop

    window.scroll({
        top: to,
        behavior: "smooth"
    })
    scrollcolor()
}

function scrollcolor() {
    const posicaoCorreta = document.documentElement.scrollTop.toFixed(0)
    const sobre = document.getElementById("sobre").offsetTop
    const tecnologia = document.getElementById("tecnologias").offsetTop
    const projeto = document.getElementById("projetos").offsetTop
    
    posicaoCorreta < sobre ?   document.querySelector("[data-cabecalho]").style.background = "#f5ad08" : document.querySelector("[data-cabecalho]").style.background = "#383838"
    posicaoCorreta >= sobre && posicaoCorreta < tecnologia ?  document.querySelector("[data-sobre]").style.background = "#f5ad08" :  document.querySelector("[data-sobre]").style.background = "#383838"
    posicaoCorreta >= tecnologia && posicaoCorreta < projeto ?  document.querySelector("[data-tecnologia]").style.background = "#f5ad08" : document.querySelector("[data-tecnologia]").style.background = "#383838"
    posicaoCorreta >= projeto ? document.querySelector("[data-projeto]").style.background = "#f5ad08" : document.querySelector("[data-projeto]").style.background = "#383838"
         
}

function criaCard(){
    const ul = document.querySelector("#lista-card")
    cards.forEach(card=>{
        ul.innerHTML += `
        <li class="card">
            <h4>${card.titulo}</h4>
            <img src="${card.img}" alt="">
            <div class="bar"><div style="width: ${card.valor};"></div></div>
            <p>${card.valor}</p>
        </li>
        `
    })
   
}

criaCard()
