class SerVivo {

    caminar (nombre) { //Método
        console.log('Ahora esta caminando: ' + nombre);
    }

}

class Persona extends SerVivo{

    //Constructor
    constructor(nombre) {
        super();
        this.nombre = nombre;
      }

      moverse() { //Método

        super.caminar(this.nombre) ;

      }
}

//Instancia

const nombre = 'Abraham Antonio';
const persona = new Persona(nombre) ;
persona.moverse();
