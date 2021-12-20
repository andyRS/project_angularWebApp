$(document).ready(function () {


    //Declarar variables y llamarlo del DOM
     var menuResponsivo = $(".menu-responsivo");
     var menu = $('#menu');
    

    //activar boton del menu responsivo con evento Click
   menuResponsivo.click(function(){
       //menu.show('slow');
       menu.fadeToggle('slow');
       menuResponsivo.hide('slow');
   })


});