import { Component } from '@angular/core';
import { EventFormComponent } from './components/event-form/event-form.component'; 
import { EventListComponent } from './components/event-list/event-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EventFormComponent, EventListComponent], 
  templateUrl: './app.component.html',
  styleUrl: './ app.component.css'
})
export class AppComponent {
  title = 'gestion_eventos';

constructor() {
    console.log('AppComponent cargado');
  }
}