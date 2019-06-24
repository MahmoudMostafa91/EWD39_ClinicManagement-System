import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { DoctorData } from 'src/app/_models/DoctorData';
import { Observable } from 'rxjs';
import { clinicdata } from '../_models/clinicdata';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({ providedIn: 'root' })
export class DoctorService {
    private baseUrl:string= 'http://localhost:51465/';
    Doctors: DoctorData[];

    constructor(private http: HttpClient) { }

  
    
    getAll() : Observable<any>{
        return this.http.get(this.baseUrl + '/api/doctor/GetDoctors');
    }  

    getSomeDoctors() : Observable<any>{
        return this.http.get(this.baseUrl + '/api/doctor/GetSomeDoctors');
    }  


    getById(id) {
        return this.http.get( this.baseUrl + `api/doctor/GetDoctorById/${id}`);
    }

    Add(doctor:DoctorData) {
        console.log(doctor);
         this.http.post(this.baseUrl + 'api/doctor/AddDr' , doctor).subscribe();
    }
    delete(id) {
        return this.http.delete(`hamada/users/${id}`);
    }
}
