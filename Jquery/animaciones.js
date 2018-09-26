$(document).ready(function () {

// $(selector).animate({Parametros}, velocidad, callback)
    $('#boton').on('click', function () {
        $('#caja').animate({
            //width: '300px',
            //width: '+=300px',
            //margin: '20px',
            marginLeft: '+=50px'
            
            //opacity: '0.2'
        }, 500, function(){
            //alert('Fin de la animación');
        });

        //$('.caja').toggleClass('animacion');

        $('#caja').animate({
            marginLeft: '-=50px'
        }, 500);

    });
});