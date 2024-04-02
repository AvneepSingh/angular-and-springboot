import { Component } from '@angular/core';
import { Employee } from '../../employee';
import { EmployeeService } from '../../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrl: './create-employees.component.css'
})
export class CreateEmployeesComponent {
  employee:Employee = new Employee();
  constructor(
    private employeeService:EmployeeService,
    private router:Router
    ){ }
  ngOnInit():void{

  }
  onSubmit()
  {
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
        this.router.navigate(['/employees'])
    },error=>console.log(error));
  }
}
