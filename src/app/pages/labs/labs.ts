import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-labs',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css',
})
export class Labs {

  /*Variable con Signals*/
  firstName = signal("Raul Adolfo")


  miNombre = "RaulSanz"
  city = 'Lima';
  country = "Peru"

  number1 = 23;
  number2 = 34;

  edad = signal(18);

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

  englandTeam = signal({
    name: "Manchester United",
    escudo: "https://i.pinimg.com/originals/c4/6b/71/c46b71490cb2abe51cbe10e6fd48e19a.jpg",
    estadio: "OldTrafford",
    country: "Inglaterra",
    championsLeague: 3
  })

  //Controlador para formulario reactivo

  colorCtrl = new FormControl();
  nameCtrl = new FormControl();

  widthCtrl = new FormControl(50,{
    nonNullable: true,
  })

  name2Ctrl = new FormControl(" ",{
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3),  /*Tamaño mínimo de un nomnre: 3 caracteres*/
    ]
  })


  constructor(){
    this.colorCtrl.valueChanges.subscribe( v =>{
      console.log(v)
    })
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


  actualizarEquipo = (event:Event) =>{

    console.log(event)

    const inputElement = event.target as HTMLInputElement
    console.log(inputElement.value)

    const newValue = inputElement.value
    console.log(inputElement.id)


      switch (inputElement.id) {
        case"pais":
            this.englandTeam.update( (equipo)=>{
              return {...equipo, country:newValue} })
          break;
        case"equipo":
            this.englandTeam.update((equipo) => ({...equipo, name: newValue }))
          break;

        case "copas":
            this.englandTeam.update((equipo) => ({...equipo, championsLeague: parseInt(newValue,10) }))
          break;
      }

  }

  actualizarEdad = (event:Event) =>{

        const inputElement = event.target as HTMLInputElement  //capturamos el input text de la edad

        console.log(inputElement.value)

        // Actualizar edad

        this.edad.set(parseInt(inputElement.value))

  }


}
