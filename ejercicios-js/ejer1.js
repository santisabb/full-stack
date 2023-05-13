buscar([1,2,3] , criterio , siVacio);
var  b;
function  criterio  (elem , input ){
    if (elem === input) {
         return true;
    } return false;
}

function siVacio(){
    message = console.log('Elemento no hallado');
    return message;
}

function buscar(array , unaFuncion ,mensaje){
    for (let i = 0 ; i < array.length ; i++){
     b =  unaFuncion(array[i] , 2);
        
    };
    if (b === true) {msj = console.log('Elemento encontrado');
                    return msj;
} else if (b === false) {mensaje();}
}