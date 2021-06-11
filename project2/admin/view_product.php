<?php
include("db.php");
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/bootstrap.bundle.js"></script>
</head>
<body>
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <!-- Brand -->
  <a class="navbar-brand" href="#">Admin Panel</a>

  <!-- Toggler/collapsibe Button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Navbar links -->
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="add_product.php">Add Product</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="view_product.php">View Product</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="add_category.php">Add Category</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="view_category.php">View Category</a>
      </li>
    </ul>
  </div>
</nav>
<div class="container">
  <div class="row">
    <div class="col-md-10 offset-md-1">
      <h2 class="text-center mt-3">View All Product</h2>
      <br />
      <table class="table table-dark table-hover table-bordered table-striped">
        <tr>
          <th>S.No.</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Product Category</th>
          <th>Product Detail</th>
          <th>Product Discount</th>
        </tr>
        <?php
        $query = "SELECT * FROM product";
        $result = mysqli_query($con, $query);
        $n=1;
        while($data = mysqli_fetch_assoc($result))
        { ?>
          <tr>
            <td><?php echo $n; ?></td>
            <td><?php echo $data['product_name']; ?></td>
            <td><?php echo $data['product_price']; ?></td>
            <td><?php echo $data['product_category']; ?></td>
            <td><?php echo $data['product_detail']; ?></td>
            <td><?php echo $data['product_discount']; ?></td>
        <?php 
        $n++;
        }
        ?>
       
      </table>
      
    </div>
  </div>
</div>

</body>
</html>