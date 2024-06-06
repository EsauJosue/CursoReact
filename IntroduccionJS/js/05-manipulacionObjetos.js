const producto = {
    nombre: "Tablet",
    precio: 500,
    disponible: false
}

console.log(producto);
//Cambiando el valor de una propiedad
producto.disponible = true;

console.log(producto);

//Añadiendo una nueva propiedad
producto.imagen = "imagen.jpg";
console.log(producto);

//Eliminando una propiedad
delete producto.disponible;

console.log(producto);

//Evitar que un objeto sea modificado
Object.freeze(producto);

producto.disponible = false;
producto.imagen = "imagen.jpg";
delete producto.precio;

Object.seal(producto);
//Object seal permite modificar las propiedades existentes pero no permite añadir ni eliminar propiedades