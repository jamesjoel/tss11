<?php
// connection to Database
$con = mysqli_connect("localhost", "root", "", "tss11");

// print_r($_POST);
$a = $_POST['full_name'];
$b = $_POST['username'];
$c = $_POST['password'];
$d = $_POST['add'];
$e = $_POST['gender'];
$f = $_POST['contact'];
$g = $_POST['city'];

// query
// INSERT INTO tablename (col1, col2, col3, ....) VALUES ('val1', 'val2', 'val3')

$query = "INSERT INTO user (full_name, username, password, address, gender, city, contact) VALUES ('$a', '$b', '$c', '$d', '$e', '$g', '$f') ";

// Now fire the query
mysqli_query($con, $query);

// now user go to login page
header("location: login.php");

?>