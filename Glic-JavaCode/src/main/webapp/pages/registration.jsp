<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<%@page import="java.time.LocalDate"%>
<html>
<head>

<style type="text/css">
.button {
	background-color: #4CAF50; /* Green */
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
}

.button1 {
	font-size: 28px;
}

.button2 {
	background-color:;
	font-size: 15px;
} /* Blue */
</style>
</head>
<center>
	<body
		background="https://images.wallpaperscraft.com/image/surface_dark_light_texture_50363_1920x1080.jpg">
		<form:form action="add" method="POST" modelAttribute="Employee">


			<br>
			<br>
			<br>
			<br>
			<br>
			<br>


			<h1 style="color: buttonface;">
				<b><u>Employees Registration Form: </u></b>
			</h1>

			<table border="2" width="600px" style="color: white;">
				<tr>
					<th colspan="3">Employee Form
				</tr>
				<tr>

					<th colspan="2">Employee ID:</th>

					<th><input type="number" name="employeeId"></th>

				</tr>

				<tr>
					<th colspan="2">First Name:</th>
					<th><input type="text" name="firstName"></th>
				</tr>

				<tr>
					<th colspan="2">Last Name:</th>
					<th><input type="text" name="lName"></th>
				</tr>

				<tr>
					<th colspan="2">Email:</th>
					<th><input type="text" name="email"></th>
				</tr>


				<tr>

					<th colspan="2">Department ID:</th>

					<th><input type="number" name="department"></th>

				</tr>




			</table>


			<br />

			<button class="button button2">Submit</button>





		</form:form>

		<br />
		<br />
		<br />
		<br />
		<h2>
			<a href="/home" style="color: red">Home</a>
		</h2>
	</body>
</center>
</html>