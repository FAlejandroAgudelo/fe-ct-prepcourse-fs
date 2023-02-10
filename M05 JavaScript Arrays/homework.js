/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}
devolverPrimerElemento([1,2,3,4,5]);

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[4];
}
devolverUltimoElemento([1,2,3,4,5]);

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}
obtenerLargoDelArray([10,42,35,22,11]);

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = array.map((num) => {
      return num + 1;
   });
   return masUno;
}
incrementarPorUno([10,15,22,52,13]);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
      return array;
}
agregarItemAlFinalDelArray(["amarillo","azul","rojo"],"morado");

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
      return array;
}
agregarItemAlComienzoDelArray(["amarillo","azul","rojo"],"morado");

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var fraseCompleta = palabras.join(" ");
      return fraseCompleta;
}
dePalabrasAFrase(["Buen","Dia!"]);

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   var palabra = array.join("");
      var letras = palabra.split("");

      for (let i = 0; i < letras.length; i++){
            if (letras[i] === elemento){
               return true;
            }
            
      }
      return false;
}
arrayContiene(["Hello","word"],"H");
arrayContiene(["Hello","word"],"f");

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0;

   for(var i = 0; i < arrayOfNums.length; i++){

      suma = suma + arrayOfNums[i];

   }
   return suma;
}
agregarNumeros([2,5,6,9,10,14,18,22,33]);

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var promedio = 0;

      for(var i = 0; i < resultadosTest.length; i++){
            promedio = promedio + resultadosTest[i] / 5;
      }
      return promedio;
}
promedioResultadosTest([2,5,1,4,5]);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var num = 0;

      for(var i = 0; i < arrayOfNums.length; i++){
            if(arrayOfNums[i] > num ){
               num = arrayOfNums[i];
            }
            
      }
      return num;
}
numeroMasGrande([2,5,91,4,55]);
numeroMasGrande([2,5,91,4,500]);
numeroMasGrande([2,1000,91,4,55]);

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let num = 1;
      if(arguments.length === 0) return 0;
      else if(arguments.length === 1) return arguments[0];
      else {
            for(let i = 0; i < arguments.length; i++){
                num = num * arguments[i];
            }
            return num;
      }
}
multiplicarArgumentos(3,2,3);

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var mayor = 0;
   mayor = array.filter(num => num > 18);
   return mayor;
}
cuentoElementos([2,5,66,28,7,10]);

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   let diaSemana = [1,2,3,4,5,6,7];

   for(let i = 0; i < diaSemana.length; i++){
               
      if(diaSemana[i] === numeroDeDia){
               
         if(diaSemana[i] === 7 || diaSemana[i] === 1){
               return "Es fin de semana";
         }else{
               return "Es dia laboral"
         }
      }
   }
}
diaDeLaSemana(1);
diaDeLaSemana(3);

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   
      var str = num.toString();
      var num2 = str.split("");

      for (var i = 0; i < num2.length; i++){
            if(num2[0] === "9"){
               return true;
            }
            
      }
      return false;
}
empiezaConNueve(9692);
empiezaConNueve(6692);

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   return array.every(e => array[0] == e);
}
todosIguales([2,2,2,2,2]);

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var nuevo = [];

      for(var i = 0; i < array.length; i++){

            if(array[i] === "Enero") {      

               nuevo.push(array[i]);

            }else if (array[i] === "Marzo"){

               nuevo.push(array[i]);

            }else if (array[i] === "Noviembre"){

               nuevo.push(array[i]);
            }
      }
      if (nuevo.length !== 3 ){
            return "No se encontraron los meses pedidos";
      }
   return nuevo;
}
mesesDelAño(["Noviembre","Marzo","Enero"]);


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let tabla = [];
      for(let i = 0; i < 11; i++){

            tabla.push(6 * i);
      }
      return tabla;
}
tablaDelSeis()

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let num = [];
      for(let i = 0; i < array.length; i++){
            if (array[i] > 100){
               num.push(array[i])
            }
      }
      return num;
}
mayorACien([5,20,100,101,20,105]);

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
