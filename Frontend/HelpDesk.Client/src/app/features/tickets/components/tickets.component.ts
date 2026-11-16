import { Component } from '@angular/core';
import { GetAllTicketsComponent } from '../get-all/get-all-tickets';
import { CreateTicketComponent } from '../create/create-ticket';
import { GetAssignedTicketsComponent } from '../get-assigned/get-assigned-tickets';
import { GetMyTicketsComponent } from '../get-my/get-my-tickets';

@Component({
  selector: 'app-tickets',
  imports: [
    CreateTicketComponent,
    // DeleteTicketComponent,
    // UpdateTicketComponent,
    GetAssignedTicketsComponent,
    // GetByIdTicketComponent,
    GetMyTicketsComponent,
    GetAllTicketsComponent,
  ],
  templateUrl: './tickets.component.html',
})
export class TicketsComponent { }