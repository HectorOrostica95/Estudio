$(document).ready(function () {
    var contenedor = $('#contenedor');
    var contador = 1;

    $('#agregar').on('click', function (){
        var caja = $('<div></div>').attr('class', 'caja').text(contador);
        contador++;
        
        //empieza de manera normal y continua normal
        //contenedor.append(caja);

        //empieza de manera normal pero luego se va corriendo el inicial
        //contenedor.prepend(caja);

        //Agrega la caja antes del contenedor padre
        //contenedor.before(caja);
        
        //Agrega la caja despues del contenedor padre 
        //contenedor.after(caja);
    });
});