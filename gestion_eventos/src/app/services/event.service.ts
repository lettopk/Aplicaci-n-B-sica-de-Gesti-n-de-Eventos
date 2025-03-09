import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://127.0.0.1:5000/events';

  async getEvents() {
    return (await axios.get(this.baseUrl)).data;
  }

  async createEvent(event: any) {
    return (await axios.post(this.baseUrl, event)).data;
  }

  async updateEvent(id: number, event: any) {
    return (await axios.put(`${this.baseUrl}/${id}`, event)).data;
  }

  async deleteEvent(id: number) {
    return (await axios.delete(`${this.baseUrl}/${id}`)).data;
  }
}

