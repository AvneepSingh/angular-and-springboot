import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from '../../employee';
import { EmployeeService } from '../../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit,OnChanges {

  employees:Employee[] | undefined;

  constructor(private employeeService:EmployeeService,private router:Router)
  {

  }

  ngOnInit(): void {
      this.getEmployees();
  }
  ngOnChanges(changes: SimpleChanges): void {
      this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(
      data=>{
        this.employees = data;
      }
    )
  }
  public updateEmployee(id:any)
  {
    this.router.navigate(['update',id]);
  }
  public deleteEmployee(id:any)
  {
    this.employeeService.deleteEmployee(id).subscribe(data=>{
        this.getEmployees();
    });
  }
}
