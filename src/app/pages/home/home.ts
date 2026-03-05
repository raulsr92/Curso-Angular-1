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
      completed: false,

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

      const value = this.newTaskCtrl.value.trim()

      /*Validar que el texto no sea espacios en blanco*/

      if (value.length >0) { //También funciona: value !==''  ---- NO funciona:  value !==' ' (con espacio entre comillas)
        console.log("Es diferente de vacío")
        this.addTask(value)
        console.log(`Nueva tarea ingresada: ${this.newTaskCtrl.value}`)

        // Limpiar input
        this.newTaskCtrl.setValue("");
      }
    }
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

    console.log(statusChecked)

    //Actualizar tarea

    this.updateTask(index, statusChecked)

    console.log(this.tasks2())
  }

  updateTaskEditingMode = (index: number, event?: Event)=>{

   this.tasks2.update((array)=>
      array.map((tarea, indice)=> {
        if(indice==index){
          if (tarea.editing) { //si la tarea está en modo edición y hago ENTER
            if(event) {  // si hay evento significa que el evento es keydown ENTER
                 const inputElementEdited = event.target  as HTMLInputElement;
                 const newTaskEdited = inputElementEdited.value

                 console.log(newTaskEdited)
                 return  { ...tarea, title: newTaskEdited,editing: false }
            };
            return { ...tarea, editing: false } //Cierra el modo de edición si es que no se cambió la tarea
          } else{
            return { ...tarea, editing: true } //Apertura la tarea en modo edición se se hizo DOBLE CLICK
          }
        } else{
          return { ...tarea, editing: false } //Cierra el modo edición a las tareas, para evitar 2 tareas a la vez en modo edición
        }
      }
     )
    )
  }

/*
  updateTaskAfterEditing = (event: Event, index: number)=>{

    const inputElementEdited = event.target  as HTMLInputElement;
    const newTaskEdited = inputElementEdited.value

    console.log(newTaskEdited)

    this.tasks2.update((array)=>

      array.map ((tarea, indice) => {
        return indice == index ? { ...tarea, title: newTaskEdited } : tarea
      })

    )

  }
    */
}

