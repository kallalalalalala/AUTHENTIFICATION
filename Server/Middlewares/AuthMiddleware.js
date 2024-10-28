const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  // Assurez-vous de lire le token depuis les cookies
  const {token} = req.cookies; // Assurez-vous que le nom du cookie est correct

  if (!token) {
    return res.json({ status: false, message: "Token manquant." });
  }

  // Vérifiez et décodez le token
  jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ status: false, message: "Token invalide." });
    }

    try {
      // Recherchez l'utilisateur par ID
      const user = await User.findById(decoded.id); // Utilisez 'decoded.id' au lieu de 'data.id'
      if (user) {
        return res.json({ status: true, user: user.username });
      } else {
        return res.status(404).json({ status: false, message: "Utilisateur non trouvé." });
      }
    } catch (error) {
      console.error("Erreur lors de la recherche de l'utilisateur :", error);
      return res.status(500).json({ status: false, message: "Erreur serveur." });
    }
  });
}
