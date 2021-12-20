'use strict'

window.addEventListener('load', () => {
    const contenedorLoader = document.querySelector('.contenedor_loader');

    contenedorLoader.style.opacity= 0;
    contenedorLoader.style.visibility = 'hidden';

    var template = document.getElementById('article-template');
    

    var articles = document.getElementById('articles')
    for (var i = 1; i <= 5; i++) {
        var clonado = template.cloneNode(true);
        clonado.removeAttribute("id");
        var h2 = clonado.getElementsByTagName('h2')[0];
        h2.innerHTML = h2.textContent + ' ' + i;
        articles.appendChild(clonado);
    }

    //activar boton del menu responsivo
   

})
