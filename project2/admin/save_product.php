<?php
include("db.php");
// print_r($_POST);
$a = $_POST['pro_name'];
$b = $_POST['pro_price'];
$c = $_POST['pro_cate'];
$d = $_POST['pro_detail'];
$e = $_POST['pro_discount'];

$query = "INSERT INTO product (product_name, product_price, product_category, product_discount, product_detail) VALUES ('$a', '$b', '$c', '$e', '$d')";

mysqli_query($con, $query);
header("location:add_product.php");

?>