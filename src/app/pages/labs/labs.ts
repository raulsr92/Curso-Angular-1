import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css',
})
export class Labs {
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
}
