import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Id } from '../model/id'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  emps: Employee;
  errMsg: string;
 

  editIcon = faEdit;
  deleteIcon = faTrash;
  public cnt: Id;
  public count:number;


  constructor(private employeeService: EmployeeService, private router: Router
  ) {

    this.cnt = new Id();
    this.count = this.cnt.id;
  }




  ngOnInit(): void {

    
  }

  loadData() {
    this.employeeService.getById(this.count).subscribe(
      (data) => { this.emps = data }

    );


  }

}
