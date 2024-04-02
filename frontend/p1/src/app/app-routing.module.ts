import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateEmployeesComponent } from './components/create-employees/create-employees.component';
import { UpdateEmployeesComponent } from './components/update-employees/update-employees.component';

const routes: Routes = [
  {path:'employees',component:EmployeeListComponent},
  {path:'add-new',component:CreateEmployeesComponent},
  {path:'update/:id',component:UpdateEmployeesComponent},
  {path:'',redirectTo:'employees',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
