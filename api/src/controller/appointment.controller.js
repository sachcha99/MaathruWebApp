const Appointment = require("../model/appointment.model");

//Add New Appointment
const createAppointment = async (req, res) => {
    if (req.body) {

        const appointment = new Appointment(req.body);

        await appointment.save()
            .then(data => res.status(200).send({ data: data }))
            .catch(err => {
                res.status(500).send(err)
            });
    }

}


//Get Appointment Details
const getAppointmentByUser = async (req, res) => {
    console.log("req.params.userId::",req.params.id)
        await Appointment.find({ userId: req.params.id })
            .then((data) => {
                res.status(200).send(data);
            })
            .catch(error => {
                res.send(error);
            });
    

}

module.exports = {
   createAppointment,
   getAppointmentByUser
  
}