'use strict';
const messages = require('../files/messages').module;
const blessings = require('../files/blessings').module;

class apiController {
    getCards(req, res, next) {
        return res.status(200).send({
            'message': this.getValue(messages),
            'blessing': this.getValue(blessings)
        });
    }
    getValue(list) {
        return list[Math.floor(Math.random() * list.length)];
    }
}

module.exports = new apiController;