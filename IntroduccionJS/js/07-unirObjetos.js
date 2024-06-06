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

const carrito = {
    cantidad: 20,
    ...producto
    //Se utilizan los tres puntos para unir los objetos producto y carrito. se conoce como spread operator.
}

console.log(carrito);

//Crear un nuevo Objeto que contenga los objatoe producto y cliente.

const nuevoObjeto = {
    producto: { ...producto },
    cliente: { ...cliente }
}
console.table(nuevoObjeto);

//Usando Object.assign

const nuevoObjeto2 = Object.assign(producto, cliente);
console.log(nuevoObjeto2);

