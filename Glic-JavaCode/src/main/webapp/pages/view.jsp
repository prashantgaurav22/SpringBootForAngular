<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>

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
.button1 {font-size: 28px;}

.button2 {background-color: ;
font-size: 13px;} /* Blue */


</style>

</head>
<center>
<body background="https://images.wallpaperscraft.com/image/surface_spot_dark_texture_50554_1920x1080.jpg">

	<table border="1" width="100%" >
		<tr style="color: silver;">
		
			<th>Department ID</th>
			<th>Department Name</th>

			
		</tr>

		<tr style="color:white;">
			
			<td>${dep.department.departmentId }</td>
			<td>${dep.department.departmentName }</td>
			
		</tr>
		<br><br><br><br><br><br><br><br>
		</table>
			<h2>
		<a href="/home" style="color: red">Home</a>
	</h2>			

	
		
	
	
</body>
<center>
</html>