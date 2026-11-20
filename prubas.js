
let tareas = [ // Creamos un array con objetos
    { id: 1, nombre: "Tarea 1", completada: false},
    { id: 2, nombre: "Tarea 2", completada: true},
]

const agregarTarea = (nombreTarea) => { // Creamos una función para agregar tareas y en los parentesis recibimos el nombre de la tarea
    const nuevaTarea = { // Creamos un objeto con la nueva tarea
        id: tareas.length + 1, // Asignamos un id a la nueva tarea
        nombre: nombreTarea, // Asignamos el nombre de la tarea
        completada: false // Asignamos el estado de la tarea como incompleta
    };
    tareas.push(nuevaTarea);
};

const mostrarTareas = () => {
    tareas.forEach(tarea => {
        console.log(`ID : ${tarea.id}, Nombre de la tarea: ${tarea.nombre}, Estado de la tarea: ${tarea.completada === true ? "Completada" : "Incompleta"}`)
    })
}

//Crea la función completarTarea(id): debe buscar en tu arreglo tareas la que coincida con el id recibido y cambiar su propiedad completada a true. Si no existe ese id, imprime un mensaje avisando que no se encontró.
const completarTarea = (id) => { // Creamos una función para completar tareas y en los parentesis recibimos el id de la tarea
   const buscarTarea = tareas.find((tarea) => tarea.id === id) //  en la variable buscar tarea, tomamos la lista de tareas con el metodo fin que el metodo find() va a tomar cada elemento de el arreglo y va a comparar el id de cada elemnto con el id que recibimos por parametro, si encuentra una coincidencia nos devuelve el objeto completo de la tarea que coincide con el id
   if (buscarTarea) { // Si si coincide el id con alguna tarea, entonces entramos al if
    buscarTarea.completada = true} // cambiamos la propiedad completada de la tarea a true
    else { // Si no coincide el id con alguna tarea, entonces entramos al else
        console.log("Tarea no encontrada") // Imprimimos un mensaje avisando que no se encontró la tarea
    }
   
}

const eliminarTarea = (id) => { // Creamos la funcion eliminarTarea y en los parentesis recibimos el id de la tarea
    tareas = tareas.filter((tarea) => tarea.id !== id) // Vamos a reasignar el arreglo, con el metodo filter que va a tomar cada elemento de el arreglo y no
}

agregarTarea("Tarea 3"); // Agregamos una nueva tarea
mostrarTareas(); //invocamos la función para mostrar las tareas
completarTarea(); // Completamos la tarea con id 1
eliminarTarea(); // Eliminamos la tarea con id 2

