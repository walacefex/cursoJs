
function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('image');
    var periodo = window.document.getElementById('periodo');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são <strong>${hora} horas </strong>`;
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'img/foto-manha.jpg';
        document.body.style.backgroundColor = "#6f9aad";
        periodo.innerHTML = `Bom Dia!`;
    } else if(hora >= 12 && hora <= 18){
        //Boa Tarde
        img.src = 'img/foto-tarde.jpg'
        document.body.style.backgroundColor = "#fdbf56";
        periodo.innerHTML = `Boa Tarde!`;
    }else {
        //Boa Noite
        img.src = 'img/foto-noite.jpg'
        document.body.style.backgroundColor = "#001220";
        periodo.innerHTML = `Boa Noite!`;
    }
}