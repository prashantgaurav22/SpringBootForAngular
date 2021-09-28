package com.dxc.glic.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.lang.Nullable;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "Employee")

public class Employee implements Serializable {

	@Id
	@Column(name = "Employee_ID")
	@NotNull(message = "Employee_ID can not be blank")
	private Integer employeeId;

	@Column(name = "First_Name")
	@NotBlank(message = "FirstName can not be blank")	
	private String firstName;

	@Column(name = "Last_Name")
	@NotBlank(message = "LastName can not be blank")	
	private String lastName;

	@Column(name = "Email")
	@NotBlank(message = "Email can not be blank")
	@Email(message = "Email Should be in proper format")	
	private String email;
	
	@Transient
	@DateTimeFormat(iso = ISO.DATE_TIME)
	private LocalDateTime timeStamp;

	@ManyToOne
	@Nullable
	@JoinColumn(name="departmentId")
	private Department department;

	@Transient
	@JsonProperty(value = "Dept_Id")
	private Integer deptId;

	public Integer getDeptId() {
		return deptId;
	}

	public void setDeptId(Integer deptId) {
		this.deptId = deptId;
	}

	public Employee() {

	}

	public Integer getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Integer employeeId) {
		this.employeeId = employeeId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	public LocalDateTime getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(LocalDateTime timeStamp) {
		this.timeStamp = timeStamp;
	}

	@Override
	public String toString() {
		return "Employee [employeeId=" + employeeId + ", firstName=" + firstName + ", lastName=" + lastName + ", email="
				+ email + ", department=" + department + ", timeStamp=" + timeStamp + "]";
	}
	
	
	
}
