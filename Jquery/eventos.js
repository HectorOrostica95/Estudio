$(document).ready(function () {
    var boton = $('#boton');

    //boton.click(function () { 
        //    alert('Hola perro');   
        //});
        
// Evento con una funcion
    //function saludo(){
    //    alert('Saludos');
    //}

//Forma antigua
    //boton.click(saludo);

// Misma forma pero esta es la usada actualmente
    //boton.on('click', saludo);

//  Evento con un callback
    //boton.on('mouseenter', function (){
    //    document.body.style.background = '#000';
    //});
    
    //boton.on('mouseleave', function (){
    //    document.body.style.background = '#fff';
    //});

    //Eliminando eventos
    //boton.on('click', function(){
    //    alert('Saludos');
    //    console.log('Saludos');
    //})

    //$('#desactivar').on('click', function(){
    //    boton.off('click');
    //    console.log('Boton de "Ejecutar" desactivado');
    //});

//  Previeniendo el comportamiento de los enlaces
    $('a').on('click', function (e){
        e.preventDefault();
        alert('Link desactivado');
    });
});