import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSelectModule} from '@angular/material/select'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewEmployeeDetailsComponent } from './new-employee-details/new-employee-details.component';
import { EmployeeDatabaseComponent } from './employee-database/employee-database.component';
import { AbousUsComponent } from './abous-us/abous-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list'; 
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'newEmployeeDetails', component: NewEmployeeDetailsComponent },
  { path: 'employee-Database', component: EmployeeDatabaseComponent },
  { path: 'about-us', component: AbousUsComponent },
  { path: `employee-Database/:id`, component: EditComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: '/Home' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewEmployeeDetailsComponent,
    EmployeeDatabaseComponent,
    AbousUsComponent,
    ContactUsComponent,
    EditComponent,


  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    [RouterModule.forRoot(routes)],

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
