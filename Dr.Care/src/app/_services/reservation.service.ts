import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ReservationService
{
constructor(private http:HttpClient) {}
getAll() {
    return this.http.get<any[]>(`hamada/users/reservations`);
}

reservation(order) {
    return this.http.post(`hamada/users/reservations`, order);
}

delete(id) {
    return this.http.delete(`${config.apiUrl}/reservations/${id}`);
}
}