let i =1;
while (i<=5){
    console.log("Interación While: ", i)
    i++;
}

i=0;
while (i<=10){
    console.log(3, "x ", i, "=", 3*i)
    i++;
}

let mult = 1;
do{
    console.log(5, "x ", mult, "=", 5*mult)
    mult++;
}while(mult<=10);

let n = 10;
do{
    console.log("n ", n)
    n--;
}while(n>=6);

let animales = ["perro" , "gato", "leon", "tigre", "aguila", "gallina", "pato", "culebra", "elefante", "raton"];
let animal = 0;
do{
    console.log("Animal ", animal, " es : ", animales[animal]);
    animal++;

}while(animal<=9);