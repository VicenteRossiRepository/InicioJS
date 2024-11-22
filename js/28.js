// Clases

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formaterProducto(){
        return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
    }

    devolverPrecio(){
        return `El precio de este producto es $${this.precio}`;
    }
}

const monitor = new Producto(`Monitor curvo de 48"`, 800);
const laptop = new Producto(`laptop`, 300);

console.log(laptop.devolverPrecio());
console.log(monitor.formaterProducto());