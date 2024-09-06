import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css',
})
export class AppointmentsComponent {
  appointments: Appointment[] = [];

  ngOnInit() {
    this.appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
  }

  appointmentAdded(e: any) {
    this.appointments.push(e);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }

  deleteAppointment(e: any) {
    this.appointments.splice(e, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
