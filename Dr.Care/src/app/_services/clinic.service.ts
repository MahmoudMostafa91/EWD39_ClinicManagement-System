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

    // getAll()  {
    //     // return this.http.get<any[]>(hamada/users);
    //     return this.http.get<any[]>(this.baseUrl + 'api/clinic').subscribe((data) => {
    //         this.clinics = data.map((response) => {
    //           return <clinicdata>{
    //             id: response.Id,
    //             name: response.Name,
    //             description:response.Desc,
    //             phone:response.Phone,
    //             address:response.Address,
    //             review:response.Review
    //           };
    //         });
    //     });
    // }



  
    
    
    getAll() {
        return this.http.get(this.baseUrl + '/api/clinic');
    }  


    getById(id) {
        return this.http.get( this.baseUrl + `api/clinic/${id}`);
    }

    Add(clinic:clinicdata) {
        console.log(clinic);
         this.http.post(this.baseUrl + 'api/clinic' , clinic).subscribe();
    }
    delete(id) {
        return this.http.delete(`hamada/users/${id}`);
    }
}
