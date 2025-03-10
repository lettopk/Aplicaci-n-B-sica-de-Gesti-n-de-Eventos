import { Component, EventEmitter, Output, Input } from '@angular/core';
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

  @Input() selectedEvent: any = null;   // Recibir evento a editar
  @Output() eventUpdated = new EventEmitter<void>(); // Emitir evento cuando se agregue un evento


  constructor(private fb: FormBuilder, private eventService: EventService) {
    console.log("Component acepted")
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  ngOnChanges() {
    if (this.selectedEvent) {
      this.eventForm.patchValue(this.selectedEvent); // Cargar datos en el formulario
    }
  }

  onSubmit() {
    if (this.eventForm.invalid) {
      this.errorMessage = "Todos los campos son obligatorios";
      this.eventForm.markAllAsTouched(); // Marca todos los campos como "tocados" para activar los errores
      console.log("Error:", this.errorMessage);
      return;
    }
  
    if (this.selectedEvent) {
      // Modo edición
      this.eventService.updateEvent(this.selectedEvent.id, this.eventForm.value).subscribe(() => {
        alert("Evento actualizado");
        this.eventUpdated.emit(); // Avisar que se actualizó
        this.resetForm();
      });
    } else {
      // Modo agregar nuevo
      this.eventService.createEvent(this.eventForm.value).subscribe(() => {
        alert("Evento agregado");
        this.eventUpdated.emit(); // Avisar que se agregó un evento nuevo
        this.resetForm();
      });
    }
  }
    
    resetForm() {
    this.eventForm.reset();
      this.selectedEvent = null;
      this.errorMessage = ''; 
    }
  }