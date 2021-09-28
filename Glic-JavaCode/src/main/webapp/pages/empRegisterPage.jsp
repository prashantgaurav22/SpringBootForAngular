<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<%@page import="java.time.LocalDate"%>
<html>
<head>


</head>
<body bgcolor="LightBlue">

<style>td,
th {
    border: 1px solid rgb(190, 190, 190);
    padding: 10px;
}

td {
    text-align: center;
}

tr:nth-child(even) {
    background-color: #eee;
}

th[scope="col"] {
    background-color: #696969;
    color: #fff;
}

th[scope="row"] {
    background-color: #d7d9f2;
}

caption {
    padding: 10px;
    caption-side: bottom;
}

table {
    border-collapse: collapse;
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-family: sans-serif;
    font-size: .8rem;
}
</style>
        <h2><a href="/home">Home</a></h2>
<center>
        <h1>
			<b><u>Dxc Technology</u></b>
		</h1>
		
	<form:form action="add" method="POST" modelAttribute="Employee">
       
		<table >
		
			<tr>
				<h3>Employee Registration Form</h3>
			</tr>
			
			<tr>
				<th scope="row">Employee Id:</th>
				<td><input type="number" name="employeeId" required></td>
			</tr>

			<tr>
			   <th scope="row">First Name:</th>
				<td><input type="text" name="firstName" required></td>
			</tr>
			
			<tr>
			    <th scope="row">Last Name:</th>
				<td><input type="text" name="lastName" required></td>
			</tr>
			
			<tr>
			    <th scope="row">Email:</th>
				<td><input type="text" name="email" required></td>
			</tr>
			
            <tr>
				<th scope="row">Department Id:</th>
				<th><select name="department">
						<option>Select</option>
						<option value="101">101-HR</option>
						<option value="102">102-R&D</option>
						<option value="103">103-Sales</option>
						<option value="104">104-Marketing</option>
						<option value="105">105-Production</option>
						<option value="106">106-Accountant</option>
						<option value="107">107-other</option>

				</select></th>
		</table>

     <br />
	<br />
       <button >Register</button>
		
	</form:form>
</center>
	<br />
	<br />
	
</body>
</html>