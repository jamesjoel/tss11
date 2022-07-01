const express = require("express");
const routes = express.Router();

const homeCtrl = require("../controllers/homeController");
const aboutCtrl = require("../controllers/aboutController");
const contactCtrl = require("../controllers/contactController");
const studentCtrl = require("../controllers/studentController");

routes.use("/", homeCtrl);
routes.use("/about", aboutCtrl);
routes.use("/contact", contactCtrl);
routes.use("/student", studentCtrl);

module.exports = routes;