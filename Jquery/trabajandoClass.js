$(document).ready(function () {
    $('#boton').on('click', function () {
        
        //Agrega una class
        //$(this).addClass('naranja');

        //Elimina una class
        //$(this).removeClass('boton');
        
        //Alterna la class
        //Permite agregar o quitar la class indicada
        $(this).toggleClass('naranja');
        
        
        //$(this).css({
        //    'height': '100px',
        //    'width': '100px'
        //})

    });
});