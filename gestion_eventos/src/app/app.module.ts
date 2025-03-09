import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EventFormComponent } from './components/event-form/event-form.component'; // Asegúrate de importar correctamente

@NgModule({
  declarations: [
    AppComponent,
    EventFormComponent // Agrega aquí tu componente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
