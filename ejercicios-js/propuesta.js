function solucionarRompeCabezas(N){
  var A = 1;
var B = 1;
var C = 1;
var D = 1;

for (i = 1 ; i < N ; i++){
    resultado = 3 * D + 1 * C + 4 * B + 1 * A;
A = B;
B = C;
C = D;
D = resultado;
}

return D % 10000000000 // últimos 10 dígitos de var_D
}

solucionarRompeCabezas(10);
solucionarRompeCabezas(100);
solucionarRompeCabezas(Math.pow(2023, 100));