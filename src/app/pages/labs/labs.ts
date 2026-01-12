import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css',
})
export class Labs {
  miNombre = "RaulSanz"
  city = 'Lima';
  country = "Peru"
  tasks = [
    "Instalar Angular CLI",
    "Crear proyecto",
    "Crear componentes"
  ]

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
}
