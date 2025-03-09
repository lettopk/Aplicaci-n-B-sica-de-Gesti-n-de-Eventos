import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventFormComponent } from './components/event-form/event-form.component'; // Asegúrate de importar el componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventFormComponent], // Agrega aquí el componente
  templateUrl: '../app.component.html',
  styleUrl: '../app.component.css'
})
export class AppComponent {
  title = 'gestion_eventos';
}