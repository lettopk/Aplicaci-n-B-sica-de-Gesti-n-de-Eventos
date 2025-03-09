import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService) { }

  async ngOnInit() {
    this.events = await this.eventService.getEvents();
  }

  async deleteEvent(id: number) {
    await this.eventService.deleteEvent(id);
    this.events = this.events.filter(event => event.id !== id);
  }
}
