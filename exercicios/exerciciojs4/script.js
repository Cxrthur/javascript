function calcular() {
    var num = document.getElementById('inumero')
    num = Number(num.value)
    var tab = document.getElementById('tabuada')

    if (num.value.length == 0) {
        window.alert('nao mente')
    } else {
        var contador = 1
        tab.innerHTML = ''
        while (contador <= 10) {
            var item = document.createElement('option')
            item.text = `${num} x ${contador} = ${num*contador}`
            tab.appendChild(item)
            contador++
        }
    }

}