const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/paymentController');

// Ruta para iniciar el pago
router.post('/create', PaymentController.createPayment);

// Ruta para manejar webhooks
router.post('/webhook', PaymentController.handleWebhook);

module.exports = router;
