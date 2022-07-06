const express = require("express")
const routes = express.Router();

const home = require("../controllers/homeController");
const about = require("../controllers/aboutController");
const contact = require("../controllers/contactController");
const student = require("../controllers/studentController");
const teacher = require("../controllers/teacherController");



routes.use("/", home);
routes.use("/about",about);
routes.use("/contact",contact);
routes.use("/student",student);
routes.use("/teacher",teacher);



module.exports = routes;