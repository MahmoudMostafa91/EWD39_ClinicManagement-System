import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ClinicService } from '../../_services/clinic.service';
import { HttpClient , HttpHeaders } from '@angular/common/http';


@Component({ templateUrl: 'addclinic-form.component.html' })
export class AddclinicFormComponent implements OnInit {
    addClinicForm: FormGroup;
    loading = false;
    submitted = false;
    error: string;
    selecetdFile : File = null;
    imageRes;
    myForm;


    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private clinicService: ClinicService,
        private Http : HttpClient
    ) { }

    ngOnInit() {
        this.addClinicForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            phone: ['', Validators.required],
            address: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            Specilization: ['', [Validators.required]],
            ImageUrl: [ '' ] 
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.addClinicForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
       

        this.loading = true;
        this.myForm = this.addClinicForm.value;
        this.myForm.ImageUrl = this.imageRes ;
        this.clinicService.Add(this.myForm);
        // console.log(this.addClinicForm);
            // .subscribe(
            //     data => {
                    this.router.navigate(['/profile']);
            //     },
            //     error => {
            //         this.error = error;
            //         this.loading = false;
            //     });

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