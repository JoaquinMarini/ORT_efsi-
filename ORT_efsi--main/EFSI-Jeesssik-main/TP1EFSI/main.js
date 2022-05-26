/*Se plantea crear un formulario html que contenga los siguientes elementos:

Input de texto para ingresar la nota de Matemática
Input de texto para ingresar la nota de Lengua
Input de texto para ingresar la nota de EFSI
Un div donde se visualice el resultado obtenido
Los siguientes botones:
Calcular Promedio del alumno
Mostrar la materia que mayor nota obtuvo

Validaciones: 

Los campos deben ser obligatorios. Si no esta completo utilizar un alert para indicarlo.
Las notas deberán ser validadas con javascript. El valor deberá ser entre 1 y 10 inclusives. La validación
debe realizarse al momento de presionar una tecla invocando al evento correspondiente.
Si es correcto se muestra en verde y si no es correcto en rojo.
El resultado del promedio debe mostrarse en verde si es mayor o igual a 6 y en rojo si es menor.
El nombre de la materia que mayor nota tuvo debe mostrarse en Azul. Si son varias las materias mostrar
todos los nombres.
Propuesta opcional:

Ademas del div con los texto sumar una imagen que represente lo ocurrido al presionar cada botón. Usar
un único tag img y mediante javascript modificar el src para modificar la imagen. Pueden usar gif animados
si lo desean para ponerle mas onda. Por ejemplo: cuando el promedio sea mayor a 6 mostrar algun festejo.
Si reprobo mostrar algo que represente dicha situación. 
En caso de realizarlo, la imagen debería comenzar mostrando algo de bienvenida, y se ira modificando según
las acciones que se realicen.
Para dicha solución deberán armar un archivo index.html y un archivo funciones.js y vincularlos entre si.

Todos los resultados deberán mostrarse en el mismo div con los valores correspondientes y el color según
corresponda.

*/
let notas = document.getElementById("formulario")
function NM(){
    let notaMayor = -1;
    errorHTML=document.getElementById("error")
    if(Number(notas[0].value) && Number(notas[1].value) && Number(notas[2].value) && Number(notas[0].value)<=10 && Number(notas[0].value)>=0 && Number(notas[1].value)<=10 && Number(notas[1].value)>=0 && Number(notas[2].value)<=10 && Number(notas[2].value)>=0){
        for (let i = 0; i < notas.length-2; i++) {
            if (notaMayor<Number(notas[i].value)) {
                notaMayor=Number(notas[i].value)
                materiaMayorNota = notas[i].name
            }else if(notaMayor==notas[i].value){
                materiaMayorNota=materiaMayorNota + ", " + notas[i].name
            }
        }
        mayorNotaHTML=document.getElementById("mayorNota")
        mayorNotaHTML.outerHTML = `<h5 id="mayorNota">La/s materia/s con la nota mayor es/son: <strong style="color: blue">${materiaMayorNota}</strong> con: ${notaMayor}</h5>`;
        errorHTML.innerHTML=""
    }else{
        errorHTML.innerHTML="Ingrese numeros mayores o iguales a 0 y menores o iguales que 10"
    }
}
function pr(){
    let promedio=0;
    errorHTML=document.getElementById("error")
    if(Number(notas[0].value) && Number(notas[1].value) && Number(notas[2].value) && Number(notas[0].value)<=10 && Number(notas[0].value)>=0 && Number(notas[1].value)<=10 && Number(notas[1].value)>=0 && Number(notas[2].value)<=10 && Number(notas[2].value)>=0){        promedio = Number(notas[0].value) + Number(notas[1].value) + Number(notas[2].value)
        promedio = promedio/3
        promedioHTML=document.getElementById("promedio")

        if(promedio < 6){
            promedioHTML.innerHTML = `<h5 id="promedio">El promedio es : <strong style="color: #FF0000">${promedio}</strong></h5>`;

        }else{
            promedioHTML.innerHTML = `<h5 id="promedio">El promedio es : <strong style="color: #55FF00">${promedio}</strong></h5>`;
        }
        imagesHTML=document.getElementById("imagenes")
        if(promedio<6){
            imagesHTML.outerHTML='<img id="imagenes" src="Images/minionsReprobado.gif">'
        }else if(promedio==6){
            imagesHTML.outerHTML='<img id="imagenes" src="Images/minions6.gif">'
        }else if(promedio==10){
            imagesHTML.outerHTML='<img id="imagenes" src="Images/minionCumple.gif">'
        }else{
            imagesHTML.outerHTML='<img id="imagenes" src="Images/minionsFestejando.gif">'
        }
        errorHTML.innerHTML=""
    }else{
        errorHTML.innerHTML="Ingrese numeros mayores a 0 y menores que 10"
    }
}
