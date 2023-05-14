const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    doctorName: { type: String, required: true },
    specialization: { type: String, required: true },
    appointmentDate: { type: String, required: true },
    appointmentTime: { type: String, required: true },
    patientFullName: { type: String, required: true },
    patientMobileNo: { type: String, required: true },
    patientEmail: { type: String, required: true },
    patientBirthDate: { type: String, required: true },
    patientPregnancyDate: { type: String, required: true },
    userId: { type: String, required: true }

}, {
    timestamps: true
});

const Appointment = mongoose.model('appointment', AppointmentSchema);
module.exports = Appointment;