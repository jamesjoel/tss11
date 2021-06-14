<?php

$con =mysqli_connect("localhost", "root", "", "tss9");
$query = "SELECT * FROM employee";
$result = mysqli_query($con, $query);

$arr = array();

while($data = mysqli_fetch_assoc($result))
{
	$arr[]=$data;
}

echo json_encode($arr);

?>