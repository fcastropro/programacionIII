class Animal {
    public nombre: string;
    constructor(nombre: string){
        this.nombre = nombre;
    }
    emitirSonido(): void{
        console.log(`sonido del animal`);
    }
}

class Gato extends Animal{
    emitirSonido(): void {
        console.log(`Miau`);
    }
}

class Vaca extends Animal{
    emitirSonido(): void {
        console.log(`muuu`);
    }
}

const miGato = new Gato ("Hello Kitty");
miGato.emitirSonido();
const miVaca = new Vaca("Lechera");
miVaca.emitirSonido();