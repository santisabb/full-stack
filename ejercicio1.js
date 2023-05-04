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
*/
buscar([1,2,3,4,5] , criterio , siVacio);

function  criterio  (elem , input ){
    if (elem === input) {
        return true;
    } else {return false;}
}

function siVacio(){
    message = console.log('Elemento no hallado');
    return message;
}

function buscar(array , criterio ,siVacio){
    for (let i = 0 ; i < array.length ; i++){
        criterio(array[i] , 6);
        
    };
    if (criterio() == true) {msj = console.log('Elemento encontrado');
                    return msj;
} else if (criterio() == false) {siVacio();}
}

