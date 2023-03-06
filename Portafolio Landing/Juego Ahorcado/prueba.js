

//Declaraciónes de variables botones
var boton = document.querySelector("#enviar");
var botonr = document.querySelector("#enviarRespuesta");
var botona = document.querySelector("#mostrarRespuesta");
var botone = document.querySelector("#enviarLetra");

//variables para las funciones
var imagen;
var contenedorCasillas = document.querySelector(".casillas");
var casillas = document.querySelector(".casillas");
var hojaDeEstilos = document.styleSheets[0];
var entradaGlobal;
var letrar;
var i=0;


    function capturarEntrada() {
        // funcion que recupera la palabra ingresada
        //variables locales :entradaLocal; arreglo;
        //variable global: entradaGlobal;
    //------------------------------------------------------------------------
        //variable que recupera la palabra ingresada por el usuario en el DOM
        var entradaLocal = document.querySelector("#palabra").value;
        //igualacion de la variable local a la variable global para su uso
        entradaGlobal = entradaLocal;
        //variable que aloja la palabra convertida a arreglo
        const arreglo = entradaLocal.split('');
        //loop que proporciona cada letra del arreglo a la funcion crearOutput 
        for (let i = 0; i < arreglo.length; i++) {
            if(arreglo[i]==arreglo[i-1]){
                crearOutput(arreglo[i],"-doble");
            }else{
            
            crearOutput(arreglo[i],"-simple");}
            }
        //funcion que borra el contenido de los campos ingresados
            limpiar();
    }

    function crearOutput(letra,frase){
        
        //función que crea un output en el DOM por cada letra provista por la funcion capturarEntrada
        //varaibles Locales: output; contenedorCasillas;
     //--------------------------------------------------------------------------------   
        // Crear el elemnto output en el DOM
        var output = document.createElement("output");
        //Asignar el valor letra(arreglo[i]) al valor de output
        output.value = letra;
        //hacer que el elemento "contenedorCasillas" de DOM sea el padre del output
        contenedorCasillas.appendChild(output);
        //al nuevo elemento output se le asigna la clase letra(arreglo[i])
        output.classList.add(letra+frase);
        //función que evalua cada letra provista por la función capturarEntrada de la palabra y pone en color blanco una selección 
        letrasToogle(letra,frase);
        
    }

    function letrasToogle(letra,frase){
    //funcion que recibe una letra provista por la función capturarEntrada, evalua si la letra se encuentra en el arreglo, de ser asi cambia el color a blanco para ocultarla y de no ser asi la deja en negro
        const letrasBlancas = ['i','u','b','d','g','j','l','n','q' ,'s' ,'v' ,'y','p'];
        const indice = letrasBlancas.findIndex(elemento=>elemento === letra);
        var casilla = document.querySelector("."+letra+frase);
        if(indice == -1){
             casilla.style.color = "white";
            }
        else{
         console.log("no hay clases con la letra " + letra);
        }
    }

    function capturarRespuesta() {
            console.log("click respuesta")
            let respuestaLocal = document.querySelector("#respuesta").value;
            if (respuestaLocal == entradaGlobal) {
                console.log("te has salvado")
            } else{
                console.log('no has atinado')
                error();
            }
            limpiar()
    }
  
    function mostrarResultado(){
        console.log('mostrar resultado')
        var casillas = document.getElementsByTagName("output");
        
        for (let i = 0; i < casillas.length; i++) {
            casillas[i].style.color = "black";
        }
    gameOver();
    }
    
    function gameOver(){
        setTimeout(function(){
        window.location.reload();
      }, 2000);
    alert('Fin del Juego');
    }

    function evaluarLetra(){
        //función que evalua la letra ingresada en el input y evalua si es coincidente con alguna letra de la palabra ingresada, de ser asi la hace visible
            console.log(entradaGlobal)
        //se obtiene la letra del DOM
        var letra = document.querySelector("#letra").value;
        console.log(letra)
        //se convierte en arreglo la entradaGlobal para operarla
        const letraArr = entradaGlobal.split('');
        console.log(letraArr)
        //se evalua con si dentro del arreglo se encuentra la letra ingresada siendo -1 negativo
        const indice = letraArr.findIndex(elemento=>elemento === letra);
        console.log(indice)
        //condicion si se encuentra la letra en el arreglo y la letra que se encuentra no se repite a la izquierda del arreglo
        let condicionSimple = false;
        if (indice != -1 && letraArr[indice]!=letraArr[indice-1]) {
        condicionSimple = true
        console.log(letraArr[indice]);
        console.log(letraArr[indice-1]);
        console.log(condicionSimple);

        //rutina si la letra que se selecciona es simple es decir que no hay dos letras iguales juntas 
        var letrar = document.querySelector("." + letra+ "-simple")
        //metodo que modifica la propiedad css del dom seleccionado por la variable "letrar"
        letrar.style.color = "black";

        console.log(indice);
        //condicional que evalua si la letra del arreglo coincidente encuentra letra repetida a la derecha de la letra coincidente
        
        }
        if(indice != -1 && /*letraArr[indice]*/ letra == letraArr[indice+1]){
        let condicionDoble = true;

          console.log(condicionDoble);
        //rutina si la letra que se selecciona es simple es decir que no hay dos letras iguales juntas 
        var letrar = document.querySelector("." + letra+ "-simple")
        //metodo que modifica la propiedad css del dom seleccionado por la variable "letrar"
        letrar.style.color = "black";

        //se declara la variable para seleccionar una letra repetida de la entradaGlobal
        var letrar2 = document.querySelector("."+ letra + "-doble")
        //metodo que modifica la propiedad css del dom seleccionado por la variable "letrar2"
        letrar2.style.color = "black";

        //console.log("la letra no esta dentro de la palabra"+i)
     let condicionElse = false;   
    } 
    else if(indice == -1){
        condicionElse = true
        console.log('la condicion Else es ' + condicionElse)
        error();
    }
        
    }

    function error(){
        console.log("la letra no esta dentro de la palabra"+i)
        i++;
        dibujar(i);
        function dibujar(i){
            var imagen = document.querySelector(".imagen"+i);
            imagen.style.display = "block"

        }
    }

    function limpiar(){
        document.querySelector("#palabra").value = "";
        document.querySelector("#respuesta").value = "";
    }    



    //Controles
    boton.addEventListener("click", capturarEntrada);
    botonr.addEventListener("click", capturarRespuesta);
    botona.onclick = mostrarResultado;
    botone.onclick = evaluarLetra;
