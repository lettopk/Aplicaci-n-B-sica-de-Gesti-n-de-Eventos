import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  eventForm: FormGroup;
  errorMessage: string = '';

  @Output() eventAdded = new EventEmitter<void>(); // Emitir evento cuando se agregue un evento


  constructor(private fb: FormBuilder, private eventService: EventService) {
    console.log("Component acepted")
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      console.log('Evento enviado:', this.eventForm.value);
      this.eventService.createEvent(this.eventForm.value).subscribe({
        next: (response) => {
          this.eventForm.reset(); // Limpiar los campos
          this.errorMessage = ''; // Ocultar el mensaje de error
          this.eventAdded.emit(); // Emitir evento para actualizar la lista
          console.log(' Respuesta del backend:', response)
        },
        error: (error) => console.error(' Error al enviar datos:', error)
      });
    } else {
      this.errorMessage = '⚠️Todos los campos son obligatorios.';
      return;
      console.warn('El formulario no es válido');
    }
    }
  
}