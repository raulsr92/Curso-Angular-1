import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  tasks2 = signal([
    "Instalar Angular CLI",
    "Crear proyecto",
    "Crear componentes",
    "Añadir signals"
  ]);


  changeHandler = (event: Event)=>{

    //Capturar tarea

    const inputElement = event.target as HTMLInputElement
    const newTask =inputElement.value

    console.log(`Nueva tarea ingresada: ${newTask}`)

    // Agregar tarea al array de tareas (recuerda que es signal)

    this.tasks2.update((array)=> [...array,newTask] )

    // Limpiar input

    inputElement.value= ""

  }

  deleteTask = (index: number) =>{

    // Eliminar la tarea

     this.tasks2.update((array) => array.filter((item, posicion)=> posicion !== index))

  }
}
