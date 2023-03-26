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
    }, 2000);

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
let dialogAtivo = '';

function openDialog(param) {
    // Verifique se já existe um diálogo aberto e feche-o se necessário
    if (dialogAtivo) {
      const idx = dialogAtivo.substring(dialogAtivo.length - 1);
      closeDialog(idx);
    }
  
    // Crie o ID do diálogo usando um template string
    const dlg = `dialog${param}`;
  
    // Exiba o diálogo atual
    dialogAtivo = dlg;
    const dialogElement = document.getElementById(dlg);
    if (dialogElement) {
      dialogElement.style.display = 'block';
    } else {
      console.error(`Elemento com ID "${dlg}" não encontrado!`);
    }
  }
  
  function closeDialog(param) {
    const dlg = `dialog${param}`;
    const dialogElement = document.getElementById(dlg);
    if (dialogElement) {
      if (dlg === dialogAtivo) {
        dialogAtivo = '';
        dialogElement.style.display = 'none';
        mostrarToast('success', 'Sucesso!', `Leitura da ${param}ª questão concluída!`);
      }
    } else {
      console.error(`Elemento com ID "${dlg}" não encontrado!`);
    }
  }
  

