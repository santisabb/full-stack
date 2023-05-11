function cuad(x){
    return x * x;
}

function cubo(x){
    return x * x * x;
}
array = [1,2,3,4,5]

console.log('map: mapeo los valores del array y los reemplazo por sus cuadrados', array.map(cuad));

console.log('map: mapeo los valores del array y los reemplazo por sus CUBOS', array.map(cubo));

function mostrar (element){
    console.log('Elemento: ',element);
}
array.forEach( mostrar);
