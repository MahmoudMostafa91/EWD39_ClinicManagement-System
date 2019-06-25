import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userdata } from '../_models/userdata';

@Injectable({ providedIn: 'root' })
export class UserService {
    baseUrl = 'http://localhost:51465/';
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(`hamada/users`);
    }

    register(user: Userdata) {
        this.http.post(this.baseUrl + 'api/Account/Register', user).subscribe();
    }
    delete(id) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}
