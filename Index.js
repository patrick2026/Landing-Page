let setaDireira = window.document.getElementById("seta-direita")
let leonardo = window.document.getElementById("leonardo")
let samanta = window.document.getElementById("samanta")
let bruna = window.document.getElementById("bruna")
let setaEsquerda = window.document.getElementById("seta-esquerda")

function rolarParaDireita(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaDireira.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function rolarParaEsquerda(){
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaDireira.style = "display:flex"
    setaEsquerda.style = "display:none"
}