const express = require('express');
const router = express.Router();
const PaymentController = require('../controller/payment.controller');

module.exports = function () {
    router.get('/config', PaymentController.getConfigDetails);
    router.post('/create-payment-intent', PaymentController.createPayment);

    return router;
}