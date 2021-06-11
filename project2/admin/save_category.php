<?php
include("db.php");
// print_r($_POST);
$a = $_POST['category_name'];

$query = "INSERT INTO category (category_name) VALUES ('$a')";
mysqli_query($con, $query);

header("location:add_category.php");

?>