import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from 'src/app/_models/reservation';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReservationService {
    reservations: Reservation[] = [];

    constructor(private http:HttpClient) {}

    getAll() : Reservation[]{
    return this.reservations.slice();
}

// getById(id : Number) {
//     return this.reservations.find( r => r.id == id);
// }

Add(reservation : Reservation) {
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
}

// delete(id) {
//     return this.http.delete(`${config.apiUrl}/reservations/${id}`);
// }
}