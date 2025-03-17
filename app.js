let lista_nombres=[];
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo(){
    //se captura los nombres del input
    let nombre=document.querySelector('.input-name').value;

    //se verifica si existe valor en el casillero
    if(!nombre){
        alert("Ingrese un nombre");
        return;
    }
    
    //si existe valor se ingresa el valor en la lista
    lista_nombres.push(nombre);    

    //una vez ingresado se limpia la casilla
    document.querySelector('.input-name').value="";
    
    actualizarLista();
}

function actualizarLista() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = ""; // Limpia la lista antes de actualizar

    lista_nombres.forEach(nombre => {
        let li = document.createElement('li');
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function sortearAmigo(){
    if(lista_nombres.length==0){
        alert("La lista de amigos esta vacia");
        return;
    }

    let numero= Math.round(Math.random()*lista_nombres.length);
    if(numero==lista_nombres.length){
        numero=numero-1;
    }
    let amigo_seleccionado=lista_nombres[numero];

    // Obtener la lista y limpiar su contenido
    let ul = document.getElementById("resultado");
    ul.innerHTML = ""; // Borra el contenido anterior

    // Crear y agregar un nuevo <li> con el amigo seleccionado
    let li = document.createElement("li");
    li.textContent = "El amigo secreto es "+amigo_seleccionado;
    ul.appendChild(li);


}
