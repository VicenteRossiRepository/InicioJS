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

// Herencia
class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }

    formaterProducto(){
        return `${super.formaterProducto()} y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro(`Libro de JavaScript`, 150, '978-84-98-3856-1');
console.log(libro.formaterProducto());
console.log(monitor.formaterProducto());