//Strings y sus métodos
// Datos del producto
let nombreProducto = "Nike Air Zoom Pegasus";
let categoria = "Running Shoes";
let descripcion = "Zapatillas ligeras para correr con amortiguación reactiva";

// Métodos de String
console.log("Nombre en mayúsculas: " + nombreProducto.toUpperCase());
console.log("Nombre en minúsculas: " + nombreProducto.toLowerCase());
console.log("Longitud del nombre: " + nombreProducto.length);
console.log("¿Contiene 'Zoom'? " + nombreProducto.includes("Zoom"));
console.log("Categoría sin espacios: '" + categoria.trim() + "'");
console.log("Descripción resumida: " + descripcion.substring(0, 25) + "...");

//Template Strings (Template Literals)
// Datos del producto
let precio = 129.99;
let stock = 25;
let disponible = true;

// Template Strings
console.log(`El producto ${nombreProducto} tiene un precio de $${precio} y hay ${stock} unidades en stock.`);
console.log(`¿Está disponible? ${disponible ? "Sí" : "No"}`);
console.log(`Producto: ${nombreProducto} | Precio: $${precio.toFixed(2)} | Stock: ${stock} unidades`);

//Números, Casting y Precedencia de Operadores
// Datos para el cálculo
let precioOriginal = 150.75;
let descuento = 20; // en porcentaje
let cantidadComprada = 3;
let costoEnvio = 5.99;

// Cálculo con precedencia de operadores
let precioConDescuento = precioOriginal - (precioOriginal * descuento / 100);

// Casting: redondear el precio
let precioRedondeado = Math.round(precioConDescuento);

// Total de la compra (descuento aplicado y suma del envío)
let totalCompra = (precioConDescuento * cantidadComprada) + costoEnvio;

console.log(`Precio original: $${precioOriginal}`);
console.log(`Precio con descuento: $${precioConDescuento.toFixed(2)}`);
console.log(`Precio redondeado (casting): $${precioRedondeado}`);
console.log(`Total a pagar por ${cantidadComprada} unidades (incluye envío): $${totalCompra.toFixed(2)}`);

//comparaciones
let airForce1 = 120
let airForce2 = "120.00"
console.log(airForce1 == airForce2);
console.log(airForce1 === airForce2);
console.log(airForce1 != airForce2);
console.log(airForce1 !== airForce2);
if (airForce1 == airForce2){
  console.log("Son iguales")
}else{
  console.log("No son iguales")
}

//valores truty / falsy
let colorAirForce1 = null;
console.log(colorAirForce1 ?? "no hay colores disponibles");
let tallaAirForce1 = ''
console.log(tallaAirForce1 ? "si hay tallas":"no hay tallas disponibles");
if (colorAirForce1 = null){
  console.log("no hay colores disponibles")
}
//funciones
console.log("--------FUNCIONES--------")
// Funcion declarada
function agregarcarrito(){
  console.log("Producto agregado al carrito")
}
//Funcion expresada
const agregarcarrito1 = function(){
  console.log("Producto agregado al carrito")
}

//Funcion flecha
const agregarcarrito2 = () => {
  return "Producto ya agregado al carrito";
}

const agregarcarrito3 = () => "Producto ya agregado al carrito";
const agregarcarrito4 = () => ("Producto ya agregado al carrito");

console.log(agregarcarrito());
console.log(agregarcarrito1());
console.log(agregarcarrito2());
console.log(agregarcarrito3());
console.log(agregarcarrito4());