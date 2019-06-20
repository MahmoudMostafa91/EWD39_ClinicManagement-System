import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ClinicService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(`hamada/users`);
    }

    Add(clinic) {
        return this.http.post(`hamada/users/register`, clinic);
    }

    delete(id) {
        return this.http.delete(`hamada/users/${id}`);
    }
}
