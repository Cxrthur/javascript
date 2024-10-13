function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('final')
    var passo = document.getElementById('passo')
    var res = document.getElementById('resposta')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('falta dado dog')
        res.innerHTML += ('Não da pra contar sem dado dog')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido tem que botar mais que 0! Considere passo 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (var contador = i; contador <= f; contador += p) {
                res.innerHTML += `${contador} - `
            }
        } else {
            // Contagem decrescente
            for (var contador = i; contador >= f; contador -= p) {
                res.innerHTML += `${contador} - `
            }
        }
        res.innerHTML += ('Fim')
    }
}