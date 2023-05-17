
function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bomdia
        img.src = 'fototarde.png'
        document.body.style.background = '#e5c59b'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'fotomanha.png'
        document.body.style.background = '#bfd6ac'
    } else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#422b46'
    }
}
