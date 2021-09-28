import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../model/employee';


@Pipe({
  name:'employeeFilter' 
})
export class FilterPipe implements PipeTransform {transform(emps: Employee[], searchText: any): Employee[] {



 
  if (!emps || !searchText) {
      return emps;
  }
  return emps.filter
  
  (
    emps =>

   
      (
          ((emps.firstName.toLowerCase().indexOf(searchText.toLowerCase())
          &&
          ((emps.lastName.toLowerCase().indexOf(searchText.toLowerCase())
          &&
          ((emps.email.indexOf(searchText.toLowerCase())
          
      )
      
))))  != -1)));

}
}   