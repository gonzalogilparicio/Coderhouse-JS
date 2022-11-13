//3ra entrega --- ya no se usa alert ni prompt, se hace mediante inputs y botones
//agregar JSON, localStorage(meter y recuperar), manipulacion DOM y eventos

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
const producto2 = new Producto(2, 'RTX 3070', 120000, 12);
const producto3 = new Producto(3, 'RTX 3080', 150000, 19);
const producto4 = new Producto(4, 'RTX 3090', 220000, 5);
productos.push(producto1, producto2, producto3, producto4);

//manipulacion DOM

const resultadoBusqueda = document.querySelector(".main__busqueda__resultado");
const botonBusqueda = document.querySelector(".main__busqueda__form__button");
const inputTextBusqueda = document.querySelector(".main__busqueda__form__text");
const formularioBusqueda = document.querySelector(".main__busqueda__form");
const ultimaBusqueda = document.querySelector(".main__busqueda__ultimaBusqueda");

//eventos

formularioBusqueda.onsubmit = (e) => {
    e.preventDefault();
    const inputBusqueda = (inputTextBusqueda.value).toUpperCase();
    busquedaGpu(inputBusqueda, inputTextBusqueda.value);
}

//funcion que hace busqueda de GPUs sobre el array, manipula dom, mete y recupera localStorage
//y tambien convierte obj a json y viceversa

function busquedaGpu(e, x) {
    const resultado = productos.find(el => el.name === e);
    localStorage.setItem('resultadoBusqueda', x)
    if (resultado == undefined) {
        resultadoBusqueda.innerHTML = '<p>No tenemos esa GPU en stock en este momento</p>';
        localStorage.setItem('objetoEncontrado', 'Sin coincidencias');
    } else {
        resultadoBusqueda.innerHTML = '<p>Tenemos ' + resultado.stock + ' unidades en stock de la ' + resultado.name + ' con un valor de $' + resultado.price + '</p>';
        const resultadoObjetoJson = JSON.stringify(resultado);
        localStorage.setItem('objetoEncontrado', resultadoObjetoJson);
        const infoStorageObjJson = JSON.parse(localStorage.getItem('objetoEncontrado'));
        console.log(infoStorageObjJson);
    }
    for (let i = 0; i < localStorage.length; i++) {
        const keyName = localStorage.key(i);
        const keyValue = localStorage.getItem(keyName); //consultar esto de que keyvalue se pueda leer por fuera del for
        ultimaBusqueda.innerHTML = '<span>Ultima busqueda realizada: ' + keyValue + '</span>'; //para sacar esto por fuera del for
    }
}

//funcion que hace de asistente para compra de GPU

function comprarGpu() {
    let nuevaCompra;
    do {
        let nombreCliente = prompt("Ingresá tu nombre");
        let dineroDisponible = parseInt(prompt(nombreCliente + ": Estás por comprar una placa de video \n Ingresá el dinero que tenés disponible"));
        let deseaFactura = confirm("¿Necesitás una Factura?\n\n Aceptar --> Si \n Cancelar --> No");
        if (deseaFactura) {
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
    if (nuevaCompra === false) {
        alert("Gracias por tu visita!");
    }
}