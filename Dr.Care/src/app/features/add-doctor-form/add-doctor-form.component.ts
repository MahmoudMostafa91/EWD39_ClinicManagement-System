import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/_services/Doctor.service'
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ClinicService } from 'src/app/_services/clinic.service';
import { clinicdata } from 'src/app/_models/clinicdata';
import { HttpClient , HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-add-doctor-form',
  templateUrl: './add-doctor-form.component.html',
  styleUrls: ['./add-doctor-form.component.scss']
})
export class AddDoctorFormComponent implements OnInit {
  addDoctorForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  id;
  clinic;
  selecetdFile : File = null;
  myForm;
  imageRes;



  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private DoctorService: DoctorService,
    private ActivatedRoute: ActivatedRoute,
    private ClinicService: ClinicService,
    private Http : HttpClient
  ) { }

  ngOnInit() {
    this.getClinic(this.ActivatedRoute.snapshot.paramMap.get(`id`));
    this.addDoctorForm = this.formBuilder.group({
      name: ['', Validators.required],
      spectialisation: ['', Validators.required],
      ClinicfK: [ '' , Validators.required],
      ImageUrl: [ '' ] ,
      Degree: [ '' ] ,
    });
  }

  get f() { return this.addDoctorForm.controls; }
  AddDoctor(clinicId: number) {
    this.submitted = true;
    this.loading = true;
    this.myForm = this.addDoctorForm.value;
    this.myForm.ClinicfK = clinicId;
    this.myForm.ImageUrl = this.imageRes ;
    this.DoctorService.Add(this.myForm);
    this.router.navigate(['/Home']);
    console.log(this.myForm);
 
  }

  getClinic(id) {
    this.ClinicService.getById(id).subscribe(
      (data) => { this.clinic = data;},
       err => console.error(err),
       () => console.log(this.clinic.name)
     );
    
    }

    onFileSelected(event){
      this.selecetdFile = event.target.files[0];
  }

  OnUpload() {
    const fd = new FormData();
    fd.append('image' , this.selecetdFile , this.selecetdFile.name);
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })};
    this.Http.post( 'http://localhost:51465/api/image/Upload' , fd  )
    .subscribe( res => {
      console.log(res);
      this.imageRes = res;
    });
    }
    
    
}
