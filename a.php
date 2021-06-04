<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
<nav class="navbar bg-dark navbar-dark">
	<a href="#" class="navbar-brand">The Stepping Stone</a>
</nav>

<div class="container mt-4">
	<div class="row">
		<div class="col-md-6 offset-md-3">
			<form action="b.php" method="post">
				<!-- there are 2 type of method post and get -->
			<div class="card">
				<div class="card-header">
					<h4>Sample Form</h4>
				</div>
				<div class="card-body">
					<div class="form-group">
						<label>Full Name</label>
						<input name="full_name" type="text" class="form-control">
					</div>
					<div class="form-group">
						<label>Email</label>
						<input name="email" type="text" class="form-control">
					</div>
					<div class="form-group">
						<label>Password</label>
						<input name="pass" type="password" class="form-control">
					</div>
					<div class="form-group">
						<label>Address</label>
						<textarea name="add" class="form-control"></textarea>
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