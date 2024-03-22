const router = require('express').Router();
const travellerRoutes = require('./travellerRoutes.js');
const locationRoutes = require('./locationRoutes');

router.use('/traveller', travellerRoutes);
router.use('/location', locationRoutes);

module.exports = router;
