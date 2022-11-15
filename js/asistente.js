//manipulacion DOM

const formularioAsistente = document.querySelector(".main__asistente__form");
const inputNombreAsistente = document.querySelector(".main__asistente__form__text__nombre");
const inputDineroAsistente = document.querySelector(".main__asistente__form__number__dinero");
const inputNecesitaFactura = document.querySelector(".main__asistente__form__factura__checkbox");
const resultadoAsistente = document.querySelector(".main__asistente__resultado");

//eventos

formularioAsistente.onsubmit = (e) => {
    e.preventDefault();
    const inputNombre = inputNombreAsistente.value;
    const arrayInputNombre = inputNombre.split(" "); //de aca a la linea 18 lo que hago es que cada palabra ingresada tenga su primer letra mayuscula
    for (let i = 0; i < arrayInputNombre.length; i++) {
        arrayInputNombre[i] = arrayInputNombre[i].charAt(0).toUpperCase() + arrayInputNombre[i].slice(1);
    }
    const inputNombreMayus = arrayInputNombre.join(" ");
    const inputDinero = inputDineroAsistente.value;
    const inputFactura = inputNecesitaFactura.checked;
    comprarGpu(inputNombreMayus, inputDinero, inputFactura);
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