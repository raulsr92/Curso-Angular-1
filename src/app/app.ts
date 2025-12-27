import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Labs} from "./pages/labs/labs"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Labs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


}
