$(document).ready(function () {


    //Declarar variables y llamarlo del DOM
     var menuResponsivo = $(".menu-responsivo");
     var menu = $('#menu');

     var cerarMenuResponsivo = $('.cerrar-menu-responsivo');
    

    //activar boton del menu responsivo con evento Click
    menuResponsivo.click(function(){
       //menu.show('slow');
       menu.fadeToggle('slow');
       menuResponsivo.hide('fast'); 
   })

   cerarMenuResponsivo.click(()=>{
        menu.hide('slow');

        cerarMenuResponsivo.hide('fast');
        menuResponsivo.show('slow');
   })


});
