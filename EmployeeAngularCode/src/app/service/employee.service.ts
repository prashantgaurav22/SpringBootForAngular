import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeesEndPoint: string;

  constructor(private client: HttpClient) {
    this.employeesEndPoint = environment.employeesEndPoint
  }

  getAll(): Observable<Employee[]> {
    return this.client.get<Employee[]>(this.employeesEndPoint);
  }

  getById(id: number): Observable<Employee> {
    return this.client.get<Employee>(`${this.employeesEndPoint}/${id}`);
  } 

  add(employee: Employee): Observable<Employee> {
  
    return this.client.post<Employee>(this.employeesEndPoint, employee);
  }

  modify(employee: Employee): Observable<Employee> {
    return this.client.put<Employee>(this.employeesEndPoint, employee);
  }

  delete(id: number): Observable<void> {
    return this.client.delete<void>(`${this.employeesEndPoint}/${id}`);
  }

}