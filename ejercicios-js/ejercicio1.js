/*
array1 = [1,2,3,4];

function criterio (array , num){
    var i;
    var b;
    for (i = 0 ; i < array.lenght; i++ ){
        if (array[i] === num) {b = true
        }else {b = false};
    }
    return b;
}

var boolean = (criterio(array1 , 2));
console.log(boolean);
function siVacio(){
   return console.log('El valor ' + num + ' no fue hallado');
}

function buscar (array , criterio , siVacio ){
    if (criterio(3)){ return console.log('Valor ' + num + ' fue encontrado')
          }
    else {return siVacio()};
}

console.log(buscar);

este codigo NO funciona; esta fue la primera version.
*/

/*
buscar([1,2,3,4,5] , criterio , siVacio);
var boolean , b;
function  criterio  (elem , input ){
    if (elem === input) {
         b = true;
    } else {b = false;}
    return b;
}

function siVacio(){
    message = console.log('Elemento no hallado');
    return message;
}

function buscar(array , unaFuncion ,siVacio){
    for (let i = 0 ; i < array.length ; i++){
        unaFuncion(array[i] , 4);
        
    };
    if (b === true) {msj = console.log('Elemento encontrado');
                    return msj;
} else if (b === false) {siVacio();}
}
este bloque tira mejores resultados pero no los esperados.
*/
/*
let unarray = [1,23,42,4,8];

buscar([1,2,3,4,5] , criterio , siVacio);

var b;
function siVacio(){
    message = console.log('Elemento no hallado');
    return message;
}

function criterio(input, unarray){
    b = unarray.includes(input);
    return b;
}

function buscar(array , unaFuncion , mensaje){
    for (let i = 0 ; i < array.length ; i++){
        unaFuncion(array , 3);
    }
    if (b === true){msj = console.log('Elemento encontrado');
                    return msj;
     } else (mensaje())
}
este codigo tampoco funciona
*/

function siVacio(){
    msj = console.log('Elemento no hallado');
    return msj;
}

function criterio(elemArray , input){
    if (elemArray === input){
        return input;
    }
}

function buscar (unArray , mensaje , criterio){
    for (let i = 0 ; i < unArray.length ; i++){
        const elem = unArray[i];
        criterio(elem , 5);
        }
        return (mensaje());
    }


buscar([1,2,3,4,5] , siVacio , criterio(1 , 5));