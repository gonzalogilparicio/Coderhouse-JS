//manipulacion DOM

const resultadoBusqueda = document.querySelector(".main__busqueda__resultado");
const inputTextBusqueda = document.querySelector(".main__busqueda__form__text");
const formularioBusqueda = document.querySelector(".main__busqueda__form");
const ultimaBusqueda = document.querySelector(".main__busqueda__ultimaBusqueda");
const objetoEncontradoRender = document.querySelector(".main__busqueda__objetoEncontradoRender");

//eventos

formularioBusqueda.onsubmit = (e) => {
    if (inputTextBusqueda.value == '') {
        e.preventDefault();
        Toastify({
            text: "No ingresaste ninguna búsqueda",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    } else {
        e.preventDefault();
        const inputBusqueda = (inputTextBusqueda.value).toUpperCase();
        busquedaGpu(inputBusqueda, inputTextBusqueda.value);
    }
}

//si ultimaBusqueda está en el localStorage, lo sigue renderizando

const keyValue = localStorage.getItem('ultimaBusqueda');
keyValue !== null && (ultimaBusqueda.innerHTML = '<span>Ultima búsqueda realizada: ' + keyValue + '</span>');
    


//funcion que hace busqueda de GPUs sobre el array, manipula dom, mete y recupera localStorage
//y tambien convierte obj a json y viceversa

function busquedaGpu(e, x) {    
    const resultado = productos.find(el => el.name === e);    
    localStorage.setItem('ultimaBusqueda', x)
    if (resultado == undefined) {
        resultadoBusqueda.innerHTML = '<p>No tenemos esa GPU en stock en este momento</p>';
        localStorage.setItem('objetoEncontrado', 'Sin coincidencias');
        inputTextBusqueda.value = '';
    } else {
        const {stock,name,price} = resultado;
        resultadoBusqueda.innerHTML = '<p>Tenemos ' + stock + ' unidades en stock de la ' + name + ' con un valor de $' + price + '</p>';
        const resultadoObjetoJson = JSON.stringify(resultado);
        localStorage.setItem('objetoEncontrado', resultadoObjetoJson);
        const infoStorageObjJson = JSON.parse(localStorage.getItem('objetoEncontrado'));
        objetoEncontradoRender.innerHTML = '<p>Objeto encontrado: ' + infoStorageObjJson.name + ' con número de ID: ' + infoStorageObjJson.id + '</p>';
    }
    const keyValue = localStorage.getItem('ultimaBusqueda');
    ultimaBusqueda.innerHTML = '<span>Ultima búsqueda realizada: ' + keyValue + '</span>';
    inputTextBusqueda.value = '';
}