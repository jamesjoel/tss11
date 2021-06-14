<?php
// $arr = array("name"=>"rohit", "age"=>25, "city"=>"indore");
// print_r($arr);
// echo "<br />";
// echo "<br />";
// echo "<br />";
// echo "<br />";
// echo json_encode($arr);
// convert php array into json object


$con =mysqli_connect("localhost", "root", "", "tss9");
$query = "SELECT * FROM student";
$result = mysqli_query($con, $query);

$arr=array();

while($data = mysqli_fetch_assoc($result))
{
	// print_r($data);
	// echo "<Br />";
	// $arr[]=$data;
	echo json_encode($data);
	
}

// echo json_encode($arr);

// print_r($arr);








/*
	JSON Format

	[
		{
	
		},
		{
	
		},
		{
	
		},
		{
	
		}

	]



*/
?>