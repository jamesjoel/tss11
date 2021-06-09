<?php
include("header.php");
?>


    <!-- Start Categories of The Month -->
    <section class="container py-5">
        <div class="row pt-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">Registration</h1>
                <form action="save.php" method="post">
                <div class="card">
                    <div class="card-body">
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" name="full_name" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Username/Email</label>
                            <input type="text" name="username" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" name="pass" class="form-control">
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
                            <input type="text" name="contact" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Gender</label>
                            Male <input type="radio" name="gender" value="male">
                            Female <input type="radio" name="gender" value="female">
                        </div>
                        <div class="form-group">
                            <label>City</label>
                            <select name="city" class="form-control">
                                <option>Select</option>
                                <option>Indore</option>
                                <option>Mumbai</option>
                                <option>Pune</option>
                                <option>Delhi</option>
                            </select>
                        </div>

                    </div>
                    <div class="card-footer">
                        <input type="submit" value="Signup" class="btn btn-primary">
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    <!-- End Categories of The Month -->


    <!-- Start Featured Product -->
   


    <?php
    include("footer.php")
    ?>