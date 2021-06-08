<?php
include("header.php");
?>
    <!-- Hero Section End -->

   <div class="container my-5">
    <div class="row">
        <div class="col-md-12">
            <h1 class="display-3">Register Page</h1>
            <br />
            <br />
            <br />
                <form action="save.php" method="post">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <div class="card">
                        <div class="card-header">
                            <h4>User Signup</h4>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label>Full Name</label>
                                <input name="full_name" type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Username</label>
                                <input name="username" type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input name="password" type="password" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Re-Password</label>
                                <input type="password" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Address</label>
                                <textarea name="add" class="form-control"></textarea>
                            </div>
                            <div class="form-group">
                                <label>Contact</label>
                                <input name="contact" type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Gender</label>
                                <br/>
                                <br/>
                                Male <input type="radio" value="male" name="gender">
                                Female <input type="radio" value="female" name="gender">
                            </div>
                            <div class="form-group">
                                <label>City</label>
                                <select name="city" class="form-control">
                                    <option>Select</option>
                                    <option>Indore</option>
                                    <option>Mumbai</option>
                                    <option>Pune</option>
                                </select>
                            </div>
                        </div>
                        <div class="card-footer">
                            <input type="submit" class="site-btn" value="Signup">
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
   </div> 
    
   
<?php 
include("footer.php")
?>
