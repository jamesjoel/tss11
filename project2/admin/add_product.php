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
    <div class="col-md-8 offset-md-2">
      <h2 class="text-center">Add New Product</h2>
      <form action="save_product.php" method="post">
      <div class="card">
        <div class="card-header">Add New</div>
        <div class="card-body">
          <div class="form-group">
            <label>Product Name</label>
            <input type="text" name="pro_name" class="form-control">
          </div>
          <div class="form-group">
            <label>Product Price</label>
            <input type="text" name="pro_price" class="form-control">
          </div>
          <div class="form-group">
            <label>Product Category</label>
            <select name="pro_cate" class="form-control">
              <option>Select</option>
              <option>Home Appliance</option>
              <option>Electronics</option>
              <option>Mobiles</option>
              <option>Laptop & Computer</option>
              <option>Fashion Mens</option>
              <option>Fashion Womens</option>
            </select>
          </div>
          <div class="form-group">
            <label>Product Detail</label>
            <textarea name="pro_detail" class="form-control"></textarea>
          </div>
          <div class="form-group">
            <label>Discount</label>
            <input type="text" name="pro_discount" class="form-control">
          </div>
        </div>
        <div class="card-footer">
          <input type="submit" value="Add" class="btn btn-primary">
        </div>
      </div>
    </form>
    </div>
  </div>
</div>

</body>
</html>