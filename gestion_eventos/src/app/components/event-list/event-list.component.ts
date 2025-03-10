
import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-list',
  standalone:true,
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  imports: [CommonModule]
})
export class EventListComponent implements OnInit {
  events: any[] = [];
  selectedEvent: any = null;  // Evento seleccionado para edición

  constructor(private eventService: EventService) {
    this.loadEvents();
  }
  
  ngOnInit() {
    this.loadEvents();
  }

  editEvent(event: any) {
    this.selectedEvent = { ...event }; // Clonar objeto para evitar cambios en tiempo real
  }

  loadEvents() {
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data;
      },
        error: (error) => console.error('Error al obtener eventos:', error)
    });
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id).subscribe(() => {
      this.events = this.events.filter(event => event.id !== id);
    });
  }

  onEventUpdated() {
    this.loadEvents(); // Recargar eventos después de una edición o nuevo evento
    this.selectedEvent = null;
  }
}
