'use strict';

const Router = require('express');
const apiController = require('../controllers/api');
const router = new Router();

router.route('/').get((...args)=>apiController.getCards(...args));

module.exports = router;
