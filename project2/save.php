<?php
// print_r($_POST);

// connection to DataBase

$con = mysqli_connect("localhost", "root", "", "tss11");

$a = $_POST['full_name'];
$b = $_POST['username'];
$c = $_POST['pass'];
$d = $_POST['add'];
$f = $_POST['contact'];
$g = $_POST['gender'];
$h = $_POST['city'];

$query = "INSERT INTO user (full_name, username, password, address, contact, gender, city) VALUES ('$a', '$b', '$c', '$d', '$f', '$g', '$h')";

// run the query
mysqli_query($con, $query);
header("location:login.php");

?>