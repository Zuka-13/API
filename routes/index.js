var express = require("express");
var router = express.Router();
const app = express();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Include Swagger documentation setup
require('./swagger')(app);

module.exports = router;
