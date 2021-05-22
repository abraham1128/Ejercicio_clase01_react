class SerVivo {

    caminar (nombre) { //Método

        console.log('Ahora esta caminando: ' + nombre);

    }

}

class Persona extends Servivo{

    //Constructor
    constructor(nombre) {
        this.nombre = nombre;
      }

      moverse() { //Método

        caminar(this.nombre) ;

      }
}

//Instancia

const nombre = 'Abraham Antonio';
const persona = new Persona(nombre) ;
persona.moverse();
