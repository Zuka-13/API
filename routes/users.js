var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;

/**
* @swagger
* /users:
*   get:
*     summary: Get all users
*     description: Retrieve a list of all users.
*     responses:
*       200:
*         description: Successful operation
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Users'
*/
app.get('/users', (req, res) => {
 // Your route implementation
 res.json(users);
});
