function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var dtnasc = document.getElementById('anonascimento')
    var res = document.getElementById('resposta')
    if (Number(dtnasc.value) == 0 || Number(dtnasc.value) > ano) {
        window.alert('Não me mente')
    } else {
        var genero = document.getElementsByName('genero')
        var idade = ano - Number(dtnasc.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')
        if (genero[0].checked) {
            gen = 'Home'
            if (idade >= 0 || idade < 10) {
                //Criamca
                img.setAttribute('src', 'nomedaimage')
            } else if (idade < 21) {
                //Jove
            } else if (idade < 50) {
                //Adulto
            } else {
                //Idos
            }
        } else if (genero[1].checked) {
            gen = 'muie'
            if (idade >= 0 || idade < 10) {
                //Criamca
            } else if (idade < 21) {
                //Jove
            } else if (idade < 50) {
                //Adulto
            } else {
                //Idos
            }
        } else if (genero[2].checked) {
            gen = window.prompt('Gostaria de especificar?')
        }
        res.innerHTML = `detectamo ${gen} com ${idade} anos`
        res.appendChild(img)
    }
}