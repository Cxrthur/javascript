/* function contar() {
    var inicio = document.getElementById('inicio')
    var inicio = Number(inicio.value)
    var fim = document.getElementById('fim')
    var fim = Number(fim.value)
    var passo = document.getElementById('passo')
    var passo = Number(passo.value)
    var res = document.getElementById('resposta')
    var contar = 1

    for (var contar = inicio; contar <= fim; contar + passo) {
        res.innerHTML = contar
    }
} */

    var inicio = 1
    var fim = 10
    var passo = 1
    
    for (var contar = inicio; contar <= fim; contar + passo) {
        console.log(contar)
    }