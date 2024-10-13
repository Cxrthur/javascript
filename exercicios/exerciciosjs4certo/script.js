function calcular () {
    var num = document.getElementById('txtnumero')
    var tab = document.getElementById('tabuada')
    
    if (num.value.length == 0) {
        window.alert('Digite algum número')
    } else {
        var contador = 1
        tab.innerHTML = ''
        while (contador <= 10) {
            var item = document.createElement('option')
            item.text = `${contador} x ${Number(num.value)} = ${contador*Number(num.value)}`
            tab.appendChild(item)
            contador++
        }
    }
}