let toDoHTML = document.getElementById("formulario");
let toDo = [];
let texto = document.getElementById("agregar");
function prueba(){
    if(texto.value!=""){
        toDo.push({
            checked:false,
            text:texto.value
        })
    }
        toDoHTML.innerHTML=""
        for(i in toDo){
            if(toDo[i].checked){
                toDoHTML.innerHTML+=`<br><input type="checkbox" class="form-check-input" id="${i}" onclick="done(${i})" checked><s style="color:grey;">${toDo[i].text}</s>`
            }else{
                toDoHTML.innerHTML+=`<br><input type="checkbox" class="form-check-input" id="${i}" onclick="done(${i})">`+toDo[i].text
            }
        }
    texto.value=""
}
function done(i){
    toDo[i].checked=!toDo[i].checked;
    prueba();
}

