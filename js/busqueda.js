//manipulacion DOM

const resultadoBusqueda = document.querySelector(".main__busqueda__resultado");
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