function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = new Date()
    var minutos = min.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#ef9c54'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'img/noon.png'
        document.body.style.background = '#ff7b3d'
    }else{
        //Boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#000d20'
    }
}