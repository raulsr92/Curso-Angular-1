import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.models';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
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

  newTaskCtrl = new FormControl('',{
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z][a-zA-Z0-9 ]*$')
    ]
  });


  changeHandler = ()=>{

    //Capturar tarea
    //const inputElement = event.target as HTMLInputElement
    //const newTask =inputElement.value
    //console.log(`Nueva tarea ingresada: ${newTask}`)
    // Agregar tarea al array de tareas (recuerda que es signal)
    //Validación

    console.log(this.newTaskCtrl.errors)

    if(this.newTaskCtrl.valid){   // true si pasa todas las validaciones.

      const value = this.newTaskCtrl.value
      this.addTask(value)
    }

    console.log(`Nueva tarea ingresada: ${this.newTaskCtrl.value}`)

    // Limpiar input

    this.newTaskCtrl.setValue("");
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

