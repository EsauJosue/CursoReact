const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
console.table(producto);
console.log(typeof producto);

// Accediendo a cada una de sus propiedades
console.log(producto.nombre);

// const nombre = producto.nombre;
// console.log(nombre);

// Destructuring
const { nombre, precio, disponible } = producto;
console.log(precio);

// Object Literal Enhacement
const banda = 'Metallica';
const genero = 'Heavy Metal';
const canciones = ['Master of Puppets', 'Seek & Destroy', 'Enter Sandman'];

// Forma anterior
// const metallica = {
//     banda: banda,
//     genero: genero,
//     canciones: canciones
// }
