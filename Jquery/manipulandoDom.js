$(document).ready(function () {
    //$('#titulo').text('Encabezado Modificado');
    
    $('#titulo').html('<u>Encabezado Modificado</u>');

    var nombre = $('#nombre');
    nombre.on('change', function(){
        $('#titulo').text(nombre.val());
    });

    //$('#enlace').text('Facebook');
    //$('#enlace').attr('href', 'http://www.facebook.com');

    $('#enlace').attr({
        'class': 'azul',
        'target': '_blank'
    });
});