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