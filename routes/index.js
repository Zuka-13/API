var express = require("express");
var router = express.Router();
const app = express();
const NodeCache = require('node-cache');

const cache = new NodeCache();
app.get('/api/data', (req, res) => {
  const cacheKey = 'data'; // Key for caching

// Check if data exists in cache
const cachedData = cache.get(cacheKey);
if (cachedData) {
  return res.json(cachedData);
}

const data = fetchDataFromSource();
// Store data in cache with a specified TTL (time to live)
cache.set(cacheKey, data, 300
  );

  return res.json(data);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Include Swagger documentation setup
require('./swagger')(app);

module.exports = router;
