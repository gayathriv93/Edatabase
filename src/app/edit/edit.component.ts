import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id = location.pathname.split('/')[2];
  editdata: any;
  newEmployeeform: FormGroup

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,

  ) {
    console.log(this.id);
    this.newEmployeeform = this.fb.group({
      eId: ['', Validators.required],
      department: [''],
      firstName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      lastName: [''],
      position: [''],
    });

  }

  ngOnInit(): void {

    this.http.get(`http://localhost:3000/api/stuff/${this.id}`).subscribe((data: any) => {
      console.log(this.id);
      this.editdata = data;
      console.log(this.editdata);
      this.getDetails()

    })

  }

  getDetails(): any {
    this.newEmployeeform.get('eId')?.setValue(this.editdata.eId);
    this.newEmployeeform.get('firstName')?.setValue(this.editdata.firstName);
    this.newEmployeeform.get('lastName')?.setValue(this.editdata.lastName);
    this.newEmployeeform.get('department')?.setValue(this.editdata.department);
    this.newEmployeeform.get('position')?.setValue(this.editdata.position);
    this.newEmployeeform.get('phoneNumber')?.setValue(this.editdata.phoneNumber);
  }

  onSubmit() {
    this.http.put<any>(
      `http://localhost:3000/api/stuff/${this.editdata.phoneNumber}`,
      this.newEmployeeform.value,
    ).subscribe((data: any) => {
      console.log(this.editdata.phoneNumber);
      console.log(data)
    })
  }

}
