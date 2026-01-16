import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css',
})
export class Labs {

  /*Variable con Signals*/
  firstName = signal("Raul Adolfo")


  miNombre = "RaulSanz"
  city = 'Lima';
  country = "Peru"

tasks = [
    "Instalar Angular CLI",
    "Crear proyecto",
    "Crear componentes"
  ];


  tasks2 = signal([
    "Instalar Angular CLI",
    "Crear proyecto",
    "Crear componentes"
  ]);

  fruits = [
    "Manzana",
    "Pera",
    "Naranja"
  ]

  disabledButton= false

  rutaImg = "https://images.pexels.com/photos/30367164/pexels-photo-30367164.jpeg"

  /*Creación de un objeto literal*/
  englandTeam = {
    name: "Manchester United",
    escudo: "https://i.pinimg.com/originals/c4/6b/71/c46b71490cb2abe51cbe10e6fd48e19a.jpg",
    estadio: "OldTrafford"
  }

  clickHandler = ()=>{
    alert("Usted ha hecho un click")
  }

  dclickHandler = ()=>{
    alert("Usted ha hecho un DOBLE click")
  }

  changeHandler = (event: Event)=>{
    console.log(event)
    const inputElement = event.target as HTMLInputElement
    console.log(inputElement.value)
  }

  keyDownHandler = (event: KeyboardEvent)=>{

    console.log(event)

    console.log(`Se ha disparado la tecla ${event.key}`)

    const htmlElement = event.target as HTMLInputElement

    console.log(`Valor almacenado:  ${htmlElement.value}`)

  }


  keyEnterDown = () =>{
    console.log("Presionó enter")
  }

  actualizarInput = (event:Event) =>{

    console.log(event)

    const inputElement = event.target as HTMLInputElement

    this.firstName.set(inputElement.value)
  }
}
