function tocaSom (seletorAudio) {
   const element = document.querySelector(seletorAudio);

   if (element && element.localName === 'audio' ) {
        element.play ();
    }
    else {
        alert ('Elemento não encontrado')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

   
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList [1];
    const idAudio = `#som_${instrumento}`;  //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {

        if (event.code ==='Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    

    }
    
    tecla.onkeyup = function (event) {
        tecla.classList.remove ('ativa');
    }

}



