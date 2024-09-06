import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Appointment } from '../../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent {
  @Input() appointments: Appointment[] = [];
  @Output() deleteAppointment = new EventEmitter<number>();

  deleteAppointmentHandler(i: number) {
      this.deleteAppointment.emit(i);

  }
}
