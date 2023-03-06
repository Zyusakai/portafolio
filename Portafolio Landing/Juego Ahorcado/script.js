var arreglo = ['l', 'l' , 'a' ,'n' ,'t', 'a' ,'s','a']
var arregloRepetidos = [];


for (let i = 0; i < arreglo.length; i++) {
    for (let j = i+1; j < arreglo.length; j++) {
    const indice = arregloRepetidos.findIndex(elemento=>elemento === i);

        if (arreglo[i]==arreglo[j] /*&& indice == -1*/) {
            
            arregloRepetidos.push(i)
            arregloRepetidos.push(j)
        }
        else{}
    }
    
  paresRepetidos = (arregloRepetidos.length)/2;
}

for (let i = 0; i <= paresRepetidos; i++) {
    arreglo[arregloRepetidos[0]]
    
}

arreglo[arregloRepetidos[0]]
 console.log(paresRepetidos)