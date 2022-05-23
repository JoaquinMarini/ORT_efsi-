let toDoHTML = document.getElementById("formulario");
let toDo = [];
let texto = document.getElementById("agregar");
function prueba(){
    if(texto.value!=""){
        toDo.push({
            checked:false,
            text:texto.value
        })
        toDoHTML.innerHTML=""
        for(i in toDo){
            toDoHTML.innerHTML+='<br><input type="checkbox" class="form-check-input">'+toDo[i].text
        }
        console.log(toDo.length)
        console.log(toDo[toDo.length-1].text)
    }
    texto.value=""
}

