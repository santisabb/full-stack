function paraCada(unArray, unaFuncion) {
    for (i=0; i < unArray.length; i++) {
      unaFuncion(unArray[i], i);
    }
  }
  
  paraCada([10,20,'hola', 'que', 87], function(elem, index) {
    console.log('Elemento:', elem, index)
  });
  
  function mapear(unArray, unaFuncion) {
    var answer = [];
    for (i=0; i < unArray.length; i++) {
      answer.push(unaFuncion(unArray[i], i));
    }
    return answer;
  }
  
  function cuad(a) {
    return a*a;
  }
  
  console.log(mapear([1,2,3,4,5], cuad));
                  