var cajas = document.getElementsByTagName('div');
//var cajas = document.getElementsByClassName('caja');
var primeraCaja = document.getElementById('primeraCaja');

//cajas[0].textContent = 'Hola mundo';
//primeraCaja.innerHTML = '<u>Hola Mundo</u>';

//  Creando nodos 

//1.- Crear el elemento 
var caja = document.createElement('div');
//2.- Crear un nodo de texto 
var contenido = document.createTextNode('Hola Mundo');
//3.- Añadir el nodo de texto al elemento
caja.appendChild(contenido);
//4.- Agregar atributos a las cajas
//caja.setAttribute('class', 'caja naranja');
//5.- Agregar el elemento al documento
//var contenedor = document.getElementById('contenedor');
//contenedor.appendChild(caja);

//      Modificando la clas o id de un elemento 
caja.id = 'primera';
caja.className = 'caja naranja';

//como obtener el elemento padre de donde estoy posicionado
var padre = cajas[0].parentNode;

// se inserta en la primera posicion del contenedor
padre.insertBefore(caja, primeraCaja);

//Se reemplaza el elemento caja en la posicion cajas[1]
//padre.replaceChild(caja, cajas[1]);

//Como eliminar un elemento
padre.removeChild(cajas[3]);

