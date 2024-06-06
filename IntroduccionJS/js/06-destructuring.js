const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: false
}

const cliente = {
    nombre: "Juan",
    apellido: "De la torre",
    saldo: 500,
    premium: true,
    direccion: {
        calle: "Calle 1",
        ciudad: "Ciudad",
        pais: "Pais"
    }
}

const { nombre } = producto;
const { nombre: nombreCliente } = cliente; //Se renombra la propiedad nombre del objeto cliente a nombreCliente para evitar conflictos con la propiedad nombre del objeto producto.

// Se coloca entre llaves el nombre de la propiedad que se quiere extraer del objeto.

console.log(nombre);
console.log(nombreCliente);

const { direccion: { calle } } = cliente; //Se extrae la propiedad calle del objeto direccion que se encuentra dentro del objeto cliente.
console.log(calle);

const {apellido: renombreApellido} = cliente;

console.log(renombreApellido);