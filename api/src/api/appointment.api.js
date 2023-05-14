const express = require('express');
const router = express.Router();
const AppointmentController = require('../controller/appointment.controller');

module.exports = function (){
    router.post('/create', AppointmentController.createAppointment);
    router.get('/user/:id', AppointmentController.getAppointmentByUser);


    return router;
}