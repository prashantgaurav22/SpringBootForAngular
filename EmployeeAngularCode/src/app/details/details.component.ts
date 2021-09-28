import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  empid: number;
  emps: Employee;
  errMsg: string;


  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {

    let icode = this.activatedRoute.snapshot.params.id;
    this.empid = icode;
    this.loadData();
  }
  loadData() {
    this.employeeService.getById(this.empid).subscribe(
      (data) => { this.emps = data }

    );


  }

}
