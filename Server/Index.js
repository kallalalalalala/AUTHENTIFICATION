const express = require("express");
const cors = require("cors");
const mongoose = require("./config/db");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { Login } = require("./Controllers/AuthController");
const { userVerification } = require("./Middlewares/AuthMiddleware");
app.use(express.json());


const PORT = 4000;



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  
});
mongoose;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use('/', authRoute);
app.use('/', Login);
app.use('/', userVerification);









