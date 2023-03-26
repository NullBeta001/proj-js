function mostrarToast(tipo, titulo, mensagem) {
    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add('bg-' + tipo);
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');

    var header = document.createElement('div');
    header.classList.add('toast-header');
    var tituloElemento = document.createElement('strong');
    tituloElemento.classList.add('mr-auto');
    tituloElemento.textContent = titulo;
    var botaoFechar = document.createElement('button');
    botaoFechar.classList.add('ml-2');
    botaoFechar.classList.add('mb-1');
    botaoFechar.classList.add('close');
    botaoFechar.setAttribute('data-dismiss', 'toast');
    botaoFechar.setAttribute('aria-label', 'Fechar');
    var iconeFechar = document.createElement('span');
    iconeFechar.setAttribute('aria-hidden', 'true');
    iconeFechar.innerHTML = '&times;';
    botaoFechar.appendChild(iconeFechar);
    header.appendChild(tituloElemento);
    header.appendChild(botaoFechar);
    toast.appendChild(header);

    var corpo = document.createElement('div');
    corpo.classList.add('toast-body');
    corpo.textContent = mensagem;
    toast.appendChild(corpo);

    document.querySelector('.toast-container').appendChild(toast);

    var toastElemento = new bootstrap.Toast(toast);
    toastElemento.show();
    
    setTimeout(function() {
        var toastElemento = bootstrap.Toast.getOrCreateInstance(toast);
        toastElemento.hide();
    }, 3000);

};

$(document).ready(function() {

    let slideAtual = 1;
    let listaSlides = ["banner-primario", "banner-secundario", "banner-piloto"]

    setInterval(mudarSlide, 3500)

    function mudarSlide() {
        console.log("Slide atual:", slideAtual);

        //Remove o slide anterior
        if (slideAtual > 0) {
            $("#carrossel").removeClass(listaSlides[slideAtual - 1])
        } else if (slideAtual == 0) {
            $("#carrossel").removeClass(listaSlides[ (listaSlides.length) - 1])
        }

        //Adiciona o slide atual
        $("#carrossel").addClass(listaSlides[slideAtual]);

        //Indica o slide atual
        slideAtual++

        if(slideAtual > (listaSlides.length) - 1) {
            slideAtual = 0;
        }
    }
});

let dialog = '';

function openDialog(param) {
    if(dialog != '') {
        let idx = dialog.substring(dialog.length - 1);
        closeDialog(idx)
    }
    if(param == 1){
        dialog = 'dialog1';
    }else if (param == 2) {
        dialog = 'dialog2';
    }else if (param == 3) {
        dialog = 'dialog3';
    }else{
        dialog = 'dialog4';
    }

    document.getElementById(dialog).style.display = "block";
  }
  
  
  function closeDialog(param) {
    let dlg = '';
    if(param == 1){
        dlg = 'dialog1';
    }else if (param == 2) {
        dlg = 'dialog2';
    }else if (param == 3) {
        dlg = 'dialog3';
    }else{
        dlg = 'dialog4';
    }
    document.getElementById(dlg).style.display = "none";
  }
