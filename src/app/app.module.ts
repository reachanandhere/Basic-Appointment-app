import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { FormsModule } from '@angular/forms';
import { AppointmentsComponent } from './appointments/appointments.component';
import { CreateAppointmentComponent } from './appointments/create-appointment/create-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    AppointmentsComponent,
    CreateAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
