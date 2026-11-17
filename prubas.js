
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

agregarTarea("Tarea 3"); // Agregamos una nueva tarea
mostrarTareas(); //invocamos la función para mostrar las tareas

//Crea la función completarTarea(id): debe buscar en tu arreglo tareas la que coincida con el id recibido y cambiar su propiedad completada a true. Si no existe ese id, imprime un mensaje avisando que no se encontró.
const completarTarea = (id) => { 
   const buscarTarea = tareas.find((tarea) => tarea.id === id);
}


