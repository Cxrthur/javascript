function carregar() {

    var horario = document.getElementById('horario')
    var foto = document.getElementById('paisagem')
    var data = new Date()
    var hora = data.getHours()
    horario.innerHTML = (`Agora são ${hora} horas!`)

    if (hora >= 0 && hora < 12) {
        foto.src = 'manha.jpg'
        document.body.style.background = ('#D98E04')
    } else if (hora >= 12 && hora < 18) {
        foto.src = 'tarde.jpg'
        document.body.style.background = ('#F9BC5F')
    } else {
        foto.src = 'noite.jpg'
        document.body.style.background = ('#234E7B')
        document.body.style.color = ('white')
    }
}