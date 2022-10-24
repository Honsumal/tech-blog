const router = require('express').Router();
const apiRoutes = require('./api');
const indexRoutes = require('./index-routes.js');

router.use('/api', apiRoutes);
router.use('/', indexRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;