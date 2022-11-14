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
const inputTextBusqueda = document.querySelector(".main__busqueda__form__text");
const formularioBusqueda = document.querySelector(".main__busqueda__form");
const ultimaBusqueda = document.querySelector(".main__busqueda__ultimaBusqueda");
const formularioAsistente = document.querySelector(".main__asistente__form");
const inputNombreAsistente = document.querySelector(".main__asistente__form__text__nombre");
const inputDineroAsistente = document.querySelector(".main__asistente__form__number__dinero");
const inputNecesitaFactura = document.querySelector(".main__asistente__form__factura__checkbox");
const resultadoAsistente = document.querySelector(".main__asistente__resultado");

//eventos

formularioBusqueda.onsubmit = (e) => {
    e.preventDefault();
    const inputBusqueda = (inputTextBusqueda.value).toUpperCase();
    busquedaGpu(inputBusqueda, inputTextBusqueda.value);
}

formularioAsistente.onsubmit = (e) => {
    e.preventDefault();
    const inputNombre = inputNombreAsistente.value;
    const arrayInputNombre = inputNombre.split(" "); //de aca a la linea 51 lo que hago es que cada palabra ingresada tenga su primer letra mayuscula
    for (let i = 0; i < arrayInputNombre.length; i++) {
        arrayInputNombre[i] = arrayInputNombre[i].charAt(0).toUpperCase() + arrayInputNombre[i].slice(1);
    }
    const inputNombreMayus = arrayInputNombre.join(" ");
    const inputDinero = inputDineroAsistente.value;
    const inputFactura = inputNecesitaFactura.checked;
    comprarGpu(inputNombreMayus, inputDinero, inputFactura);
}

//funcion que hace busqueda de GPUs sobre el array, manipula dom, mete y recupera localStorage
//y tambien convierte obj a json y viceversa

function busquedaGpu(e, x) {
    const resultado = productos.find(el => el.name === e);
    localStorage.setItem('ultimaBusqueda', x)
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
    const keyValue = localStorage.getItem('ultimaBusqueda');
    ultimaBusqueda.innerHTML = '<span>Ultima busqueda realizada: ' + keyValue + '</span>';
}

//funcion que hace de asistente para compra de GPU, manipula DOM y mete localStorage

function comprarGpu(e, x, z) {
    localStorage.setItem('nombreCliente', e);
    localStorage.setItem('dineroDisponible', x);
    if (z) {
        if (x <= 120999) {
            resultadoAsistente.innerHTML = "Hola " + e + ": No podes comprar nada, ya que la placa mas económica + IVA es la " + producto1.name + " y cuesta: $" + producto1.price * 1.21;
            localStorage.setItem('puedeComprar', 'No puede comprar nada');
        } else if (x <= 145199) {
            resultadoAsistente.innerHTML = "Hola " + e + ": Podés comprarte la " + producto1.name + ", precio final con IVA: $" + producto1.price * 1.21;
            localStorage.setItem('puedeComprar', producto1.name);
        } else if (x <= 181499) {
            resultadoAsistente.innerHTML = "Hola " + e + ": Podés comprarte la " + producto2.name + ", precio final con IVA: $" + producto2.price * 1.21;
            localStorage.setItem('puedeComprar', producto2.name);
        } else if (x <= 266199) {
            resultadoAsistente.innerHTML = "Hola " + e + ": Podés comprarte la " + producto3.name + ", precio final con IVA: $" + producto3.price * 1.21;
            localStorage.setItem('puedeComprar', producto3.name);
        } else {
            resultadoAsistente.innerHTML = "Hola " + e + ": Podés comprarte la " + producto4.name + ", precio final con IVA: $" + producto4.price * 1.21;
            localStorage.setItem('puedeComprar', producto4.name);
        }
    } else {
        if (x <= 99999) {
            resultadoAsistente.innerHTML = "Hola " + e + ": No podes comprar nada, ya que la placa mas económica es la " + producto1.name + " y cuesta: $" + producto1.price;
            localStorage.setItem('puedeComprar', 'No puede comprar nada');
        } else if (x <= 119999) {
            resultadoAsistente.innerHTML = "Hola " + e + ": Podés comprarte la " + producto1.name + ", precio: $" + producto1.price;
            localStorage.setItem('puedeComprar', producto1.name);
        } else if (x <= 149999) {
            resultadoAsistente.innerHTML = "Hola " + e + ": Podés comprarte la " + producto2.name + ", precio: $" + producto2.price;
            localStorage.setItem('puedeComprar', producto2.name);
        } else if (x <= 219999) {
            resultadoAsistente.innerHTML = "Hola " + e + ": Podés comprarte la " + producto3.name + ", precio: $" + producto3.price;
            localStorage.setItem('puedeComprar', producto3.name);
        } else {
            resultadoAsistente.innerHTML = "Hola " + e + ": Podés comprarte la " + producto4.name + ", precio : $" + producto4.price;
            localStorage.setItem('puedeComprar', producto4.name);
        }
    }
}