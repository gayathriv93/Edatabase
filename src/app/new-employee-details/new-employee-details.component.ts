import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-new-employee-details',
  templateUrl: './new-employee-details.component.html',
  styleUrls: ['./new-employee-details.component.css']
})
export class NewEmployeeDetailsComponent implements OnInit {
  newEmployeeform: FormGroup
  addressform: FormGroup


  constructor(private fb: FormBuilder ,
    private http: HttpClient) {
    this.addressform = this.fb.group({
      streetAddress: ['', Validators.required],
      streetAddress2: [''],
      city: ['', Validators.required],
      state: [''],
      postalCode: ['']
    });
    this.newEmployeeform = this.fb.group({
      eId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: [''],
      position: [''],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      dateofBirth: ['', Validators.required],
      panNumber: ['', Validators.required],
      salary: ['', Validators.required],
      address: this.addressform,
      department: [''],
      designation: ['', Validators.required],
      joiningDate: ['', Validators.required],
      bgStatus: ['', Validators.required],
      workLocation: ['', Validators.required],

    });

  }
  onSubmit() {
    console.log(this.newEmployeeform.value);
    // fData :this.newEmployeeform.value;
    this.http.post('http://localhost:3000/api/stuff', this.newEmployeeform.value).subscribe(
    (response) => console.log(response),
    (error) => console.log(error))

  }

  ngOnInit(): void {

  }

}
