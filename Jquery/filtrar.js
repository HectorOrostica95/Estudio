$(document).ready(function () {
    //$('.caja').first().css({ background: '#000' })
    //$('.caja').last().css({ background: '#000' })

    // Seleccionas solo una caja
    //$('.caja').eq(2).css({ background: '#000' })

    //Selecciona todas las cajas que tengan la propiedad de "Segunda" o la dada por el usuario
    //$('.caja').filter('#segunda').css({ background: '#f9a03f' });

    //Permite seleccionar todas las cajas que no tengan la propiedad dicha
    $('.caja').not('#segunda').css({ background: '#f9a03f' });
});