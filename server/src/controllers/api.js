'use strict';

var connection = require('../../database');

class apiController {
    getCards(req, res, next) {
        return res.status(200).send({ 'status': 'ok' });
    }
}

module.exports = new apiController;