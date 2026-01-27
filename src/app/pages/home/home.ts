import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.models';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  tasks2 = signal<Task[]>([
    {
      id: Date.now(),
      title: "Instalar Angular CLI",
      completed: false
    },
    {
      id: Date.now(),
      title: "Crear proyecto",
      completed: false
    },
    {
      id: Date.now(),
      title: "Crear componentes",
      completed: false
    },
        {
      id: Date.now(),
      title: "Añadir signals",
      completed: false
    }
  ]);


  changeHandler = (event: Event)=>{

    //Capturar tarea

    const inputElement = event.target as HTMLInputElement
    const newTask =inputElement.value

    console.log(`Nueva tarea ingresada: ${newTask}`)

    // Agregar tarea al array de tareas (recuerda que es signal)

    this.addTask(newTask)

    // Limpiar input

    inputElement.value= ""

  }

  addTask = (title:string) =>{

    const newTask: Task = {
      id: Date.now(),
      title: title,
      completed: false
    }

    this.tasks2.update((array)=> [...array,newTask] )
  }

  updateTask = (index: number, statusChecked: boolean) =>{

    this.tasks2.update((array)=>
      array.map((tarea, indice) =>
        indice == index ? { ...tarea, completed: statusChecked } : tarea

      ) )

  }



  deleteTask = (index: number) =>{

    // Eliminar la tarea

     this.tasks2.update((array) => array.filter((item, posicion)=> posicion !== index))

  }

  changeCheck = (event: Event, index: number) =>{

    console.log(event)

    const inputElement = event.target as HTMLInputElement
    const statusChecked = inputElement.checked

    //Actualizar tarea

    this.updateTask(index, statusChecked)

    console.log(this.tasks2())
  }
}

