import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  employee:Employee[];
  errMsg : string;
  searchText:any;

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    let obr = this.employeeService.getAll();

    obr.subscribe(
      (data)=>{this.employee=data;},
      (err)=>{
        this.errMsg=`Unable to fetech data! Please try after soemtime. 
        If problem persists contact Admin`;
        console.log(JSON.stringify(err));
      }
    );
  }

  delete(icode:number){
    let obr = this.employeeService.delete(icode);

    obr.subscribe(
      ()=>{ this.loadData(); },
      (err)=>{
        this.errMsg=`Unable to delete ! Please try after sometime. 
        If problem persists contact Admin`;
        console.log(JSON.stringify(err));
      }
    );
  }

  details(empId:number){
    this.router.navigateByUrl(`/details/${empId}`)
  }
}