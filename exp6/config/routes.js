const express = require("express");
const routes = express.Router();


const home = require("../controllers/homeController");
const about = require("../controllers/aboutController");
const contact = require("../controllers/contactController");
// const help = require("../controllers/helpController");



routes.use("/", home);
routes.use("/about", about);
routes.use("/contact", contact);
// routes.use("/help", help);





module.exports = routes;