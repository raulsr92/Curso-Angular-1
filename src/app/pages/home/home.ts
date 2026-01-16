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
}
