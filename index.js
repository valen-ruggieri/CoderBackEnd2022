class Usuario {
    
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros =  [];
        this.mascotas = [];

    }

    getFullName(){
        console.log(this.nombre + " " + this.apellido)
    }

    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota)
        console.log(this.mascotas)
    }

    countMascotas(){
        console.log(this.mascotas.length)
    }

    addBook(nombre1, autor1){
        this.libros.push({nombre:nombre1,autor:autor1})    

    }

    getBookNames(){
        
        for (let index = 0; index < this.libros.length; index++) {
            console.log(this.libros[index].nombre)
            
        }
    }
}


const usuario = new Usuario()

usuario.nombre = 'Valentin'
usuario.apellido = 'Ruggieri'

usuario.getFullName();

usuario.addMascota('Salchicha 1');
usuario.addMascota('Salchicha 2');
usuario.addMascota('Salchicha 3');


usuario.countMascotas();


usuario.addBook('Peter Pan', 'Ortiz de la Rosa')
usuario.addBook('Peter Pan2', 'Ortiz de la Rosa2')

usuario.getBookNames()
