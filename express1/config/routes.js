const express =require("express");
const routes = express.Router();

const homeCtrl = require("../controllers/homeController");
const aboutCtrl = require("../controllers/contactController");
const contactCtrl = require("../controllers/contactController");

routes.use("/", homeCtrl);
routes.use("/about" , aboutCtrl);
routes.use("/contact", contactCtrl);

module.exports = routes;

// module.exports = routes;
