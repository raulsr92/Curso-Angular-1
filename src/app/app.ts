import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

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
