import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrl: './update-employees.component.css'
})
export class UpdateEmployeesComponent implements OnInit{
  id!: number;
  employee:Employee = new Employee();
  constructor(
    private employeeService:EmployeeService,
    private route:ActivatedRoute,
    private router:Router
    ){}
  onSubmit()
  {
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.router.navigate(['/employees']);
    },error=>console.log(error));
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      this.employeeService.getEmployeeById(this.id).subscribe(data=>{
        this.employee = data;
      });
  }
}


