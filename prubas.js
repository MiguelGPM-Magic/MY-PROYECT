
let tareas = [ // Creamos un array con objetos
    { id: 1, nombre: "Tarea 1", completada: false},
    { id: 2, nombre: "Tarea 2", completada: true},
]

const agregarTarea = (nombreTarea) => { // Creamos una función para agregar tareas
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

