require('dotenv').config()
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
// const fileUpload = require('express-fileupload')
const connectDB = require("./src/config/database");
const UserAPI = require("./src/api/user.api")
const videoApI = require("./src/api/video.api")
const PaymentAPI = require('./src/api/payment.api');
const AppointmentAPI = require('./src/api/appointment.api');

const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
// app.use(fileUpload({
//   useTempFiles: true
// }))
connectDB();

app.get("/", (req, res) => {
    res.send("Hello Node!");
});

app.use("/user", UserAPI());
app.use("/video", videoApI);
app.use("/payment", PaymentAPI());
app.use("/appointment", AppointmentAPI());

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});