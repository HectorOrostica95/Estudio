$(document).ready(function () {
    //$('.padre');
    //trae al elemento padre que contiene al elemento ingresado
    //$('#tercera').parent().css({
    //    background: '#1b3d82'
    //});

    //Trae todos los elementos que continen al seleccionad
    //$('#tercera').parents();

    //Trae todos los elementos que contenga este padre 
    //$('#padre').children().fadeOut(500);
    //$('#padre').children('#tercera').fadeOut(500);

    //Busca los elementos que cumplan con lo que el usuario esta buscando
    //$('#contenedor').find('div.caja').slideUp();

    //Permite seleccionar los elementos hermanos
    //$('#tercera').siblings().fadeOut(1500);

    //Cambia el color de la caja anterior
    //$('#tercera').prev().css({background: '#000'});
    //Cambia el color de la caja siguiente
    //$('#tercera').next().css({background: '#000'});
    //Cambia el color de todas las cajas anteriores
    //$('#tercera').prevAll().css({background: '#000'});
    //Cambia el color de todas las cajas que siguen
    $('#tercera').nextAll().css({background: '#000'});
});