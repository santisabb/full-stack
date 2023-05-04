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