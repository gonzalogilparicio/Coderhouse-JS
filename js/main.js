//Programa que contiene una función que consulta el nombre del cliente, luego le pregunta su dinero disponible,
//le pregunta si quiere factura (para calcular el IVA o no en el costo final) y en base a las entradas y a los precios
//de las placas, le dice que puede comprar y que no, al final le consulta si quiere hacer una nueva compra o
//si desea finalizar.

let precioRtx3060 = 100000;
let precioRtx3070 = 120000;
let precioRtx3080 = 150000;
let precioRtx3090 = 220000;

function comprarGpu() {
    let nuevaCompra;
    do {
        let nombreCliente = prompt("Ingresá tu nombre");
        let dineroDisponible = parseInt(prompt(nombreCliente + ": Estás por comprar una placa de video \n Ingresá el dinero que tenés disponible"));
        let deseaFactura = confirm("¿Necesitás una Factura?\n\n Aceptar --> Si \n Cancelar --> No");
        if (deseaFactura == true) {
            if (dineroDisponible <= 120999) {
                alert("No podes comprar nada, ya que la placa mas económica + IVA es la RTX 3060 y cuesta: $" + precioRtx3060 * 1.21);
            } else if (dineroDisponible <= 145199) {
                alert("Podés comprarte la RTX 3060, precio final con IVA: $" + precioRtx3060 * 1.21);
            } else if (dineroDisponible <= 181499) {
                alert("Podés comprarte la RTX 3070, precio final con IVA: $" + precioRtx3070 * 1.21);
            } else if (dineroDisponible <= 266199) {
                alert("Podés comprarte la RTX 3080, precio final con IVA: $" + precioRtx3080 * 1.21);
            } else {
                alert("Podés comprarte la RTX 3090, precio final con IVA: $" + precioRtx3090 * 1.21);
            }
        } else {
            if (dineroDisponible <= 99999) {
                alert("No podes comprar nada, ya que la placa mas económica es la RTX 3060 y cuesta: $" + precioRtx3060);
            } else if (dineroDisponible <= 119999) {
                alert("Podés comprarte la RTX 3060, precio: $" + precioRtx3060);
            } else if (dineroDisponible <= 149999) {
                alert("Podés comprarte la RTX 3070, precio: $" + precioRtx3070);
            } else if (dineroDisponible <= 219999) {
                alert("Podés comprarte la RTX 3080, precio: $" + precioRtx3080);
            } else {
                alert("Podés comprarte la RTX 3090, precio : $" + precioRtx3090);
            }
        }
        nuevaCompra = confirm("¿Deseas hacer una nueva compra?");
    } while (nuevaCompra != false);
}

comprarGpu();