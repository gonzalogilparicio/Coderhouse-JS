//creo array productos

const productos = [];

//creo constructor Producto

class Producto {
    constructor(id, name, price, stock) {
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
    }
}

//creo cada producto a partir del constructor y los agrego al array

const producto1 = new Producto(1, 'RTX 3060', 100000, 30);
productos.push(producto1);
const producto2 = new Producto(2, 'RTX 3070', 120000, 12);
productos.push(producto2);
const producto3 = new Producto(3, 'RTX 3080', 150000, 19);
productos.push(producto3);
const producto4 = new Producto(4, 'RTX 3090', 220000, 5);
productos.push(producto4);

//funcion que simula un carrito de compra y busqueda de productos

function comprarGpu() {
    let nuevaCompra;
    let consultaModalidad = parseInt(prompt("¿Desea buscar una GPU o ejecutar nuestro asistente de ventas? \n 1. Buscar \n 2. Asistente de ventas"));
    if (consultaModalidad == 1) {
        const busqueda = prompt("Ingrese la GPU que desea buscar").toUpperCase();
        const resultado = productos.find(el => el.name === busqueda);
        console.log(resultado);
        if (resultado == undefined) {
            alert("No tenemos esa GPU en stock en este momento");
        } else {
            alert("Tenemos " + resultado.stock + " unidades en stock de la " + resultado.name + " con un valor de $" + resultado.price);
        }
    } else if (consultaModalidad == 2) {
        do {
            let nombreCliente = prompt("Ingresá tu nombre");
            let dineroDisponible = parseInt(prompt(nombreCliente + ": Estás por comprar una placa de video \n Ingresá el dinero que tenés disponible"));
            let deseaFactura = confirm("¿Necesitás una Factura?\n\n Aceptar --> Si \n Cancelar --> No");
            if (deseaFactura == true) {
                if (dineroDisponible <= 120999) {
                    alert("No podes comprar nada, ya que la placa mas económica + IVA es la " + producto1.name + " y cuesta: $" + producto1.price * 1.21);
                } else if (dineroDisponible <= 145199) {
                    alert("Podés comprarte la " + producto1.name + ", precio final con IVA: $" + producto1.price * 1.21);
                } else if (dineroDisponible <= 181499) {
                    alert("Podés comprarte la " + producto2.name + ", precio final con IVA: $" + producto2.price * 1.21);
                } else if (dineroDisponible <= 266199) {
                    alert("Podés comprarte la " + producto3.name + ", precio final con IVA: $" + producto3.price * 1.21);
                } else {
                    alert("Podés comprarte la " + producto4.name + ", precio final con IVA: $" + producto4.price * 1.21);
                }
            } else {
                if (dineroDisponible <= 99999) {
                    alert("No podes comprar nada, ya que la placa mas económica es la " + producto1.name + " y cuesta: $" + producto1.price);
                } else if (dineroDisponible <= 119999) {
                    alert("Podés comprarte la " + producto1.name + ", precio: $" + producto1.price);
                } else if (dineroDisponible <= 149999) {
                    alert("Podés comprarte la " + producto2.name + ", precio: $" + producto2.price);
                } else if (dineroDisponible <= 219999) {
                    alert("Podés comprarte la " + producto3.name + ", precio: $" + producto3.price);
                } else {
                    alert("Podés comprarte la " + producto4.name + ", precio : $" + producto4.price);
                }
            }
            nuevaCompra = confirm("¿Deseas hacer una nueva compra?\n\n Aceptar --> Si \n Cancelar --> No");
        } while (nuevaCompra != false);
    } else {
        alert("Opción incorrecta, por favor refresque la página");
    }
}

comprarGpu();