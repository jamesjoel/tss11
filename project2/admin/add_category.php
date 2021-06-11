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
      <h2 class="text-center">Add New Category</h2>
      <form action="save_category.php" method="post">
      <div class="card">
        <div class="card-header">Add New</div>
        <div class="card-body">
          <label>Category Name</label>
          <input type="text" class="form-control" name="category_name">
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