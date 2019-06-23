import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { clinicdata } from 'src/app/_models/clinicdata';
import { Observable } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({ providedIn: 'root' })
export class ClinicService {
    private baseUrl:string= 'http://localhost:51465/';
    clinics: clinicdata[];

    constructor(private http: HttpClient) { }

   

  
    
    
    getAll() : Observable<any>{
        return this.http.get(this.baseUrl + '/api/clinic/GetClinics');
    }  

    getSomeClinics() : Observable<any>{
        return this.http.get(this.baseUrl + '/api/clinic/getSomeClinics');
    }  


    getById(id) {
        return this.http.get( this.baseUrl + `api/clinic/GetClinicById/${id}`);
    }

    Add(clinic:clinicdata) {
        console.log(clinic);
         this.http.post(this.baseUrl + 'api/clinic' , clinic).subscribe();
    }
    delete(id) {
        return this.http.delete(`hamada/users/${id}`);
    }
}
