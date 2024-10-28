
const mongoose = require("mongoose");
require("dotenv").config();

const {MONGO_URI} = process.env;


mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("Connecté à MongoDB avec succès !");
    })
    .catch((err) => {
        console.error("Erreur de connexion à MongoDB :", err);
    });

module.exports = mongoose;