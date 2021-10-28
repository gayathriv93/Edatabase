import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-database',
  templateUrl: './employee-database.component.html',
  styleUrls: ['./employee-database.component.css']
})
export class EmployeeDatabaseComponent implements OnInit {
  data: any[] = [];
  constructor(
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
    this.getData();
  }
onEdit(id:any){
  this.http.get(`http://localhost:3000/api/stuff/${id}`).subscribe((data: any) => {
    console.log(id);
    this.data = data;
    console.log(data);
    
})
}
getData()  {
  this.http.get('http://localhost:3000/api/stuff').subscribe((data: any) => {
    console.log(data);
    this.data = data;
  })
}
  onDelete(id: any) {
    this.http.delete(`http://localhost:3000/api/stuff/${id}`)
    .subscribe({
        next: data => {
          console.log(id);
          this.getData();
          console.log( 'Delete successful');
        },
        error: error => {
          console.log(id);

            console.error('There was an error!', error);
        }
    });
  }
}
