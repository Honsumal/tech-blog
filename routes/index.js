const router = require('express').Router();
const apiRoutes = require('./api');
const landingRoutes = require('./landing-routes.js');

router.use('/api', apiRoutes);
router.use('/', landingRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;