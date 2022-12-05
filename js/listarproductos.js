//dom

const listaProductos = document.querySelector(".main__listarproductos__ul");

//funcion asincrona

fetch("../js/productos.json")
    .then((result) => result.json())
    .then(data => {
        mostrarProductos(data);
        Toastify({
            text: "Productos mostrados correctamente",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    })
    .catch((err) => {
        Toastify({
            text: "Hubo un error al conectarse con la base de datos",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    });

function mostrarProductos(productos) {
    productos.forEach(elem => {
        const li = document.createElement("li");
        li.innerText = elem.name + " - $" + elem.price;
        listaProductos.append(li);
    });
}