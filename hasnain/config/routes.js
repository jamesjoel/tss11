const express = require("express");
const routes = express.Router(); 


const indexCtrl = require("../controller/indexcontroller.js");
const aboutCtrl = require("../controller/aboutcontroller.js");
const bookCtrl = require("../controller/bookcontroller.js");
const menuCtrl = require("../controller/menucontroller.js");
const studentCtrl = require("../controller/studentcontroller.js");
const teachersCtrl = require("../controller/teacherscontroller.js");

routes.use("/", indexCtrl);
routes.use("/about", aboutCtrl);
routes.use("/book", bookCtrl);
routes.use("/menu", menuCtrl);
routes.use("/student", studentCtrl);
routes.use("/teachers", teachersCtrl);


module.exports = routes;