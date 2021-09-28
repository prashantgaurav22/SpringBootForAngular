import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { faSave, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Department } from '../model/department';
import { Employee } from '../model/employee';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 employeeForm: FormGroup;
isEditing: boolean = false;



btnIcon = faSave;
errIcon = faExclamationCircle;
errMsg:string;

 constructor(
private activatedRoute: ActivatedRoute,
private employeeService: EmployeeService,
private router: Router,
private formBuilder: FormBuilder)
{
this.employeeForm = formBuilder.group({
employeeId: ['', [Validators.required,Validators.min(1)]],
firstName: ['', [Validators.required]],
lastName: ['', [Validators.required]],
email: ['', [Validators.required,Validators.email]],
Dept_Id: ['', [Validators.required,Validators.min(1),Validators.max(7)]]


 });

}

 get f() {
return this.employeeForm.controls;
}

 ngOnInit(): void {
let icode = this.activatedRoute.snapshot.params.id;

 if (icode) {
this.employeeService.getById(icode).subscribe(
(data) => { this.employeeForm.setValue(data); this.isEditing = true; },
(err) => { console.log(err.message); }
);
}
}

 save() {

 let obr;

 if (this.isEditing) {
obr = this.employeeService.modify(this.employeeForm.value); //PUT Req
} else {
obr = this.employeeService.add(this.employeeForm.value);
this.router.navigateByUrl("/home");
}

 obr.subscribe(
(data) => { this.router.navigateByUrl("/home"); },
(err) => { console.log(err.message); }
);
}
}