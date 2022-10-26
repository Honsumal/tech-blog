const router = require('express').Router();

const apiRoutes = require('./api');
const landingRoutes = require('./landing-routes.js');
const dashboardRoutes = require('./dashboard-routes.js')
const postRoutes = require('./post-routes')
const newPostRoutes = require('./new-post-routes')

router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/post', postRoutes)
router.use('/new', newPostRoutes)
router.use('/', landingRoutes);


router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;