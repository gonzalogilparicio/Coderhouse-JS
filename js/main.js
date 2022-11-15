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