import { Component, EventEmitter, Output } from '@angular/core';
import { Appointment } from '../../models/appointment';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {
  appointmentTitle = '';
  appointmentDate = '';

  @Output() appointmentAdded = new EventEmitter<Appointment>();

  addAppointment(){

    if(!this.appointmentTitle || !this.appointmentDate){
      alert('Please enter the appointment title and date');
      return;
    }
    const appointment: Appointment =  {
      id: Math.floor(Math.random()*100000).toString(),
      name: this.appointmentTitle,
      date: new Date(this.appointmentDate)
    }

    this.appointmentAdded.emit(appointment);
    this.appointmentTitle = '';
    this.appointmentDate = '';
  }
}
